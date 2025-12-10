<template>
  <section ref="heroSection" class="relative min-h-screen flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 w-full max-w-full">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <!-- Animated Background Elements -->
    <div class="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div class="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

    <div class="container-custom relative z-10 pt-6 lg:pt-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div ref="heroContent" class="text-center lg:text-left">
          <div class="inline-block mb-4 px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
            Pure & Natural Groundnut Oil
          </div>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Quality
            <span class="text-gradient block">Groundnut Oil</span>
            for Your Kitchen
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Experience the authentic taste and health benefits of our traditionally extracted groundnut oil. 
            Pure, natural, and packed with nutrients.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <router-link to="/products" class="btn-primary text-lg px-8 py-4">
              Explore Products
            </router-link>
            <router-link to="/about" class="btn-secondary text-lg px-8 py-4">
              Learn about our traditional filtered groundnut oil process
            </router-link>
          </div>
          
          <!-- Stats -->
          <div ref="statsContainer" class="mt-12 grid grid-cols-3 gap-6">
            <div v-for="stat in stats" :key="stat.label" class="stats-item text-center lg:text-left">
              <div class="text-3xl font-bold text-primary-500 mb-1">{{ stat.value }}</div>
              <div class="text-sm text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right Image/Visual -->
        <div ref="heroImage" class="relative">
          <div class="relative z-10">
            <div class="bg-white rounded-2xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
              <img 
                :src="heroImageUrl"
                alt="Premium quality pure groundnut oil bottle from Pramukh Groundnut Oil Mill - Carefully filtered for purity, 100% natural, no additives"
                width="600"
                height="600"
                class="w-full h-auto rounded-xl object-cover aspect-square"
                loading="eager"
                fetchpriority="high"
                @error="handleImageError"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import heroImageLocal from '../../assets/images/IMG-20251127-WA0009.jpg'

const heroSection = ref(null)
const heroContent = ref(null)
const heroImage = ref(null)
const statsContainer = ref(null)

const heroImageUrl = ref(heroImageLocal)

const stats = [
  { value: '5', label: 'Years Experience' },
  { value: '100%', label: 'Pure & Natural' },
  { value: '2K+', label: 'Happy Customers' }
]

const handleImageError = (event) => {
  // Fallback to placeholder if image fails to load
  event.target.style.display = 'none'
  if (event.target.parentElement) {
    event.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary-100', 'to-accent-100', 'min-h-[400px]', 'flex', 'items-center', 'justify-center')
    event.target.parentElement.innerHTML = `
      <div class="w-full h-full flex items-center justify-center">
        <svg class="w-64 h-64 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
    `
  }
}

onMounted(() => {
  // Wait for next tick to ensure refs are available
  setTimeout(() => {
    if (heroContent.value && heroImage.value) {
      // GSAP Animations
      const tl = gsap.timeline()
      
      tl.from(heroContent.value, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      })
      .from(heroImage.value, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.5')
      
      // Animate stats
      if (statsContainer.value) {
        const statsItems = statsContainer.value.querySelectorAll('.stats-item')
        gsap.from(statsItems, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.2,
          delay: 1.2
        })
      }
    }
  }, 100)
})
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>

