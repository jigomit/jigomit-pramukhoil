import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { initAnalytics, trackPageView } from './utils/analytics'

const app = createApp(App)

app.use(router)

// Initialize analytics
initAnalytics()

// Track page views on route change
router.afterEach((to) => {
  if (window.gtag) {
    trackPageView(to.path, to.meta?.title || document.title)
  }
})

app.mount('#app')

// Initialize AOS after app is mounted
setTimeout(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    delay: 0
  })
}, 100)
