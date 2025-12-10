<template>
  <div class="section-padding bg-white min-h-screen flex items-center">
    <div class="container-custom text-center">
      <div class="max-w-2xl mx-auto" data-aos="fade-up">
        <!-- 404 Number -->
        <h1 class="text-9xl md:text-[12rem] font-bold text-primary-500 mb-4">404</h1>
        
        <!-- Error Message -->
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h2>
        
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or the URL might be incorrect.
        </p>
        
        <!-- Helpful Links -->
        <div class="mb-8">
          <p class="text-gray-700 mb-4 font-semibold">You might be looking for:</p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link to="/" class="text-primary-500 hover:text-primary-600 hover:underline">
              Home
            </router-link>
            <router-link to="/products" class="text-primary-500 hover:text-primary-600 hover:underline">
              Products
            </router-link>
            <router-link to="/about" class="text-primary-500 hover:text-primary-600 hover:underline">
              About Us
            </router-link>
            <router-link to="/contact" class="text-primary-500 hover:text-primary-600 hover:underline">
              Contact
            </router-link>
            <router-link to="/faqs" class="text-primary-500 hover:text-primary-600 hover:underline">
              FAQs
            </router-link>
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/" class="btn-primary text-lg px-8 py-4">
            Go to Homepage
          </router-link>
          <button 
            @click="$router.back()" 
            class="btn-secondary text-lg px-8 py-4"
          >
            Go Back
          </button>
        </div>
        
        <!-- Search Suggestion -->
        <div class="mt-12 p-6 bg-gray-50 rounded-xl">
          <p class="text-gray-700 mb-2 font-semibold">Looking for something specific?</p>
          <p class="text-gray-600 text-sm">
            Try browsing our <router-link to="/products" class="text-primary-500 hover:underline">products</router-link> or 
            <router-link to="/contact" class="text-primary-500 hover:underline">contact us</router-link> for assistance.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSEO } from '../composables/useSEO'

// SEO for 404 page
useSEO({
  title: '404 - Page Not Found | Pramukh Groundnut Oil Mill',
  description: 'The page you are looking for could not be found. Browse our premium groundnut oil products or contact us for assistance.',
  keywords: '404, page not found, error',
  robots: 'noindex, follow'
})
</script>

<style scoped>
/* Additional styles if needed */
</style>

