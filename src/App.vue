<template>
  <div id="app" class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow pt-20 overflow-visible" role="main">
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
    <StructuredData />
  </div>
</template>

<script setup>
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSEO } from './composables/useSEO'
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
import StructuredData from './components/common/StructuredData.vue'

const route = useRoute()
const { updateMeta } = useSEO()

// Update SEO meta tags when route changes
const updateRouteMeta = () => {
  const meta = route.meta || {}
  updateMeta({
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords
  })
}

onMounted(() => {
  updateRouteMeta()
})

watch(() => route.path, () => {
  updateRouteMeta()
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
