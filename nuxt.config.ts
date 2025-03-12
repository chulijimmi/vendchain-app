// https://nuxt.com/docs/api/configuration/nuxt-config
import colors from "tailwindcss/colors";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Enable typescript
  typescript: {
    typeCheck: true,
  },

  // Enable force page system
  pages: true,

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
});
