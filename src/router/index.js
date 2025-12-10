import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Pramukh Groundnut Oil Mill - Pure & Natural Groundnut Oil | Premium Quality',
      description: 'Premium quality pure and natural groundnut oil. Traditional extraction methods, modern quality standards. Buy authentic groundnut oil online. 100% pure, no additives.',
      keywords: 'groundnut oil, peanut oil, pure groundnut oil, natural cooking oil, traditional oil, filtration method, filtered groundnut oil, Gujarat groundnut oil, Pramukh oil, buy filtered groundnut oil online in Gujarat, pure filtered peanut oil for cooking, premium filtered groundnut oil 5 liter price, traditional filtered groundnut oil manufacturer in Gujarat, best filtered groundnut oil for deep frying'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue'),
    meta: {
      title: 'Products - Premium Groundnut Oil Collection | Pramukh Groundnut Oil Mill',
      description: 'Browse our premium collection of groundnut oil products. Available in various sizes from 1 Liter to 15 Kgs. 100% pure, natural, and traditionally extracted.',
      keywords: 'groundnut oil products, buy groundnut oil, groundnut oil price, groundnut oil online, pure groundnut oil 1 liter, 5 liter groundnut oil, 15 kg groundnut oil, premium filtered groundnut oil 5 liter price, buy filtered groundnut oil online in Gujarat, best filtered groundnut oil for deep frying, traditional filtered peanut oil manufacturer'
    }
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: () => import('../views/ProductDetails.vue'),
    props: true,
    meta: {
      title: 'Product Details - Pramukh Groundnut Oil Mill',
      description: 'Detailed information about our premium groundnut oil products. Learn about pricing, sizes, and quality specifications.',
      keywords: 'groundnut oil details, groundnut oil specifications, groundnut oil price list, filtered groundnut oil nutrition facts, premium filtered groundnut oil benefits, filtered peanut oil for cooking'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About Us - Pramukh Groundnut Oil Mill | Our Story & Heritage',
      description: 'Learn about Pramukh Groundnut Oil Mill - 5 years of experience in producing premium quality groundnut oil using traditional methods and modern quality standards.',
      keywords: 'about Pramukh oil, groundnut oil manufacturer, traditional oil mill, Gujarat oil mill, groundnut oil company'
    }
  },
  {
    path: '/manufacturing-process',
    name: 'ManufacturingProcess',
    component: () => import('../views/ManufacturingProcess.vue'),
    meta: {
      title: 'Process - Traditional Groundnut Oil Extraction | Pramukh',
      description: 'Discover our traditional manufacturing process for groundnut oil. From selection to extraction, learn how we maintain purity and quality in every step.',
      keywords: 'groundnut oil manufacturing, traditional oil filtration, multi-stage filtration method, groundnut oil process, oil filtration process, buy filtered groundnut oil directly from mill, how filtered groundnut oil is made'
    }
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import('../views/Testimonials.vue'),
    meta: {
      title: 'Customer Testimonials - Pramukh Groundnut Oil Mill Reviews',
      description: 'Read what our customers say about Pramukh Groundnut Oil. Real reviews from satisfied customers across India.',
      keywords: 'groundnut oil reviews, Pramukh oil testimonials, customer reviews, groundnut oil feedback'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'Contact Us - Pramukh Groundnut Oil Mill | Get in Touch',
      description: 'Contact Pramukh Groundnut Oil Mill. Located in Derdi Kumbhaji, Gujarat. Call us at +91 70962 42187 or +91 97279 65217 for orders and inquiries.',
      keywords: 'contact Pramukh oil, groundnut oil contact, oil mill contact, Gujarat groundnut oil mill address, buy groundnut oil contact'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
    meta: {
      title: 'Blog - Stories, Tips & Updates | Pramukh Groundnut Oil Mill',
      description: 'Read our blog for stories, tips, and updates about groundnut oil, health benefits, cooking tips, and sustainable practices. Expert insights from Pramukh Groundnut Oil Mill.',
      keywords: 'groundnut oil blog, cooking tips, health benefits, traditional oil, sustainable practices, oil extraction methods, groundnut oil recipes'
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('../views/BlogPost.vue'),
    props: true,
    meta: {
      title: 'Blog Post | Pramukh Groundnut Oil Mill',
      description: 'Read our latest blog post about groundnut oil, health, cooking tips, and more.',
      keywords: 'blog, groundnut oil, health, cooking tips'
    }
  },
  {
    path: '/faqs',
    name: 'FAQs',
    component: () => import('../views/FAQs.vue'),
    meta: {
      title: 'FAQs - Frequently Asked Questions | Pramukh Groundnut Oil Mill',
      description: 'Find answers to frequently asked questions about Pramukh Groundnut Oil, our products, ordering, and more.',
      keywords: 'FAQs, frequently asked questions, groundnut oil questions, Pramukh oil FAQ'
    }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue'),
    meta: {
      title: 'Privacy Policy | Pramukh Groundnut Oil Mill',
      description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
      keywords: 'privacy policy, data protection, privacy'
    }
  },
  {
    path: '/terms-conditions',
    name: 'TermsConditions',
    component: () => import('../views/TermsConditions.vue'),
    meta: {
      title: 'Terms & Conditions | Pramukh Groundnut Oil Mill',
      description: 'Read our terms and conditions for using our website and purchasing our products.',
      keywords: 'terms and conditions, terms of service, legal'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 - Page Not Found | Pramukh Groundnut Oil Mill',
      description: 'The page you are looking for could not be found. Browse our premium groundnut oil products or contact us for assistance.',
      keywords: '404, page not found, error',
      robots: 'noindex, follow'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title and meta tags on route change
router.beforeEach((to, from, next) => {
  const meta = to.meta || {}
  document.title = meta.title || 'Pramukh Groundnut Oil Mill - Pure & Natural Groundnut Oil'
  next()
})

export default router

