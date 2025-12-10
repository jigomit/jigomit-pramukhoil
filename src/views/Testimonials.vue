<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div class="container-custom text-center" data-aos="fade-up">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Customer <span class="text-gradient">Testimonials</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from our satisfied customers about their experience with Pramukh Groundnut Oil
        </p>
      </div>
    </section>

    <!-- Add Review Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto" data-aos="fade-up">
          <div class="card">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Share Your Experience</h2>
            <p class="text-gray-600 text-center mb-8">
              We'd love to hear about your experience with Pramukh Groundnut Oil
            </p>
            
            <form @submit.prevent="handleSubmitReview" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="reviewName" class="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name <span class="text-highlight-500">*</span>
                  </label>
                  <input
                    id="reviewName"
                    v-model="reviewForm.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                  <span v-if="reviewErrors.name" class="text-highlight-500 text-sm mt-1">{{ reviewErrors.name }}</span>
                </div>

                <div>
                  <label for="reviewLocation" class="block text-sm font-semibold text-gray-700 mb-2">
                    Location <span class="text-highlight-500">*</span>
                  </label>
                  <input
                    id="reviewLocation"
                    v-model="reviewForm.location"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="City, State"
                  />
                  <span v-if="reviewErrors.location" class="text-highlight-500 text-sm mt-1">{{ reviewErrors.location }}</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Rating <span class="text-highlight-500">*</span>
                </label>
                <div class="flex items-center gap-2">
                  <button
                    v-for="star in 5"
                    :key="star"
                    type="button"
                    @click="reviewForm.rating = star"
                    @mouseenter="hoveredRating = star"
                    @mouseleave="hoveredRating = 0"
                    class="focus:outline-none transition-transform hover:scale-110"
                  >
                    <svg
                      :class="[
                        'w-8 h-8 transition-colors',
                        star <= (hoveredRating || reviewForm.rating)
                          ? 'text-accent-500'
                          : 'text-gray-300'
                      ]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                  <span v-if="reviewForm.rating > 0" class="ml-2 text-sm text-gray-600">
                    {{ reviewForm.rating }} out of 5 stars
                  </span>
                </div>
                <span v-if="reviewErrors.rating" class="text-highlight-500 text-sm mt-1 block">{{ reviewErrors.rating }}</span>
              </div>

              <div>
                <label for="reviewText" class="block text-sm font-semibold text-gray-700 mb-2">
                  Your Review <span class="text-highlight-500">*</span>
                </label>
                <textarea
                  id="reviewText"
                  v-model="reviewForm.text"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your experience with our groundnut oil..."
                ></textarea>
                <span v-if="reviewErrors.text" class="text-highlight-500 text-sm mt-1">{{ reviewErrors.text }}</span>
              </div>

              <button
                type="submit"
                :disabled="submittingReview"
                class="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!submittingReview">Submit Review</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              </button>

              <!-- Success Message -->
              <transition name="fade">
                <div v-if="reviewSuccess" class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you for your review! It has been submitted successfully.
                </div>
              </transition>

              <!-- Error Message -->
              <transition name="fade">
                <div v-if="reviewError" class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  {{ reviewError }}
                </div>
              </transition>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Grid -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <p class="text-xl text-gray-600">What our customers are saying</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in allTestimonials"
            :key="testimonial.id || index"
            class="card"
            data-aos="fade-up"
            :data-aos-delay="index % 3 * 100"
          >
            <!-- Rating -->
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in testimonial.rating" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <!-- Testimonial Text -->
            <p class="text-gray-700 mb-6 italic leading-relaxed">
              "{{ testimonial.text }}"
            </p>

            <!-- Customer Info -->
            <div class="flex items-center pt-4 border-t border-gray-200">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span class="text-primary-500 font-bold text-lg">{{ testimonial.name.charAt(0) }}</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
                <div class="text-sm text-gray-500">{{ testimonial.location }}</div>
                <div v-if="testimonial.verified" class="text-xs text-primary-500 mt-1 flex items-center">
                  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Verified Purchase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <div class="text-4xl md:text-5xl font-bold text-primary-500 mb-2">2K+</div>
            <div class="text-gray-600">Happy Customers</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <div class="text-4xl md:text-5xl font-bold text-primary-500 mb-2">4.8</div>
            <div class="text-gray-600">Average Rating</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div class="text-4xl md:text-5xl font-bold text-primary-500 mb-2">5</div>
            <div class="text-gray-600">Years Experience</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <div class="text-4xl md:text-5xl font-bold text-primary-500 mb-2">98%</div>
            <div class="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-primary-500 to-accent-500 text-white">
      <div class="container-custom text-center" data-aos="fade-up">
        <h2 class="text-4xl font-bold mb-6">Join Our Happy Customers</h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Experience the quality and taste that thousands of customers trust for their daily cooking needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Contact Us
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

// Default testimonials
const defaultTestimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'I have been using Pramukh Groundnut Oil for over 5 years now. The quality is exceptional and the taste is authentic. My family loves it, and I highly recommend it to everyone.',
    verified: true
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Delhi, NCR',
    rating: 5,
    text: 'Best groundnut oil I have ever used! Pure, natural, and healthy. The packaging is also great and the oil stays fresh for a long time. Worth every rupee!',
    verified: true
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'The traditionally filtered oil from Pramukh reminds me of my grandmother\'s cooking. Authentic flavor and aroma. This is what real groundnut oil should taste like!',
    verified: true
  },
  {
    id: 4,
    name: 'Sunita Reddy',
    location: 'Hyderabad, Telangana',
    rating: 5,
    text: 'As a health-conscious person, I appreciate the purity and quality of Pramukh oil. No additives, no chemicals - just pure natural goodness. My doctor recommended it too!',
    verified: true
  },
  {
    id: 5,
    name: 'Vikram Singh',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'Great value for money! The oil is of premium quality and the customer service is excellent. I order regularly and have never been disappointed.',
    verified: true
  },
  {
    id: 6,
    name: 'Meera Nair',
    location: 'Bangalore, Karnataka',
    rating: 5,
    text: 'I tried their organic groundnut oil and it\'s amazing! The difference in quality is noticeable. My kids love the food cooked with this oil. Highly recommended!',
    verified: true
  },
  {
    id: 7,
    name: 'Ramesh Iyer',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    text: 'Excellent product! The oil has a rich golden color and perfect consistency. It doesn\'t smoke much while cooking and gives great flavor to the food.',
    verified: true
  },
  {
    id: 8,
    name: 'Kavita Desai',
    location: 'Surat, Gujarat',
    rating: 5,
    text: 'Pramukh oil has become a staple in our kitchen. The quality is consistent, and we love that it\'s made using traditional methods. Trustworthy brand!',
    verified: true
  },
  {
    id: 9,
    name: 'Anil Joshi',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    text: 'I run a small restaurant and use Pramukh oil for all my cooking. The customers love the taste, and the oil is very economical for commercial use. Great product!',
    verified: true
  }
]

// Review form state
const reviewForm = reactive({
  name: '',
  location: '',
  rating: 0,
  text: ''
})

const reviewErrors = reactive({})
const submittingReview = ref(false)
const reviewSuccess = ref(false)
const reviewError = ref('')
const hoveredRating = ref(0)
const customerReviews = ref([])

// Load reviews from localStorage on mount
onMounted(() => {
  const savedReviews = localStorage.getItem('pramukhCustomerReviews')
  if (savedReviews) {
    try {
      customerReviews.value = JSON.parse(savedReviews)
    } catch (e) {
      console.error('Error loading reviews:', e)
    }
  }
})

// Combine default testimonials with customer reviews
const allTestimonials = computed(() => {
  return [...defaultTestimonials, ...customerReviews.value]
})

// Validate review form
const validateReviewForm = () => {
  Object.keys(reviewErrors).forEach(key => delete reviewErrors[key])
  
  if (!reviewForm.name.trim()) {
    reviewErrors.name = 'Name is required'
  }
  
  if (!reviewForm.location.trim()) {
    reviewErrors.location = 'Location is required'
  }
  
  if (reviewForm.rating === 0) {
    reviewErrors.rating = 'Please select a rating'
  }
  
  if (!reviewForm.text.trim()) {
    reviewErrors.text = 'Review text is required'
  } else if (reviewForm.text.trim().length < 20) {
    reviewErrors.text = 'Review must be at least 20 characters long'
  }
  
  return Object.keys(reviewErrors).length === 0
}

// Handle review submission
const handleSubmitReview = async () => {
  if (!validateReviewForm()) {
    return
  }
  
  submittingReview.value = true
  reviewSuccess.value = false
  reviewError.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Create new review object
    const newReview = {
      id: Date.now(),
      name: reviewForm.name.trim(),
      location: reviewForm.location.trim(),
      rating: reviewForm.rating,
      text: reviewForm.text.trim(),
      verified: false,
      date: new Date().toISOString()
    }
    
    // Add to customer reviews
    customerReviews.value.unshift(newReview)
    
    // Save to localStorage
    localStorage.setItem('pramukhCustomerReviews', JSON.stringify(customerReviews.value))
    
    // Reset form
    reviewForm.name = ''
    reviewForm.location = ''
    reviewForm.rating = 0
    reviewForm.text = ''
    hoveredRating.value = 0
    
    reviewSuccess.value = true
    
    // Scroll to reviews section
    setTimeout(() => {
      const reviewsSection = document.querySelector('.section-padding.bg-gray-50')
      if (reviewsSection) {
        reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 500)
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      reviewSuccess.value = false
    }, 5000)
  } catch (err) {
    reviewError.value = 'Something went wrong. Please try again later.'
  } finally {
    submittingReview.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

