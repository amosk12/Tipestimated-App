export default defineNuxtConfig({
    modules: ['@pinia/nuxt', '@nuxt/image', 'nuxt-icon', '@nuxtjs/google-fonts', '@nuxthq/ui'],
    devtools: { enabled: true },
    googleFonts: {
        families: {
            Roboto: {
                wght: [100, 300, 400, 500, 600, 700, 900],
                ital: [400, 500],
            },
        },
    },
    css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],
    colorMode: {
        preference: 'light'
    }
})