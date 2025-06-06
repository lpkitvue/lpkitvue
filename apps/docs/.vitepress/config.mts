import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "LPKitVue",
  description: "A comprehensive Vue 3 component library with accessible, customizable components for modern web applications",
  lastUpdated: true,
  base: '/lpkitvue/',
  ignoreDeadLinks: true,
  cleanUrls: true,

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
    ['meta', { name: 'keywords', content: 'vue, vue3, components, ui library, vue components, typescript, frontend, web development, design system' }],
    ['meta', { name: 'application-name', content: 'LPKitVue' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'LPKitVue' }],
    ['meta', { name: 'theme-color', content: '#4361ee' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-TFVL7Y9FEK' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-TFVL7Y9FEK');
    `],
    ['script', {}, `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NWFCS8QL');
    `],
    ['noscript', {}, `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NWFCS8QL"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'LPKitVue',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      {
        text: 'Development',
        items: [
          { text: 'Storybook', link: '/lpkitvue/storybook/', target: '_blank' },
          { text: 'Contributing', link: '/contributing' },
          { text: 'Changelog', link: '/changelog' }
        ]
      },
      { text: 'License', link: '/license' },
      { text: 'GitHub', link: 'https://github.com/lpkitvue/lpkitvue', target: '_blank' }
    ],

    sidebar: {
      '/components/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'Installation', link: '/components/installation' },
            { text: 'Quick Start', link: '/components/quick-start' },
            { text: 'Theming', link: '/components/theming' },
          ]
        },
        {
          text: 'Feedback',
          collapsed: false,
          items: [
            { text: 'Alert', link: '/components/feedback/alert' },
            { text: 'Toast', link: '/components/feedback/toast' },
          ]
        },
        {
          text: 'Inputs & Forms',
          collapsed: false,
          items: [
            { text: 'Button', link: '/components/input-and-form/button' },
            { text: 'Form', link: '/components/input-and-form/form' },
            { text: 'Editor', link: '/components/input-and-form/editor' },
          ]
        },
        {
          text: 'Layout',
          collapsed: false,
          items: [
            { text: 'Card', link: '/components/layout/card' },
            { text: 'Modal', link: '/components/layout/modal' },
            { text: 'Tab', link: '/components/layout/tab' },
          ]
        },
        {
          text: 'Navigation',
          collapsed: false,
          items: [
            { text: 'Bread-Tag', link: '/components/navigation/bread-tag' },
          ]
        },
        {
          text: 'Table',
          collapsed: false,
          items: [
            { text: 'Static Table', link: '/components/table/static-table' },
            { text: 'Async Table', link: '/components/table/async-table' },
          ]
        },
        {
          text: 'Data Display',
          collapsed: false,
          items: [
            { text: 'Font-Icon', link: '/components/data-display/font-icon' },
            { text: 'Overlay', link: '/components/data-display/overlay' },
          ]
        },
        {
          text: 'Services',
          collapsed: false,
          items: [
            { text: 'Keycloak-Auth', link: '/components/service/keycloak-auth' },
            { text: 'Storage', link: '/components/service/storage' },
          ]
        },
        {
          text: 'Development Resources',
          collapsed: true,
          items: [
            { text: 'Storybook', link: '/lpkitvue/storybook/', target: '_blank' },
            { text: 'TypeScript Definitions', link: '/components/typescript' },
            { text: 'Testing Guide', link: '/components/testing' },
            { text: 'Migration Guide', link: '/components/migration' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lpkitvue/lpkitvue' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present LPKitVue Team'
    },

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    editLink: {
      pattern: 'https://github.com/lpkitvue/lpkitvue/edit/main/apps/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    lineNumbers: true,
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[!code (.*?)\]/g, '')
        }
      }
    ]
  },

  vite: {
    optimizeDeps: {
      include: ['vue-select', 'vue', '@vue/shared'],
      exclude: ['@lpkitvue/alert', '@lpkitvue/toast', '@lpkitvue/font-icon']
    },
    ssr: {
      noExternal: [
        'vue-select',
        '@lpkitvue/button',
        '@lpkitvue/alert',
        '@lpkitvue/table',
        '@lpkitvue/modal',
        '@lpkitvue/toast',
        '@lpkitvue/font-icon'
      ],
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          },
        },
      },
      chunkSizeWarningLimit: 1000
    },
    server: {
      fs: {
        allow: ['../..']
      }
    }
  },

  buildEnd: (config) => {
    console.log('✅ VitePress build completed successfully')
    console.log(`📁 Output directory: ${config.outDir}`)
  }
})
