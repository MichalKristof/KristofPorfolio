// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        serveStatic: true,
    },

    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "KristofPorfolio",
            link: [{rel: "icon", type: "image/x-icon", href: "favicon.ico"}],
        },
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    css: ["@/assets/css/main.css"],

    modules: ["@vueuse/motion/nuxt", "nuxt-icon"],

    runtimeConfig: {
        public:{
            NUXT_ACCESS_KEY: process.env.NUXT_ACCESS_KEY,
        },
    },
})
