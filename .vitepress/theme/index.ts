import { h, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { setupGoogleAnalytics } from './analytics'
import './style.css'

const GA_MEASUREMENT_ID = 'G-TFVL7Y9FEK'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    onMounted(() => {
      setupGoogleAnalytics(GA_MEASUREMENT_ID)
      console.log('App mounted')

      router.onAfterRouteChanged = (to) => {
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_path: to,
            page_title: document.title
          })
        }
      }
    })
  }
}
