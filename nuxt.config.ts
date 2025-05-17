// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/i18n"],
  i18n: {
    strategy: "prefix", // keeps '/uz/...' & '/ru/...', but root = 'en'
    defaultLocale: "uz", // or whichever you prefer
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: false,
      fallbackLocale: "uz",
    },
    lazy: true, // load locales on demand
    langDir: "locales/", // directory for your JSON files
    locales: [
      { code: "uz", name: "O‘zbekcha", file: "uz.json" },
      { code: "ru", name: "Русский", file: "ru.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
  },
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
});

