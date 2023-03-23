// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [
        'nuxt-seo-kit'
    ],
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://look-good.netlify.app',
            siteName: 'Look Good Naked',
            siteDescription: 'Things to do, eat and plan to look good naked',
            language: 'en', // prefer more explicit language codes like `en-AU` over `en`
        }
    },
    modules: [
        '@nuxt/content',
    ],
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
