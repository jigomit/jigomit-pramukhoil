export const products = [
  {
    id: 1,
    name: 'Pramukh Groundnut Oil',
    slug: 'pramukh-groundnut-oil-premium',
    price: 190,
    size: '1 Liter',
    image: '/src/assets/images/WhatsApp_Image_2025-11-29_at_12.03.14_3b0d60e9-removebg-preview.png',
    shortDescription: 'Premium quality groundnut oil with authentic traditional flavor and rich aroma.',
    longDescription: 'Our premium groundnut oil is carefully extracted to preserve all natural nutrients and authentic flavor. Perfect for everyday cooking and special occasions.',
    images: [
      '/src/assets/images/WhatsApp_Image_2025-11-29_at_12.03.14_3b0d60e9-removebg-preview.png'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'Pramukh Groundnut Oil',
    slug: 'pramukh-groundnut-oil-classic',
    price: 950,
    size: '5 Liter',
    image: '/src/assets/images/IMG-20251127-WA0004-removebg-preview.png',
    shortDescription: 'Classic groundnut oil with traditional extraction methods for authentic taste.',
    longDescription: 'Our classic groundnut oil brings you the authentic taste of traditional groundnut oil. Extracted using time-tested methods to ensure purity and flavor.',
    images: [
      '/src/assets/images/IMG-20251127-WA0004-removebg-preview.png'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: 'Pramukh Groundnut Oil',
    slug: 'pramukh-groundnut-oil-special',
    price: 2800,
    size: '15 Liter',
    image: '/src/assets/images/IMG-20251127-WA0008-removebg-preview.png',
    shortDescription: 'Special edition groundnut oil with enhanced quality and premium packaging.',
    longDescription: 'Our special edition groundnut oil is crafted with extra care to deliver the finest quality. Perfect for those who appreciate premium cooking oil.',
    images: [
      '/src/assets/images/IMG-20251127-WA0008-removebg-preview.png'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: 'Pramukh Groundnut Oil',
    slug: 'pramukh-groundnut-oil-deluxe',
    price: 3000,
    size: '15 Kgs',
    image: '/src/assets/images/IMG-20251127-WA0007-removebg-preview.png',
    shortDescription: 'Deluxe groundnut oil with premium quality and exceptional taste profile.',
    longDescription: 'Our deluxe groundnut oil represents the pinnacle of quality. Carefully selected groundnuts and meticulous extraction process ensure the best possible product.',
    images: [
      '/src/assets/images/IMG-20251127-WA0007-removebg-preview.png'
    ],
    inStock: true,
    featured: true
  }
]

export const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'refined', label: 'Refined Oil' },
  { value: 'organic', label: 'Organic Oil' },
  { value: 'filtered', label: 'Filtered Oil' },
  { value: 'premium-filtered', label: 'Premium Filtered' }
]

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug)
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured)
}

export const getProductsByCategory = (category) => {
  if (category === 'all') return products
  return products.filter(product => product.category === category)
}

