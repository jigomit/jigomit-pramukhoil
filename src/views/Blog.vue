<template>
  <div class="section-padding bg-white min-h-screen">
    <div class="container-custom">
      <!-- Page Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Blog
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Stories, tips & updates from our rescue community
        </p>
      </div>

      <!-- Blog Posts Grid -->
      <div v-if="posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in posts"
          :key="post.id"
          class="card group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
          data-aos="fade-up"
          @click="$router.push(`/blog/${post.slug}`)"
        >
          <!-- Post Image -->
          <div v-if="post.image" class="mb-4 -mx-6 -mt-6 rounded-t-xl overflow-hidden bg-gray-50 flex items-center justify-center">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          <!-- Post Content -->
          <div class="flex flex-col h-full">
            <!-- Category Badge -->
            <div class="mb-4">
              <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                {{ post.category }}
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
              {{ post.title }}
            </h2>

            <!-- Date -->
            <div class="flex items-center text-sm text-gray-500 mb-4">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ formatDate(post.date) }}
            </div>

            <!-- Excerpt -->
            <p class="text-gray-600 mb-6 flex-grow line-clamp-3">
              {{ post.excerpt }}
            </p>

            <!-- Read More Button -->
            <button class="text-primary-500 font-semibold hover:text-primary-600 transition-colors text-left flex items-center group">
              Read More
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <p class="text-gray-600 text-lg">No blog posts available at the moment.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { blogPosts } from '../data/blog'
import { useSEO } from '../composables/useSEO'

const posts = computed(() => {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO
useSEO({
  title: 'Blog - Stories, Tips & Updates | Pramukh Groundnut Oil Mill',
  description: 'Read our blog for stories, tips, and updates about groundnut oil, health benefits, cooking tips, and sustainable practices. Expert insights from Pramukh Groundnut Oil Mill.',
  keywords: 'groundnut oil blog, cooking tips, health benefits, traditional oil, sustainable practices, oil extraction methods'
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

