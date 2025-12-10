# SEO Optimization Guide - Pramukh Groundnut Oil Mill

## ✅ SEO Features Implemented

### 1. **Meta Tags & Open Graph**
- ✅ Comprehensive meta description and keywords for each page
- ✅ Open Graph tags for social media sharing (Facebook, LinkedIn)
- ✅ Twitter Card tags for Twitter sharing
- ✅ Dynamic title tags for each route
- ✅ Canonical URLs to prevent duplicate content

### 2. **Structured Data (JSON-LD)**
- ✅ Organization schema with business information
- ✅ Website schema with search functionality
- ✅ Product schema for individual product pages
- ✅ Product collection schema for products listing
- ✅ Breadcrumb schema for navigation

### 3. **Technical SEO**
- ✅ `robots.txt` file for search engine crawlers
- ✅ `sitemap.xml` for all important pages
- ✅ Semantic HTML5 elements (`<main>`, `<header>`, `<footer>`)
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Alt text for all images
- ✅ Mobile-responsive design
- ✅ Fast loading with lazy loading images

### 4. **Content SEO**
- ✅ Unique, descriptive titles for each page
- ✅ Keyword-rich meta descriptions
- ✅ Proper heading structure
- ✅ Internal linking between pages
- ✅ Descriptive URLs

### 5. **Performance Optimization**
- ✅ Image lazy loading
- ✅ Preconnect for external resources
- ✅ Optimized assets

## 📋 SEO Checklist

### Pages Optimized:
- ✅ Homepage (`/`)
- ✅ Products Page (`/products`)
- ✅ Product Details Pages (`/products/:id`)
- ✅ About Page (`/about`)
- ✅ Manufacturing Process (`/manufacturing-process`)
- ✅ Testimonials (`/testimonials`)
- ✅ Contact (`/contact`)

## 🔧 How to Update SEO Settings

### Update Site URL
Edit `src/composables/useSEO.js` and change the `baseUrl`:
```javascript
const baseUrl = 'https://yourdomain.com'
```

### Update Meta Tags for a Route
Edit `src/router/index.js` and update the `meta` object for each route:
```javascript
meta: {
  title: 'Your Page Title',
  description: 'Your page description',
  keywords: 'keyword1, keyword2, keyword3'
}
```

### Update Structured Data
Edit `src/components/common/StructuredData.vue` to modify organization information, business details, etc.

## 📊 Next Steps for Better SEO

1. **Google Search Console**: Submit your sitemap at `https://search.google.com/search-console`
2. **Google Analytics**: Add tracking code for visitor analytics
3. **Page Speed**: Test with Google PageSpeed Insights
4. **Mobile-Friendly Test**: Verify mobile responsiveness
5. **SSL Certificate**: Ensure HTTPS is enabled
6. **Local SEO**: Add Google My Business listing
7. **Content**: Regularly update blog/content section
8. **Backlinks**: Build quality backlinks from relevant sites

## 🔍 SEO Keywords Used

Primary Keywords:
- groundnut oil
- peanut oil
- pure groundnut oil
- natural cooking oil
- traditional oil
- ghani oil
- cold pressed oil
- Gujarat groundnut oil
- Pramukh oil

Long-tail Keywords:
- buy groundnut oil online
- pure groundnut oil 1 liter
- 5 liter groundnut oil
- traditional groundnut oil extraction
- best groundnut oil in Gujarat

## 📱 Social Media Integration

- Facebook: https://www.facebook.com/share/1C7vKVaKBy/
- Instagram: https://www.instagram.com/pramukhminioilmill
- WhatsApp: https://wa.me/917096242187

## 📞 Business Information

- **Address**: Ransiki Road, Opposite Yogi Petrol Pump, Derdi Kumbhaji, Gujarat 360465
- **Phone**: +91 70962 42187, +91 97279 65217
- **Location**: Gujarat, India

## 🚀 Performance Tips

1. Compress images before uploading
2. Use WebP format for images when possible
3. Minimize CSS and JavaScript
4. Enable browser caching
5. Use CDN for static assets
6. Implement service worker for offline support

