<template>
  <div class="bg-white rounded-xl shadow-lg p-6 mb-8" data-aos="fade-down">
    <div class="flex flex-col md:flex-row gap-4 items-center">
      <!-- Search -->
      <div class="flex-1 w-full">
        <div class="relative">
          <input
            v-model="searchQuery"
            @input="updateFilters"
            type="text"
            placeholder="Search products..."
            class="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Category Filter -->
      <div class="w-full md:w-auto">
        <select
          v-model="selectedCategory"
          @change="updateFilters"
          class="w-full md:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option v-for="category in categories" :key="category.value" :value="category.value">
            {{ category.label }}
          </option>
        </select>
      </div>

      <!-- Price Range -->
      <div class="w-full md:w-auto">
        <select
          v-model="priceRange"
          @change="updateFilters"
          class="w-full md:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="all">All Prices</option>
          <option value="0-100">Under ₹100</option>
          <option value="100-200">₹100 - ₹200</option>
          <option value="200-300">₹200 - ₹300</option>
          <option value="300+">Above ₹300</option>
        </select>
      </div>

      <!-- Clear Filters -->
      <button
        v-if="hasActiveFilters"
        @click="clearFilters"
        class="px-4 py-3 text-gray-600 hover:text-primary-500 font-medium transition-colors"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { categories } from '../../data/products'

const emit = defineEmits(['filter-change'])

const searchQuery = ref('')
const selectedCategory = ref('all')
const priceRange = ref('all')

const hasActiveFilters = computed(() => {
  return searchQuery.value !== '' || selectedCategory.value !== 'all' || priceRange.value !== 'all'
})

const updateFilters = () => {
  emit('filter-change', {
    search: searchQuery.value,
    category: selectedCategory.value,
    priceRange: priceRange.value
  })
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'all'
  priceRange.value = 'all'
  updateFilters()
}

watch([searchQuery, selectedCategory, priceRange], () => {
  updateFilters()
})
</script>

