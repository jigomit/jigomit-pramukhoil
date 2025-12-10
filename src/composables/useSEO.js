import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products'
import { getBlogPostBySlug } from '../data/blog'

const defaultSEO = {
  title: 'Pramukh Groundnut Oil Mill - Pure & Natural Groundnut Oil',
  description: 'Premium quality pure and natural groundnut oil. Traditional extraction methods, modern quality standards. Buy authentic groundnut oil online.',
  keywords: 'groundnut oil, peanut oil, pure groundnut oil, natural cooking oil, traditional oil, filtration method, filtered groundnut oil, Gujarat groundnut oil, Pramukh oil, buy filtered groundnut oil online in Gujarat, pure filtered peanut oil for cooking, premium filtered groundnut oil 5 liter price, traditional filtered groundnut oil manufacturer in Gujarat, best filtered groundnut oil for deep frying',
  image: '/favicon.png',
  url: 'https://pramukhgroundnutoil.com',
  type: 'website',
  siteName: 'Pramukh Groundnut Oil Mill'
}

// Helper to optimize title length (50-60 characters recommended)
const optimizeTitle = (title) => {
  if (!title || typeof title !== 'string') return ''
  if (title.length <= 60) return title
  return title.substring(0, 57) + '...'
}

// Helper to optimize description length (150-160 characters recommended)
const optimizeDescription = (description) => {
  if (!description || typeof description !== 'string') return ''
  if (description.length <= 160) return description
  return description.substring(0, 157) + '...'
}

// Get dynamic image based on route
const getDynamicImage = (route, baseUrl) => {
  // Product pages - use product image
  if (route.name === 'ProductDetails' && route.params.id) {
    const product = products.find(p => p.id === parseInt(route.params.id))
    if (product && product.image) {
      const imagePath = product.image.startsWith('http') 
        ? product.image 
        : product.image.startsWith('/') 
          ? `${baseUrl}${product.image}`
          : `${baseUrl}/${product.image}`
      return imagePath
    }
  }
  
  // Blog post pages - use blog post image
  if (route.name === 'BlogPost' && route.params.slug) {
    const blogPost = getBlogPostBySlug(route.params.slug)
    if (blogPost && blogPost.image) {
      return blogPost.image.startsWith('http') 
        ? blogPost.image 
        : `${baseUrl}${blogPost.image}`
    }
  }
  
  // Default image
  return `${baseUrl}/favicon.png`
}

export function useSEO(meta = {}) {
  const route = useRoute()
  
  const updateMeta = (newMeta = {}) => {
    const seo = { ...defaultSEO, ...meta, ...newMeta }
    const baseUrl = seo.url || 'https://pramukhgroundnutoil.com'
    const currentUrl = `${baseUrl}${route.path}`
    
    // Ensure title and description are strings
    const title = seo.title || defaultSEO.title || ''
    const description = seo.description || defaultSEO.description || ''
    
    // Optimize title and description
    const optimizedTitle = optimizeTitle(title)
    const optimizedDescription = optimizeDescription(description)
    
    // Get dynamic image
    const dynamicImage = seo.image || getDynamicImage(route, baseUrl)
    const fullImageUrl = dynamicImage?.startsWith('http') ? dynamicImage : `${baseUrl}${dynamicImage}`
    
    // Update document title
    document.title = optimizedTitle
    
    // Update or create meta tags
    const updateOrCreateMeta = (name, content, attribute = 'name') => {
      if (!content) return
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }
    
    // Update or create link tags
    const updateOrCreateLink = (rel, href, attributes = {}) => {
      if (!href) return
      let element = document.querySelector(`link[rel="${rel}"]`)
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        Object.keys(attributes).forEach(key => {
          element.setAttribute(key, attributes[key])
        })
        document.head.appendChild(element)
      }
      element.setAttribute('href', href)
    }
    
    // Basic meta tags
    updateOrCreateMeta('description', optimizedDescription)
    updateOrCreateMeta('keywords', seo.keywords)
    updateOrCreateMeta('author', seo.author || 'Pramukh Groundnut Oil Mill')
    updateOrCreateMeta('robots', seo.robots || 'index, follow')
    updateOrCreateMeta('viewport', 'width=device-width, initial-scale=1.0')
    updateOrCreateMeta('theme-color', seo.themeColor || '#ef4444', 'name')
    updateOrCreateMeta('apple-mobile-web-app-capable', 'yes', 'name')
    updateOrCreateMeta('apple-mobile-web-app-status-bar-style', 'default', 'name')
    updateOrCreateMeta('apple-mobile-web-app-title', 'Pramukh Oil', 'name')
    updateOrCreateMeta('format-detection', 'telephone=no', 'name')
    updateOrCreateMeta('referrer', 'strict-origin-when-cross-origin', 'name')
    
    // Open Graph tags
    updateOrCreateMeta('og:title', optimizedTitle, 'property')
    updateOrCreateMeta('og:description', optimizedDescription, 'property')
    updateOrCreateMeta('og:image', fullImageUrl, 'property')
    updateOrCreateMeta('og:image:width', '1200', 'property')
    updateOrCreateMeta('og:image:height', '630', 'property')
    updateOrCreateMeta('og:image:alt', optimizedTitle, 'property')
    updateOrCreateMeta('og:url', currentUrl, 'property')
    updateOrCreateMeta('og:type', seo.type, 'property')
    updateOrCreateMeta('og:site_name', seo.siteName, 'property')
    updateOrCreateMeta('og:locale', seo.locale || 'en_US', 'property')
    
    // Article tags for blog posts
    if (route.name === 'BlogPost' && route.params.slug) {
      const blogPost = getBlogPostBySlug(route.params.slug)
      if (blogPost) {
        updateOrCreateMeta('article:published_time', blogPost.date, 'property')
        updateOrCreateMeta('article:modified_time', blogPost.date, 'property')
        updateOrCreateMeta('article:author', blogPost.author || 'Pramukh Groundnut Oil Mill', 'property')
        updateOrCreateMeta('article:section', 'Groundnut Oil', 'property')
        if (blogPost.tags && Array.isArray(blogPost.tags)) {
          blogPost.tags.forEach(tag => {
            updateOrCreateMeta('article:tag', tag, 'property')
          })
        }
      }
    }
    
    // Twitter Card tags
    updateOrCreateMeta('twitter:card', seo.twitterCard || 'summary_large_image')
    updateOrCreateMeta('twitter:title', optimizedTitle)
    updateOrCreateMeta('twitter:description', optimizedDescription)
    updateOrCreateMeta('twitter:image', fullImageUrl)
    updateOrCreateMeta('twitter:image:alt', optimizedTitle)
    if (seo.twitterSite) {
      updateOrCreateMeta('twitter:site', seo.twitterSite)
    }
    if (seo.twitterCreator) {
      updateOrCreateMeta('twitter:creator', seo.twitterCreator)
    }
    
    // Canonical URL (handle trailing slashes)
    const canonicalUrl = currentUrl.endsWith('/') && currentUrl !== `${baseUrl}/` 
      ? currentUrl.slice(0, -1) 
      : currentUrl
    updateOrCreateLink('canonical', canonicalUrl)
    
    // Language
    document.documentElement.setAttribute('lang', seo.lang || 'en')
    
    // Additional SEO meta tags
    updateOrCreateMeta('application-name', 'Pramukh Groundnut Oil Mill', 'name')
    updateOrCreateMeta('msapplication-TileColor', '#ef4444', 'name')
    updateOrCreateMeta('msapplication-config', '/browserconfig.xml', 'name')
  }
  
  onMounted(() => {
    updateMeta()
  })
  
  watch(() => route.path, () => {
    updateMeta()
  })
  
  return { updateMeta }
}

