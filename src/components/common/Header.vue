<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center group transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          <img 
            :src="logoImage" 
            alt="Pramukh Groundnut Oil Mill Logo - Premium quality pure groundnut oil manufacturer in Gujarat, India" 
            width="200"
            height="79"
            class="h-[79px] w-auto object-contain"
            loading="eager"
            fetchpriority="high"
          />
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 relative group"
            active-class="text-primary-500"
          >
            {{ item.label }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            <span v-if="$route.path === item.path" class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"></span>
          </router-link>
          
          <router-link to="/contact" class="btn-primary">
            Contact Us
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            @click="closeMobileMenu"
            class="block py-3 text-gray-700 hover:text-primary-500 font-medium transition-colors"
            active-class="text-primary-500"
          >
            {{ item.label }}
          </router-link>
          <router-link to="/contact" @click="closeMobileMenu" class="block mt-4">
            <button class="btn-primary w-full">Contact Us</button>
          </router-link>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logoImage from '../../assets/images/logo-removebg-preview.png'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Product' },
  { path: '/about', label: 'About' },
  { path: '/manufacturing-process', label: 'Process' },
  { path: '/testimonials', label: 'Testimonials' }
]

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

