// SEO Enhancements for .vitepress/config.mts

import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "LPKitVue",
  description: "A comprehensive Vue 3 component library with accessible, customizable components for modern web applications",
  lastUpdated: true,
  base: '/lpkitvue/',
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://lpkitvue.github.io',
    changefreq: 'weekly',
    priority: 0.8,
    lastmodDateOnly: false,
    exclude: ['/404.html', '/404'],
    routes: [
      { url: '/', lastmod: new Date(), changefreq: 'weekly', priority: 1.0 },
      { url: '/components/', lastmod: new Date(), changefreq: 'weekly', priority: 0.9 },
      { url: '/components/feedback/alert', lastmod: new Date() },
      { url: '/components/feedback/toast', lastmod: new Date() },
      { url: '/components/input-and-form/button', lastmod: new Date() },
      { url: '/components/input-and-form/form', lastmod: new Date() },
      { url: '/components/input-and-form/editor', lastmod: new Date() },
      { url: '/components/layout/card', lastmod: new Date() },
      { url: '/components/layout/modal', lastmod: new Date() },
      { url: '/components/layout/tab', lastmod: new Date() },
      { url: '/components/navigation/bread-tag', lastmod: new Date() },
      { url: '/components/data-display/font-icon', lastmod: new Date() },
      { url: '/components/data-display/overlay', lastmod: new Date() },
      { url: '/components/service/keycloak-auth', lastmod: new Date() },
      { url: '/components/service/storage', lastmod: new Date() },
      { url: '/components/table/static-table', lastmod: new Date() },
      { url: '/components/table/async-table', lastmod: new Date() },
      { url: '/license', lastmod: new Date(), priority: 0.7 }
    ]
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/lpkitvue/logo.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/lpkitvue/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/lpkitvue/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/lpkitvue/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/lpkitvue/site.webmanifest' }],
    ['link', { rel: 'canonical', href: 'https://lpkitvue.github.io/lpkitvue/' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'LPKitVue - Vue 3 Component Library' }],
    ['meta', { name: 'og:description', content: 'A comprehensive Vue 3 component library with accessible, customizable components for modern web applications' }],
    ['meta', { name: 'og:image', content: 'https://lpkitvue.github.io/lpkitvue/og-image.png' }],
    ['meta', { name: 'og:url', content: 'https://lpkitvue.github.io/lpkitvue/' }],
    ['meta', { name: 'og:site_name', content: 'LPKitVue' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'LPKitVue - Vue 3 Component Library' }],
    ['meta', { name: 'twitter:description', content: 'A comprehensive Vue 3 component library with accessible, customizable components for modern web applications' }],
    ['meta', { name: 'twitter:image', content: 'https://lpkitvue.github.io/lpkitvue/twitter-card.png' }],
    ['meta', { name: 'author', content: 'LPKitVue Team' }],
    ['meta', { name: 'keywords', content: 'vue, vue3, components, ui library, vue components, typescript, frontend, web development, react components' }],
    ['meta', { name: 'application-name', content: 'LPKitVue' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'LPKitVue' }],
    ['meta', { name: 'theme-color', content: '#4361ee' }],
  ],

  themeConfig: {
    transformHtml: (_, id, { pageData }) => {
      if (pageData.frontmatter.layout === 'home') {
        return {
          html: `<script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "LPKitVue",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Any",
            "description": "A comprehensive Vue 3 component library with accessible, customizable components",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }
          </script>`,
          tags: []
        }
      }
    }
  }
})
