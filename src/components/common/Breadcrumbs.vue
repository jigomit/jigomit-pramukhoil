<template>
  <nav v-if="breadcrumbs.length > 1" class="breadcrumbs" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2 text-sm text-gray-600" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="flex items-center"
        :itemprop="index < breadcrumbs.length - 1 ? 'itemListElement' : undefined"
        :itemscope="index < breadcrumbs.length - 1 ? true : undefined"
        :itemtype="index < breadcrumbs.length - 1 ? 'https://schema.org/ListItem' : undefined"
      >
        <router-link
          v-if="index < breadcrumbs.length - 1"
          :to="crumb.path"
          class="hover:text-primary-500 transition-colors"
          :itemprop="index < breadcrumbs.length - 1 ? 'item' : undefined"
        >
          <span :itemprop="index < breadcrumbs.length - 1 ? 'name' : undefined">{{ crumb.name }}</span>
        </router-link>
        <span v-else class="text-gray-900 font-medium" :itemprop="index < breadcrumbs.length - 1 ? undefined : 'name'">
          {{ crumb.name }}
        </span>
        <meta v-if="index < breadcrumbs.length - 1" :itemprop="'position'" :content="(index + 1).toString()" />
        <svg
          v-if="index < breadcrumbs.length - 1"
          class="w-4 h-4 mx-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../../data/products'

const route = useRoute()
const baseUrl = 'https://pramukhgroundnutoil.com'

const breadcrumbs = computed(() => {
  const crumbs = [
    {
      name: 'Home',
      path: '/'
    }
  ]

  const pathSegments = route.path.split('/').filter(Boolean)

  pathSegments.forEach((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/')
    let name = segment

    // Map route names to friendly names
    if (route.name === 'Products' && segment === 'products') {
      name = 'Products'
    } else if (route.name === 'ProductDetails' && segment === 'products') {
      name = 'Products'
    } else if (route.name === 'ProductDetails' && route.params.id) {
      const product = products.find(p => p.id === parseInt(route.params.id))
      if (product) {
        name = product.name
      } else {
        name = 'Product Details'
      }
    } else if (route.name === 'About' && segment === 'about') {
      name = 'About Us'
    } else if (route.name === 'ManufacturingProcess' && segment === 'manufacturing-process') {
      name = 'Process'
    } else if (route.name === 'Testimonials' && segment === 'testimonials') {
      name = 'Testimonials'
    } else if (route.name === 'Contact' && segment === 'contact') {
      name = 'Contact'
    } else if (route.name === 'Blog' && segment === 'blog') {
      name = 'Blog'
    } else if (route.name === 'BlogPost' && segment === 'blog') {
      name = 'Blog'
    } else if (route.name === 'BlogPost' && route.params.slug) {
      name = route.params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    } else if (route.name === 'FAQs' && segment === 'faqs') {
      name = 'FAQs'
    } else if (route.name === 'PrivacyPolicy' && segment === 'privacy-policy') {
      name = 'Privacy Policy'
    } else if (route.name === 'TermsConditions' && segment === 'terms-conditions') {
      name = 'Terms & Conditions'
    } else {
      // Capitalize and format segment
      name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    // Only add if not already in crumbs (avoid duplicates)
    if (!crumbs.find(c => c.path === path)) {
      crumbs.push({
        name,
        path
      })
    }
  })

  return crumbs
})

// Inject breadcrumb schema
import { onMounted, watch } from 'vue'

const injectBreadcrumbSchema = () => {
  // Remove existing breadcrumb schema
  const existingScripts = document.querySelectorAll('script[data-breadcrumb-schema]')
  existingScripts.forEach(script => script.remove())

  if (breadcrumbs.value.length > 1) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.value.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${baseUrl}${crumb.path}`
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-breadcrumb-schema', 'true')
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }
}

onMounted(() => {
  injectBreadcrumbSchema()
})

watch(() => route.path, () => {
  injectBreadcrumbSchema()
})
</script>

<style scoped>
.breadcrumbs {
  @apply py-4;
}

.breadcrumbs ol {
  @apply flex-wrap;
}
</style>

