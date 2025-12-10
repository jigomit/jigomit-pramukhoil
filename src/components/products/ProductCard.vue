<template>
  <div
    class="card group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
    data-aos="fade-up"
    :data-aos-delay="delay"
    @click="$router.push(`/products/${product.id}`)"
  >
    <div class="relative overflow-hidden rounded-lg mb-4 bg-white aspect-square">
      <img 
        :src="productImage" 
        :alt="`${product.name} - ${product.size} - Premium pure groundnut oil from Pramukh Groundnut Oil Mill. Traditional extraction, 100% natural, ₹${product.price}`"
        width="400"
        height="400"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        fetchpriority="low"
        @error="handleImageError"
        @load="handleImageLoad"
      />
      <div v-show="showPlaceholder" class="absolute inset-0 flex items-center justify-center bg-white z-0">
        <svg class="w-32 h-32 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <div v-if="product.featured" class="absolute top-2 right-2 bg-highlight-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
        Featured
      </div>
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
    </div>
    
    <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
      {{ product.name }}
    </h3>
    <p class="text-gray-600 text-sm mb-4 line-clamp-2">
      {{ product.shortDescription || product.description }}
    </p>
    
    <div class="flex items-center justify-between">
      <div>
        <div class="text-2xl font-bold text-primary-500">₹{{ product.price }}</div>
        <div class="text-sm text-gray-500">{{ product.size }}</div>
      </div>
      <button class="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors font-semibold">
        View Details
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import imageWA0004 from '../../assets/images/IMG-20251127-WA0004-removebg-preview.png'
import imageWA0008 from '../../assets/images/IMG-20251127-WA0008-removebg-preview.png'
import imageWA0007 from '../../assets/images/IMG-20251127-WA0007-removebg-preview.png'
import whatsappImageNew from '../../assets/images/WhatsApp_Image_2025-11-29_at_12.03.14_3b0d60e9-removebg-preview.png'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  }
})

const showPlaceholder = ref(true)

// Image mapping for local images
const imageMap = {
  'IMG-20251127-WA0004.jpg': imageWA0004,
  'IMG-20251127-WA0004-removebg-preview.png': imageWA0004,
  'IMG-20251127-WA0008.jpg': imageWA0008,
  'IMG-20251127-WA0008-removebg-preview.png': imageWA0008,
  'IMG-20251127-WA0007.jpg': imageWA0007,
  'IMG-20251127-WA0007-removebg-preview.png': imageWA0007,
  'WhatsApp_Image_2025-11-29_at_12.03.14_3b0d60e9-removebg-preview.png': whatsappImageNew,
  'WhatsApp Image 2025-11-29 at 12.03.14_3b0d60e9.jpg': whatsappImageNew
}

// Get product image from product data or use fallback
const productImage = computed(() => {
  // First check if product has direct image property
  if (props.product.image) {
    const imageName = props.product.image.split('/').pop()
    if (imageMap[imageName]) {
      return imageMap[imageName]
    }
  }
  
  // Then check images array
  if (props.product.images && props.product.images.length > 0) {
    const imageUrl = props.product.images[0]
    
    // Handle local image paths
    if (imageUrl.includes('/src/assets/images/') || imageUrl.includes('assets/images/')) {
      const imageName = imageUrl.split('/').pop()
      if (imageMap[imageName]) {
        return imageMap[imageName]
      }
    }
    
    // Handle Unsplash URLs (fallback)
    if (imageUrl.includes('photo-1607472586893-edb57bdc0e39')) {
      return imageWA0004
    }
    return imageUrl
  }
  
  // Final fallback
  return imageWA0004
})

const handleImageError = (event) => {
  showPlaceholder.value = true
  if (event.target) {
    event.target.style.display = 'none'
  }
}

const handleImageLoad = () => {
  showPlaceholder.value = false
}
</script>

