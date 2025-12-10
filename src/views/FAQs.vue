<template>
  <div class="section-padding bg-white min-h-screen">
    <div class="container-custom max-w-4xl">
      <!-- Page Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked <span class="text-gradient">Questions</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our groundnut oil products and services.
        </p>
      </div>

      <!-- FAQs -->
      <div class="space-y-6">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="card"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <h3 class="text-xl font-bold text-gray-900 mb-3">
            {{ faq.question }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ faq.answer }}
          </p>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="mt-12 text-center" data-aos="fade-up">
        <p class="text-gray-600 mb-4">Still have questions?</p>
        <router-link to="/contact" class="btn-primary">
          Contact Us
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSEO } from '../composables/useSEO'

const faqs = [
  {
    question: 'What makes Pramukh Groundnut Oil different from other brands?',
    answer: 'Pramukh Groundnut Oil is produced using a careful multi-stage filtration process, ensuring 100% pure and natural oil with no additives or preservatives. We maintain authentic processing while adhering to modern quality standards.'
  },
  {
    question: 'What sizes are available?',
    answer: 'We offer groundnut oil in multiple sizes: 1 Liter (₹190), 5 Liter (₹950), 15 Liter (₹2800), and 15 Kgs (₹3000). Choose the size that best fits your needs.'
  },
  {
    question: 'How should I store groundnut oil?',
    answer: 'Store groundnut oil in a cool, dark place away from direct sunlight. Use airtight containers and refrigerate in hot climates. Properly stored oil can last up to 12 months.'
  },
  {
    question: 'Is your groundnut oil suitable for deep frying?',
    answer: 'Yes! Our groundnut oil has a high smoke point (around 450°F/232°C), making it perfect for deep frying, stir-frying, and high-temperature cooking while maintaining nutritional value.'
  },
  {
    question: 'Do you offer bulk orders?',
    answer: 'Yes, we welcome bulk orders. Please contact us at +91 70962 42187 or +91 97279 65217 to discuss your requirements and get special pricing for bulk purchases.'
  },
  {
    question: 'What is the shelf life of your groundnut oil?',
    answer: 'Our groundnut oil has a shelf life of 12 months when stored properly in a cool, dark place. Always check for any off smell or cloudy appearance before use.'
  },
  {
    question: 'Is your oil suitable for people with allergies?',
    answer: 'Our groundnut oil is made from groundnuts (peanuts). If you have a peanut allergy, please consult with your healthcare provider before consuming groundnut oil.'
  },
  {
    question: 'How can I place an order?',
    answer: 'You can place an order by calling us at +91 70962 42187 or +91 97279 65217. You can also visit our contact page to send us a message, and we will get back to you promptly.'
  },
  {
    question: 'Do you deliver outside Gujarat?',
    answer: 'Yes, we provide delivery services. Please contact us to discuss delivery options and charges for your location. We aim to make our premium groundnut oil available to customers across India.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including cash on delivery, bank transfers, and other convenient payment options. Please contact us for more details about payment methods available in your area.'
  }
]

// SEO
useSEO({
  title: 'FAQs - Frequently Asked Questions | Pramukh Groundnut Oil Mill',
  description: 'Find answers to frequently asked questions about Pramukh Groundnut Oil, our products, ordering, and more.',
  keywords: 'FAQs, frequently asked questions, groundnut oil questions, Pramukh oil FAQ'
})
</script>

