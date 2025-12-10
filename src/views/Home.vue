<template>
  <div class="overflow-x-hidden w-full max-w-full">
    <!-- Hero Section -->
    <Hero />

    <!-- Why Choose Us -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50 overflow-x-hidden w-full">
      <div class="container-custom">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span class="text-gradient">Pramukh Oil</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="card text-center relative overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Background Image -->
                <div class="absolute inset-0 opacity-5">
                  <img 
                    :src="feature.image"
                    :alt="`${feature.title} - ${feature.description} - Pramukh Groundnut Oil Mill premium quality groundnut oil`"
                    width="400"
                    height="400"
                    class="w-full h-full object-cover"
                    loading="lazy"
                    fetchpriority="low"
                  />
                </div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg v-if="feature.icon === 'CheckIcon'" class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <svg v-else-if="feature.icon === 'GearIcon'" class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg v-else-if="feature.icon === 'HeartIcon'" class="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
                <svg v-else class="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
              <p class="text-gray-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Overview -->
    <section class="section-padding bg-white overflow-x-hidden w-full">
      <div class="container-custom">
        <div class="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Traditional <span class="text-gradient">Manufacturing</span> Process
              </h2>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                We combine age-old traditional methods with modern quality standards to bring you the purest groundnut oil. 
                Our process ensures maximum nutrition and authentic flavor.
              </p>
              <ul class="space-y-4 mb-8">
                <li
                  v-for="(step, index) in processSteps"
                  :key="index"
                  class="flex items-start space-x-3"
                >
                  <div class="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {{ index + 1 }}
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">{{ step.title }}</h4>
                    <p class="text-gray-600">{{ step.description }}</p>
                  </div>
                </li>
              </ul>
              <router-link to="/manufacturing-process" class="btn-primary">
                Learn More About Our Process
              </router-link>
            </div>
            <div class="relative">
              <div class="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden aspect-square">
                    <img 
                      :src="processImage"
                      alt="Traditional groundnut oil manufacturing process at Pramukh Groundnut Oil Mill - Cold-press extraction, natural filtration, quality testing, and packaging"
                      width="800"
                      height="800"
                      class="w-full h-full object-cover"
                      loading="lazy"
                      fetchpriority="low"
                      @error="handleProcessImageError"
                    />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Preview -->
    <section class="section-padding bg-gray-50 overflow-x-hidden w-full">
      <div class="container-custom">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span class="text-gradient">Customers Say</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="card"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 mb-4 italic">"{{ testimonial.text }}"</p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full overflow-hidden mr-3 ring-2 ring-primary-100">
                    <img 
                      :src="testimonial.image || `https://ui-avatars.com/api/?name=${testimonial.name}&background=ef4444&color=fff`"
                      :alt="`${testimonial.name} - Customer testimonial for Pramukh Groundnut Oil from ${testimonial.location}`"
                      width="128"
                      height="128"
                      class="w-full h-full object-cover"
                      loading="lazy"
                      fetchpriority="low"
                      @error="handleTestimonialImageError"
                    />
              </div>
              <div>
                <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
                <div class="text-sm text-gray-500">{{ testimonial.location }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-8" data-aos="fade-up">
          <router-link to="/testimonials" class="btn-secondary">
            Read More Testimonials
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-primary-500 to-accent-500 text-white overflow-x-hidden w-full">
      <div class="container-custom text-center" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Ready to Experience Premium Quality?
        </h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Pramukh Groundnut Oil for their daily cooking needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Get in Touch
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '../components/common/Hero.vue'
import processImage from '../assets/images/IMG-20251127-WA0005.jpg'

const features = [
  {
    title: '100% Pure',
    description: 'No additives, no preservatives, just pure natural oil',
    icon: 'CheckIcon',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop&q=80'
  },
  {
    title: 'Traditional Method',
    description: 'Age-old extraction techniques for authentic flavor',
    icon: 'GearIcon',
    image: processImage
  },
  {
    title: 'Rich in Nutrients',
    description: 'Packed with vitamin E and healthy monounsaturated fats',
    icon: 'HeartIcon',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=400&fit=crop&q=80'
  },
  {
    title: 'Premium Quality',
    description: 'Rigorous quality checks ensure the best product',
    icon: 'StarIcon',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop&q=80'
  }
]

const processSteps = [
  {
    title: 'Selection',
    description: 'We carefully select the finest quality groundnuts'
  },
  {
    title: 'Cleaning',
    description: 'Thorough cleaning to remove impurities'
  },
  {
    title: 'Filtration',
    description: 'Multi-stage filtration process for clarity and purity'
  },
  {
    title: 'Filtration',
    description: 'Natural filtration process to ensure purity'
  }
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    text: 'Best groundnut oil I have ever used. The taste and quality are exceptional!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80'
  },
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    text: 'Pure, natural, and healthy. My family loves cooking with Pramukh oil.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80'
  },
  {
    name: 'Amit Patel',
    location: 'Ahmedabad',
    text: 'Authentic traditional flavor that reminds me of my grandmother\'s cooking.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80'
  }
]

const handleProcessImageError = (event) => {
  event.target.src = processImage
}

const handleTestimonialImageError = (event) => {
  // Fallback to avatar with initials
  const name = event.target.alt || 'Customer'
  event.target.src = `https://ui-avatars.com/api/?name=${name}&background=ef4444&color=fff&size=128`
}
</script>

