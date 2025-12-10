<template>
  <div v-if="product" class="section-padding bg-white min-h-screen">
    <div class="container-custom">
      <!-- Back Button -->
      <button
        @click="$router.back()"
        class="mb-8 flex items-center text-gray-600 hover:text-primary-500 transition-colors"
        data-aos="fade-right"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Products
      </button>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Images -->
        <div data-aos="fade-right">
          <div class="bg-white rounded-2xl p-4 mb-4 aspect-square overflow-hidden shadow-lg">
            <img 
              :src="selectedImage || (product.image && getImageUrl(product.image)) || (product.images && getImageUrl(product.images[0])) || imageWA0004"
              :alt="`${product.name} - ${product.size} - Premium quality pure groundnut oil from Pramukh Groundnut Oil Mill. Price: ₹${product.price}. Carefully filtered for purity, 100% natural, no additives or preservatives.`"
              width="800"
              height="800"
              class="w-full h-full object-cover rounded-lg"
              loading="eager"
              fetchpriority="high"
              @error="handleImageError"
            />
          </div>
        </div>

        <!-- Product Info -->
        <div data-aos="fade-left">
          <div v-if="product.featured" class="inline-block mb-4 px-3 py-1 bg-highlight-100 text-highlight-700 rounded-full text-sm font-semibold">
            Featured Product
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{{ product.name }}</h1>
          <div class="flex items-center space-x-4 mb-6">
            <div class="text-4xl font-bold text-primary-500">₹{{ product.price }}</div>
            <div class="text-lg text-gray-600">{{ product.size }}</div>
          </div>
          <p class="text-lg text-gray-700 mb-8 leading-relaxed">{{ product.longDescription || product.shortDescription }}</p>

          <!-- Features -->
          <div v-if="product.features && product.features.length > 0" class="mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
            <ul class="space-y-2">
              <li v-for="(feature, index) in product.features" :key="index" class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Nutritional Info -->
          <div v-if="product.nutritionalInfo" class="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Nutritional Information</h3>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(value, key) in product.nutritionalInfo" :key="key" class="flex justify-between border-b border-gray-200 pb-2">
                <span class="text-gray-600 capitalize">{{ key.replace(/([A-Z])/g, ' $1').trim() }}:</span>
                <span class="font-semibold text-gray-900">{{ value }}</span>
              </div>
            </div>
          </div>

          <!-- Contact to Purchase -->
          <div class="bg-gray-50 rounded-xl p-6" data-aos="fade-up">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact to Purchase</h3>
            
            <div class="space-y-5 mb-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p class="text-gray-600">
                    <a href="tel:+917096242187" class="hover:text-primary-500 transition-colors">+91 70962 42187</a><br>
                    <a href="tel:+919727965217" class="hover:text-primary-500 transition-colors">+91 97279 65217</a>
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Address</h4>
                  <p class="text-gray-600">
                    Ransiki Road, Opposite Yogi Petrol Pump<br>
                    Derdi Kumbhaji, Gujarat 360465<br>
                    India
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p class="text-gray-600">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div>
              <h4 class="font-semibold text-gray-900 mb-4">Connect With Us</h4>
              <div class="flex space-x-4">
                <a href="https://wa.me/917096242187" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors" title="WhatsApp">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/pramukhminioilmill?igsh=MW40Mnp4bW9qajE3aA==" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors" title="Instagram">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/1C7vKVaKBy/" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors" title="Facebook">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="section-padding text-center">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
    <router-link to="/products" class="btn-primary">Back to Products</router-link>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getProductById } from '../data/products'
import imageWA0004 from '../assets/images/IMG-20251127-WA0004-removebg-preview.png'
import imageWA0008 from '../assets/images/IMG-20251127-WA0008-removebg-preview.png'
import imageWA0007 from '../assets/images/IMG-20251127-WA0007-removebg-preview.png'
import whatsappImageNew from '../assets/images/WhatsApp_Image_2025-11-29_at_12.03.14_3b0d60e9-removebg-preview.png'

const route = useRoute()
const productId = parseInt(route.params.id)

const product = computed(() => getProductById(productId))
const selectedImage = ref(null)

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

// Helper function to get image URL, replacing the specific Unsplash URL with local image
const getImageUrl = (imageUrl) => {
  if (!imageUrl) return imageWA0004
  
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

// Set initial selected image
if (product.value) {
  if (product.value.image) {
    const imageName = product.value.image.split('/').pop()
    if (imageMap[imageName]) {
      selectedImage.value = imageMap[imageName]
    } else {
      selectedImage.value = getImageUrl(product.value.image)
    }
  } else if (product.value.images && product.value.images.length > 0) {
    selectedImage.value = getImageUrl(product.value.images[0])
  } else {
    selectedImage.value = imageWA0004
  }
}

const handleImageError = (event) => {
  event.target.src = imageWA0004
}
</script>

