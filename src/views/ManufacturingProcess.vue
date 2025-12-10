<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div class="container-custom text-center" data-aos="fade-up">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Our <span class="text-gradient">Process</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          From groundnut to oil - a journey of quality, tradition, and care
        </p>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            class="mb-16 last:mb-0"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="flex flex-col md:flex-row gap-8 items-center" :class="{ 'md:flex-row-reverse': index % 2 === 1 }">
              <div class="flex-shrink-0 w-full md:w-1/2">
                <div class="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden aspect-square relative shadow-lg">
                  <img 
                    v-if="step.image"
                    :src="step.image" 
                    :alt="step.title"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center">
                    <div class="text-center">
                      <div class="w-20 h-20 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                        {{ index + 1 }}
                      </div>
                      <svg class="w-32 h-32 text-primary-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div class="absolute top-4 left-4 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {{ index + 1 }}
                  </div>
                </div>
              </div>
              <div class="flex-grow">
                <div class="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                  Step {{ index + 1 }}
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ step.title }}</h3>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">{{ step.description }}</p>
                <ul v-if="step.details" class="space-y-2">
                  <li v-for="(detail, i) in step.details" :key="i" class="flex items-start">
                    <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-700">{{ detail }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Assurance -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Every batch undergoes rigorous testing to ensure the highest quality standards
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(qa, index) in qualityAssurance"
            :key="index"
            class="card text-center"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <!-- Purity Testing Icon - Shield with Checkmark -->
              <svg v-if="qa.title === 'Purity Testing'" class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <!-- Nutritional Analysis Icon - Chart/Graph -->
              <svg v-else-if="qa.title === 'Nutritional Analysis'" class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <!-- Food Safety Icon - Badge/Certificate -->
              <svg v-else-if="qa.title === 'Food Safety'" class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ qa.title }}</h3>
            <p class="text-gray-600">{{ qa.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-gradient-to-r from-primary-500 to-accent-500 text-white">
      <div class="container-custom text-center" data-aos="fade-up">
        <h2 class="text-4xl font-bold mb-6">Experience the Difference</h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Our traditional manufacturing process ensures you get the purest, most nutritious groundnut oil.
        </p>
        <router-link to="/products" class="bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
          Explore Our Product
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import step1Image from '../assets/images/download (1).jpg'
import step2Image from '../assets/images/WhatsApp Image 2025-11-29 at 12.56.54_57390a0a.jpg'
import step3Image from '../assets/images/WhatsApp Image 2025-11-29 at 13.10.23_f6eafbdd.jpg'
import step4Image from '../assets/images/WhatsApp Image 2025-11-29 at 13.12.15_90d5bb14.jpg'
import step5Image from '../assets/images/WhatsApp Image 2025-11-29 at 14.22.05_4ed9ccd6.jpg'

const processSteps = [
  {
    title: 'Selection of Groundnuts',
    description: 'We carefully select the finest quality groundnuts from trusted farmers. Only the best, fully matured groundnuts make it to our production line.',
    details: [
      'Premium quality groundnuts only',
      'Rigorous quality checks',
      'Sourced from certified farms',
      'No damaged or immature nuts'
    ],
    image: step1Image
  },
  {
    title: 'Cleaning & Sorting',
    description: 'The selected groundnuts undergo thorough cleaning to remove any impurities, dust, stones, or foreign materials. This ensures purity from the very beginning.',
    details: [
      'Mechanical cleaning process',
      'Removal of all impurities',
      'Size and quality sorting',
      'Final inspection before processing'
    ],
    image: step2Image
  },
  {
    title: 'Oil Extraction',
    description: 'We extract groundnut oil using a high-efficiency screw press machine that gently presses the nuts without using heat. This method preserves natural flavor, aroma, and nutrients while maximizing oil output.',
    details: [
      'Cold-press screw machine',
      'Gentle extraction process',
      'No heat or chemicals used',
      'Maximum oil yield with natural nutrients'
    ],
    image: step3Image
  },
  {
    title: 'Filtration',
    description: 'We use a high-quality filter press to remove all fine particles and sediments. This multi-stage natural filtration process gives you clean, clear, and pure groundnut oil.',
    details: [
      'Multi-stage filtration',
      'Removes sediments',
      'Crystal-clear pure oil'
    ],
    image: step4Image
  },
  {
    title: 'Quality Testing & Packaging',
    description: 'Every batch undergoes rigorous quality testing for purity, acidity, and nutritional content. Only after passing all tests, the oil is packaged in food-grade containers.',
    details: [
      'Laboratory testing',
      'Purity verification',
      'Food-grade packaging',
      'Sealed for freshness'
    ],
    image: step5Image
  }
]

const qualityAssurance = [
  {
    title: 'Purity Testing',
    description: 'Every batch tested for purity and quality'
  },
  {
    title: 'Nutritional Analysis',
    description: 'Verified nutritional content and benefits'
  },
  {
    title: 'Food Safety',
    description: 'Compliance with all food safety standards'
  }
]
</script>

