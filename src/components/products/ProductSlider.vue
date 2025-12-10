<template>
  <div class="relative">
    <div class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4" ref="slider">
      <div
        v-for="(product, index) in products"
        :key="product.id"
        class="flex-shrink-0 w-80 snap-start"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        :data-aos-delay="index * 100"
      >
        <ProductCard :product="product" />
      </div>
    </div>
    
    <!-- Navigation Arrows -->
    <button
      v-if="showNavigation"
      @click="scrollLeft"
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-primary-500 hover:text-white transition-colors z-10"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      v-if="showNavigation"
      @click="scrollRight"
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-primary-500 hover:text-white transition-colors z-10"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'

defineProps({
  products: {
    type: Array,
    required: true
  },
  showNavigation: {
    type: Boolean,
    default: true
  }
})

const slider = ref(null)

const scrollLeft = () => {
  if (slider.value) {
    slider.value.scrollBy({ left: -320, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (slider.value) {
    slider.value.scrollBy({ left: 320, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>

