// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxt/ui"],
  i18n: {
    locales: [
      { code: "en", language: "en-US" },
      { code: "fr", language: "fr-FR" },
    ],
    defaultLocale: "en",
    vueI18n: "./nuxt-i18n.ts",
  },
});
