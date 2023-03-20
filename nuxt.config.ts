// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss", "nuxt-icon"],

    css: ["~/assets/css/style.scss"],
});
