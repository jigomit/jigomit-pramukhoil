/**
 * Google Analytics 4 Integration
 * 
 * To use this, add your GA4 Measurement ID to your environment variables:
 * VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 
 * Then import and use in your components:
 * import { useAnalytics } from '@/utils/analytics'
 * const { trackPageView, trackEvent } = useAnalytics()
 */

let gtag = null
let isInitialized = false

// Initialize Google Analytics
export function initAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
  
  if (!measurementId || isInitialized) {
    return
  }

  // Create script tag
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  gtag('js', new Date())
  gtag('config', measurementId, {
    page_path: window.location.pathname,
    send_page_view: true
  })

  isInitialized = true
}

// Track page view
export function trackPageView(path, title) {
  if (!isInitialized || !window.gtag) {
    return
  }

  window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title
  })
}

// Track custom event
export function trackEvent(eventName, eventParams = {}) {
  if (!isInitialized || !window.gtag) {
    return
  }

  window.gtag('event', eventName, eventParams)
}

// Track product view
export function trackProductView(product) {
  trackEvent('view_item', {
    currency: 'INR',
    value: product.price,
    items: [{
      item_id: product.id.toString(),
      item_name: product.name,
      item_category: 'Groundnut Oil',
      price: product.price,
      quantity: 1
    }]
  })
}

// Track add to cart (if applicable)
export function trackAddToCart(product) {
  trackEvent('add_to_cart', {
    currency: 'INR',
    value: product.price,
    items: [{
      item_id: product.id.toString(),
      item_name: product.name,
      item_category: 'Groundnut Oil',
      price: product.price,
      quantity: 1
    }]
  })
}

// Track contact form submission
export function trackContactForm() {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'Contact Form'
  })
}

// Track phone call click
export function trackPhoneCall(phoneNumber) {
  trackEvent('phone_call_click', {
    event_category: 'engagement',
    event_label: phoneNumber,
    value: 1
  })
}

// Track WhatsApp click
export function trackWhatsAppClick() {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: 'WhatsApp Contact'
  })
}

// Vue composable for easy use
export function useAnalytics() {
  return {
    trackPageView,
    trackEvent,
    trackProductView,
    trackAddToCart,
    trackContactForm,
    trackPhoneCall,
    trackWhatsAppClick
  }
}

