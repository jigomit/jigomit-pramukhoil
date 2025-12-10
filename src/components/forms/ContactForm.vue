<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
        Full Name <span class="text-red-500">*</span>
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        placeholder="Enter your name"
      />
      <span v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number <span class="text-red-500">*</span>
        </label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="+91 70962 42187"
        />
        <span v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</span>
      </div>

      <div>
        <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
          Subject <span class="text-red-500">*</span>
        </label>
        <input
          id="subject"
          v-model="form.subject"
          type="text"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="What is this regarding?"
        />
        <span v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</span>
      </div>
    </div>

    <div>
      <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
        Message <span class="text-red-500">*</span>
      </label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="6"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
        placeholder="Tell us how we can help you..."
      ></textarea>
      <span v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</span>
    </div>

    <div>
      <button
        type="submit"
        :disabled="submitting"
        class="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="!submitting">Send Message</span>
        <span v-else class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
      </button>
    </div>

    <!-- Success Message -->
    <transition name="fade">
      <div v-if="success" class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
        Thank you for your message! We'll get back to you soon.
      </div>
    </transition>

    <!-- Error Message -->
    <transition name="fade">
      <div v-if="error" class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
        {{ error }}
      </div>
    </transition>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  subject: '',
  message: ''
})

const errors = reactive({})
const submitting = ref(false)
const success = ref(false)
const error = ref('')

const validateForm = () => {
  Object.keys(errors).forEach(key => delete errors[key])
  
  if (!form.name.trim()) {
    errors.name = 'Name is required'
  }
  
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!/^[\d\s\+\-\(\)]+$/.test(form.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }
  
  if (!form.subject.trim()) {
    errors.subject = 'Subject is required'
  }
  
  if (!form.message.trim()) {
    errors.message = 'Message is required'
  }
  
  return Object.keys(errors).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }
  
  submitting.value = true
  success.value = false
  error.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form
    Object.keys(form).forEach(key => form[key] = '')
    success.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      success.value = false
    }, 5000)
  } catch (err) {
    error.value = 'Something went wrong. Please try again later.'
  } finally {
    submitting.value = false
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

