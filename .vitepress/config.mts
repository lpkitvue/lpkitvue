import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LPKitVue",
  description: "A comprehensive Vue 3 component library",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/logo.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'LPKitVue' }],
    ['meta', { name: 'og:description', content: 'A comprehensive Vue 3 component library' }],
    ['meta', { name: 'og:image', content: '/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: 'LPKitVue',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/' },
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
      pattern: 'https://github.com/lpkitvue/lpkitvue-component/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    },
  }
})
