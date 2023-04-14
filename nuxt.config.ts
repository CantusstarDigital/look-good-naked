// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [
        'nuxt-seo-kit'
    ],
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://phantomwellness.com',
            siteName: 'Phantom Wellness',
            siteDescription: 'The Complete Guide to Healthy Living with Phantom Wellness',
            language: 'en',
        }
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    },
    modules: [
        '@nuxt/content',
        'nuxt-gtag',
    ],
    gtag: {
        id: 'G-D4E2NF0RCC'
    },
    content: {
        
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: [
        '~/assets/css/styles.css'
    ],
})
