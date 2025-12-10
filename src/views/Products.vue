<template>
  <div class="section-padding bg-gray-50 min-h-screen">
    <div class="container-custom">
      <!-- Page Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span class="text-gradient">Product</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of premium groundnut oils, each crafted with care and tradition.
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard
          v-for="(product, index) in allProducts"
          :key="product.id"
          :product="product"
          :delay="index % 3 * 100"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../components/products/ProductCard.vue'
import { products } from '../data/products'

const allProducts = ref(products)
</script>

