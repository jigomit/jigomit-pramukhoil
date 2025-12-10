<template>
  <!-- Structured Data is injected into head via onMounted -->
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../../data/products'
import { getBlogPostBySlug } from '../../data/blog'

const route = useRoute()

// FAQ data (matching FAQs.vue)
const faqsData = [
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

// Testimonials data (matching Testimonials.vue)
const testimonialsData = [
  {
    name: 'Rajesh Kumar',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'I have been using Pramukh Groundnut Oil for over 5 years now. The quality is exceptional and the taste is authentic. My family loves it, and I highly recommend it to everyone.',
    verified: true
  },
  {
    name: 'Priya Sharma',
    location: 'Delhi, NCR',
    rating: 5,
    text: 'Best groundnut oil I have ever used! Pure, natural, and healthy. The packaging is also great and the oil stays fresh for a long time. Worth every rupee!',
    verified: true
  },
  {
    name: 'Amit Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'The traditionally filtered oil from Pramukh reminds me of my grandmother\'s cooking. Authentic flavor and aroma. This is what real groundnut oil should taste like!',
    verified: true
  },
  {
    name: 'Sunita Reddy',
    location: 'Hyderabad, Telangana',
    rating: 5,
    text: 'As a health-conscious person, I appreciate the purity and quality of Pramukh oil. No additives, no chemicals - just pure natural goodness. My doctor recommended it too!',
    verified: true
  },
  {
    name: 'Vikram Singh',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'Great value for money! The oil is of premium quality and the customer service is excellent. I order regularly and have never been disappointed.',
    verified: true
  },
  {
    name: 'Meera Nair',
    location: 'Bangalore, Karnataka',
    rating: 5,
    text: 'I tried their organic groundnut oil and it\'s amazing! The difference in quality is noticeable. My kids love the food cooked with this oil. Highly recommended!',
    verified: true
  },
  {
    name: 'Ramesh Iyer',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    text: 'Excellent product! The oil has a rich golden color and perfect consistency. It doesn\'t smoke much while cooking and gives great flavor to the food.',
    verified: true
  },
  {
    name: 'Kavita Desai',
    location: 'Surat, Gujarat',
    rating: 5,
    text: 'Pramukh oil has become a staple in our kitchen. The quality is consistent, and we love that it\'s made using traditional methods. Trustworthy brand!',
    verified: true
  },
  {
    name: 'Anil Joshi',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    text: 'I run a small restaurant and use Pramukh oil for all my cooking. The customers love the taste, and the oil is very economical for commercial use. Great product!',
    verified: true
  }
]

const getStructuredData = () => {
  const baseUrl = 'https://pramukhgroundnutoil.com'
  const currentUrl = `${baseUrl}${route.path}`
  
  // LocalBusiness Schema (enhanced from Organization)
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#organization`,
    name: 'Pramukh Groundnut Oil Mill',
    alternateName: 'Pramukh Oil Mill',
    url: baseUrl,
    logo: `${baseUrl}/favicon.png`,
    image: `${baseUrl}/favicon.png`,
    description: 'Premium quality pure and natural groundnut oil manufacturer using careful filtration methods. Located in Derdi Kumbhaji, Gujarat.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ransiki Road, Opposite Yogi Petrol Pump',
      addressLocality: 'Derdi Kumbhaji',
      addressRegion: 'Gujarat',
      postalCode: '360465',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.0225',
      longitude: '72.5714'
    },
    telephone: '+91-70962-42187',
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-70962-42187',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: ['en', 'gu']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-97279-65217',
        contactType: 'Sales',
        areaServed: 'IN',
        availableLanguage: ['en', 'gu']
      }
    ],
    sameAs: [
      'https://www.facebook.com/share/1C7vKVaKBy/',
      'https://www.instagram.com/pramukhminioilmill',
      'https://wa.me/917096242187'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    }
  }
  
  // Organization Schema (for compatibility)
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pramukh Groundnut Oil Mill',
    url: baseUrl,
    logo: `${baseUrl}/favicon.png`,
    description: 'Premium quality pure and natural groundnut oil manufacturer using careful filtration methods.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ransiki Road, Opposite Yogi Petrol Pump',
      addressLocality: 'Derdi Kumbhaji',
      addressRegion: 'Gujarat',
      postalCode: '360465',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-70962-42187',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['en', 'gu']
    },
    sameAs: [
      'https://www.facebook.com/share/1C7vKVaKBy/',
      'https://www.instagram.com/pramukhminioilmill',
      'https://wa.me/917096242187'
    ]
  }
  
  // Website Schema
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pramukh Groundnut Oil Mill',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/products?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
  
  // Breadcrumb Schema (dynamic based on route)
  const generateBreadcrumbs = () => {
    const crumbs = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      }
    ]

    const pathSegments = route.path.split('/').filter(Boolean)
    let currentPath = ''

    pathSegments.forEach((segment, index) => {
      currentPath += '/' + segment
      let name = segment

      // Map segments to friendly names
      if (route.name === 'Products' && segment === 'products') {
        name = 'Products'
      } else if (route.name === 'ProductDetails' && segment === 'products') {
        name = 'Products'
      } else if (route.name === 'ProductDetails' && route.params.id) {
        const product = products.find(p => p.id === parseInt(route.params.id))
        name = product ? product.name : 'Product Details'
      } else if (route.name === 'About') {
        name = 'About Us'
      } else if (route.name === 'ManufacturingProcess') {
        name = 'Process'
      } else if (route.name === 'Testimonials') {
        name = 'Testimonials'
      } else if (route.name === 'Contact') {
        name = 'Contact'
      } else if (route.name === 'Blog') {
        name = 'Blog'
      } else if (route.name === 'BlogPost' && segment === 'blog') {
        name = 'Blog'
      } else if (route.name === 'BlogPost' && route.params.slug) {
        name = route.params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      } else if (route.name === 'FAQs') {
        name = 'FAQs'
      } else if (route.name === 'PrivacyPolicy') {
        name = 'Privacy Policy'
      } else if (route.name === 'TermsConditions') {
        name = 'Terms & Conditions'
      } else {
        name = segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      }

      crumbs.push({
        '@type': 'ListItem',
        position: index + 2,
        name: name,
        item: `${baseUrl}${currentPath}`
      })
    })

    return crumbs
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: generateBreadcrumbs()
  }
  
  // Product Schema for product pages
  let productSchema = null
  if (route.name === 'ProductDetails' && route.params.id) {
    const product = products.find(p => p.id === parseInt(route.params.id))
    if (product) {
      productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.longDescription || product.shortDescription,
        image: product.image?.startsWith('http') ? product.image : `${baseUrl}${product.image}`,
        brand: {
          '@type': 'Brand',
          name: 'Pramukh'
        },
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'INR',
          availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
          url: `${baseUrl}/products/${product.id}`
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '150'
        }
      }
    }
  }
  
  // Product Collection Schema for products page
  let productCollection = null
  if (route.name === 'Products') {
    productCollection = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Pramukh Groundnut Oil Products',
      description: 'Premium collection of pure and natural groundnut oil products',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.name,
          description: product.shortDescription,
          image: product.image?.startsWith('http') ? product.image : `${baseUrl}${product.image}`,
          offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'INR'
          }
        }
      }))
    }
  }
  
  // Blog Schema
  let blogSchema = null
  if (route.name === 'Blog') {
    blogSchema = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Pramukh Groundnut Oil Mill Blog',
      description: 'Stories, tips & updates from our rescue community',
      url: `${baseUrl}/blog`,
      publisher: {
        '@type': 'Organization',
        name: 'Pramukh Groundnut Oil Mill'
      }
    }
  }
  
  // Blog Post Schema
  let blogPostSchema = null
  if (route.name === 'BlogPost' && route.params.slug) {
    const blogPost = getBlogPostBySlug(route.params.slug)
    if (blogPost) {
      blogPostSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blogPost.title,
        description: blogPost.excerpt,
        datePublished: blogPost.date,
        dateModified: blogPost.date,
        image: blogPost.image ? (typeof blogPost.image === 'string' && blogPost.image.startsWith('http') ? blogPost.image : `${baseUrl}/favicon.png`) : `${baseUrl}/favicon.png`,
        author: {
          '@type': 'Organization',
          name: blogPost.author || 'Pramukh Groundnut Oil Mill'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Pramukh Groundnut Oil Mill',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/favicon.png`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${baseUrl}/blog/${blogPost.slug}`
        }
      }
    }
  }
  
  // FAQ Schema for FAQs page
  let faqSchema = null
  if (route.name === 'FAQs') {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqsData.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  }
  
  // Review Schema for Testimonials page
  let reviewSchema = null
  if (route.name === 'Testimonials') {
    const averageRating = testimonialsData.reduce((sum, t) => sum + t.rating, 0) / testimonialsData.length
    reviewSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Pramukh Groundnut Oil',
      brand: {
        '@type': 'Brand',
        name: 'Pramukh'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: averageRating.toFixed(1),
        reviewCount: testimonialsData.length.toString(),
        bestRating: '5',
        worstRating: '1'
      },
      review: testimonialsData.map(testimonial => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: testimonial.name
        },
        datePublished: new Date().toISOString().split('T')[0],
        reviewBody: testimonial.text,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: testimonial.rating.toString(),
          bestRating: '5',
          worstRating: '1'
        }
      }))
    }
  }
  
  // HowTo Schema for Process page (long-tail SEO for filtered groundnut oil)
  let howToSchema = null
  if (route.name === 'ManufacturingProcess') {
    const processSteps = [
      {
        name: 'Selection of Groundnuts',
        text: 'We carefully select the finest quality groundnuts from trusted farmers. Only the best, fully matured groundnuts make it to our production line.',
        image: `${baseUrl}/favicon.png`
      },
      {
        name: 'Cleaning & Sorting',
        text: 'The selected groundnuts undergo thorough cleaning to remove any impurities, dust, stones, or foreign materials. This ensures purity from the very beginning.',
        image: `${baseUrl}/favicon.png`
      },
      {
        name: 'Oil Extraction',
        text: 'We extract groundnut oil using a high-efficiency screw press machine that gently presses the nuts without using heat. This method preserves natural flavor, aroma, and nutrients while maximizing oil output.',
        image: `${baseUrl}/favicon.png`
      },
      {
        name: 'Filtration',
        text: 'We use a high-quality filter press to remove all fine particles and sediments. This multi-stage natural filtration process gives you clean, clear, and pure groundnut oil.',
        image: `${baseUrl}/favicon.png`
      },
      {
        name: 'Quality Testing & Packaging',
        text: 'Every batch undergoes rigorous quality testing for purity, acidity, and nutritional content. Only after passing all tests, the oil is packaged in food-grade containers.',
        image: `${baseUrl}/favicon.png`
      }
    ]
    
    howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Traditional Groundnut Oil Manufacturing Process',
      description: 'Step-by-step guide to how Pramukh Groundnut Oil is manufactured using traditional methods',
      image: `${baseUrl}/favicon.png`,
      totalTime: 'PT2H',
      tool: [
        {
          '@type': 'HowToTool',
          name: 'Screw Press Machine'
        },
        {
          '@type': 'HowToTool',
          name: 'Filter Press'
        }
      ],
      step: processSteps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
        image: step.image
      }))
    }
  }
  
  // Combine all schemas
  const schemas = [localBusiness, organization, website, breadcrumb]
  if (productSchema) schemas.push(productSchema)
  if (productCollection) schemas.push(productCollection)
  if (blogSchema) schemas.push(blogSchema)
  if (blogPostSchema) schemas.push(blogPostSchema)
  if (faqSchema) schemas.push(faqSchema)
  if (reviewSchema) schemas.push(reviewSchema)
  if (howToSchema) schemas.push(howToSchema)
  
  return JSON.stringify(schemas)
}

const injectStructuredData = () => {
  // Remove existing structured data script
  const existingScript = document.querySelector('script[type="application/ld+json"]')
  if (existingScript) {
    existingScript.remove()
  }
  
  // Create and inject new structured data
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = getStructuredData()
  document.head.appendChild(script)
}

onMounted(() => {
  injectStructuredData()
})

watch(() => route.path, () => {
  injectStructuredData()
})
</script>

