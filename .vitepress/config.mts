import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "LPKitVue",
  description: "A comprehensive Vue 3 component library",
  lastUpdated: true,
  base: '/lpkitvue/',
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://lpkitvue.github.io',
    exclude: ['/404.html', '/404'],
    routes: [
      { url: '/', lastmod: new Date() },
      { url: '/guide/getting-started', lastmod: new Date() },
      { url: '/guide/installation', lastmod: new Date() },
      { url: '/guide/theming', lastmod: new Date() },
      { url: '/guide/i18n', lastmod: new Date() },
      { url: '/components/', lastmod: new Date() },
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
      { url: '/components/service/storage', lastmod: new Date() }
    ]
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/logo.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'LPKitVue' }],
    ['meta', { name: 'og:description', content: 'A comprehensive Vue 3 component library' }],
    ['meta', { name: 'og:image', content: '/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'LPKitVue' }],
    ['meta', { name: 'twitter:description', content: 'A comprehensive Vue 3 component library' }],
    ['meta', { name: 'twitter:image', content: '/logo.png' }],
    ['script', { src: '/scripts.js' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: 'LPKitVue',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'License', link: '/license' },
      { text: 'GitHub', link: 'https://github.com/lpkitvue/lpkitvue' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Theming', link: '/guide/theming' },
            { text: 'Internationalization', link: '/guide/i18n' },
            { text: 'License', link: '/license' }
          ]
        },
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/' },
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
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lpkitvue/lpkitvue' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present LPKitVue'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    editLink: {
      pattern: 'https://github.com/lpkitvue/lpkitvue/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
  },
  vite: {
    optimizeDeps: {
      include: ['vue-select'],
    },
    ssr: {
      noExternal: ['vue-select', '@lpkitvue/button', '@lpkitvue/alert', '@lpkitvue/table'],
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      }
    },
    rollupOptions: {
      external: ['vue', 'vue-i18n', 'vue-select'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-i18n': 'VueI18n',
          'vue-select': 'VueSelect',
        },
      },
    }
  }
})
