<template>
  <div class="section-padding bg-gray-50 min-h-screen">
    <div class="container-custom">
      <!-- Page Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About <span class="text-gradient">Pramukh</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          A legacy of quality, tradition, and excellence in groundnut oil production
        </p>
      </div>

      <!-- Our Story -->
      <div class="bg-white rounded-xl shadow-lg p-8 mb-12" data-aos="fade-up">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Pramukh Groundnut Oil Mill was established with a vision to bring pure, natural, and healthy 
                groundnut oil to every household. With 5 years of experience in the oil extraction industry, 
                we have perfected the art of producing premium quality groundnut oil.
              </p>
              <p>
                Our journey began with a simple belief: that traditional methods, when combined with modern 
                quality standards, can produce the finest oil. We source the best groundnuts, use time-tested 
                extraction techniques, and maintain strict quality control at every step.
              </p>
              <p>
                Today, we are proud to serve thousands of families across the region, providing them with 
                oil that is not just a cooking ingredient, but a symbol of health, purity, and tradition.
              </p>
            </div>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden aspect-square">
              <img 
                :src="storyImage"
                alt="Pramukh Groundnut Oil Mill - Our Story"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Mission & Vision -->
      <div class="mb-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card" data-aos="fade-up" data-aos-delay="0">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-700 leading-relaxed">
              To provide pure, natural, and healthy groundnut oil to every household while preserving 
              traditional extraction methods and maintaining the highest quality standards. We are committed 
              to promoting health and wellness through our products.
            </p>
          </div>
          <div class="card" data-aos="fade-up" data-aos-delay="100">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-700 leading-relaxed">
              To become the most trusted and preferred brand for groundnut oil, known for our commitment 
              to quality, tradition, and customer satisfaction. We envision a future where every family 
              has access to pure, healthy cooking oil.
            </p>
          </div>
        </div>
      </div>

      <!-- Values -->
      <div>
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="text-center"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <!-- Quality Icon - Shield with Checkmark -->
              <svg v-if="value.title === 'Quality'" class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <!-- Tradition Icon - Clock -->
              <svg v-else-if="value.title === 'Tradition'" class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <!-- Integrity Icon - Badge/Certificate -->
              <svg v-else-if="value.title === 'Integrity'" class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import storyImage from '../assets/images/Screenshot 2025-11-29 143419.png'

const values = [
  {
    title: 'Quality',
    description: 'Uncompromising commitment to the highest quality standards'
  },
  {
    title: 'Tradition',
    description: 'Preserving age-old methods while embracing innovation'
  },
  {
    title: 'Integrity',
    description: 'Honest, transparent, and ethical in all our practices'
  }
]

</script>
