<template>
  <article v-if="post" class="section-padding bg-white min-h-screen" itemscope itemtype="https://schema.org/BlogPosting">
    <div class="container-custom max-w-4xl">
      <!-- Back Button -->
      <button
        @click="$router.push('/blog')"
        class="mb-8 flex items-center text-gray-600 hover:text-primary-500 transition-colors"
        data-aos="fade-right"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </button>

      <!-- Featured Image -->
      <div v-if="post.image" class="mb-8 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up">
        <img 
          :src="post.image" 
          :alt="post.title"
          class="w-full h-auto object-contain"
          loading="eager"
        />
      </div>

      <!-- Article Header -->
      <header class="mb-8" data-aos="fade-up">
        <!-- Category Badge -->
        <div class="mb-4">
          <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            {{ post.category }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ post.title }}
        </h1>

        <!-- Meta Information -->
        <div class="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
          <time :datetime="post.date" class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ formatDate(post.date) }}
          </time>
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {{ post.author }}
          </div>
        </div>
      </header>

      <!-- Article Content -->
      <div class="prose prose-lg max-w-none" data-aos="fade-up">
        <div class="text-gray-700 leading-relaxed blog-content" v-html="formatContent(post.content)"></div>
      </div>

      <!-- Back to Blog Button -->
      <div class="mt-12 pt-8 border-t border-gray-200" data-aos="fade-up">
        <router-link
          to="/blog"
          class="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </router-link>
      </div>
    </div>
  </article>

  <!-- 404 State -->
  <div v-else class="section-padding text-center">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h2>
    <p class="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
    <router-link to="/blog" class="btn-primary">
      Back to Blog
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getBlogPostBySlug } from '../data/blog'
import { useSEO } from '../composables/useSEO'

const route = useRoute()
const post = computed(() => getBlogPostBySlug(route.params.slug))

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatContent = (content) => {
  if (!content) return ''
  
  // Split content into lines
  let lines = content.split('\n')
  let formatted = ''
  let inList = false
  
  lines.forEach((line, index) => {
    line = line.trim()
    
    // Skip empty lines (but add spacing)
    if (!line) {
      if (inList) {
        formatted += '</ul>'
        inList = false
      }
      formatted += '<br>'
      return
    }
    
    // H2 headings (##)
    if (line.startsWith('## ')) {
      if (inList) {
        formatted += '</ul>'
        inList = false
      }
      const text = line.substring(3).trim()
      formatted += `<h2>${text}</h2>`
      return
    }
    
    // H3 headings (###)
    if (line.startsWith('### ')) {
      if (inList) {
        formatted += '</ul>'
        inList = false
      }
      const text = line.substring(4).trim()
      formatted += `<h3>${text}</h3>`
      return
    }
    
    // List items (-)
    if (line.startsWith('- ')) {
      if (!inList) {
        formatted += '<ul>'
        inList = true
      }
      const text = line.substring(2).trim()
      formatted += `<li>${text}</li>`
      return
    }
    
    // Regular paragraphs
    if (inList) {
      formatted += '</ul>'
      inList = false
    }
    
    // Check for bold text (**text**)
    let processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    
    formatted += `<p>${processedLine}</p>`
  })
  
  // Close any open list
  if (inList) {
    formatted += '</ul>'
  }
  
  return formatted
}

// SEO
useSEO({
  title: post.value ? `${post.value.title} | Pramukh Groundnut Oil Mill Blog` : 'Blog Post | Pramukh Groundnut Oil Mill',
  description: post.value ? post.value.excerpt : 'Read our blog posts about groundnut oil, health, and cooking tips.',
  keywords: post.value ? `${post.value.category}, groundnut oil, ${post.value.title.toLowerCase()}` : 'blog, groundnut oil'
})
</script>

<style scoped>
.prose {
  color: #374151;
}

.blog-content {
  font-size: 1.125rem;
}

.blog-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  color: #111827;
  line-height: 1.3;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.blog-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #111827;
  line-height: 1.4;
}

.blog-content p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #374151;
  font-size: 1.125rem;
}

.blog-content ul {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-left: 2rem;
  list-style-type: disc;
}

.blog-content li {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.8;
  color: #374151;
  padding-left: 0.5rem;
}

.blog-content strong {
  font-weight: 600;
  color: #111827;
}

.blog-content br {
  margin-bottom: 1rem;
  display: block;
  content: "";
}
</style>

