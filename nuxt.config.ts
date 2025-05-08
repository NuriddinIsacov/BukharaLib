// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/i18n"],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'uz', name: 'Uzbek', file: 'uz.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Russian', file: 'ru.json' },
    ]
  },
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  
});