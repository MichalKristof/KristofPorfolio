// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: "static",

    ssr: false,

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
})
