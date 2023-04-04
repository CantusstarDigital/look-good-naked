// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [
        'nuxt-seo-kit'
    ],
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://look-good-nood.com',
            siteName: 'Look Good Nood',
            siteDescription: 'Things to do, eat and plan to look good in the nood',
            language: 'en', // prefer more explicit language codes like `en-AU` over `en`
        }
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    },
    modules: [
        '@nuxt/content',
        'nuxt-gtag'
    ],
    gtag: {
        id: 'G-H1QN06FTLW'
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
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
