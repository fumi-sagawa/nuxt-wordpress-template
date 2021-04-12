export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  privateRuntimeConfig: {
    apiKey: process.env.API_KEY
  },
  publicRuntimeConfig: {
    apiKey:
      process.env.NODE_ENV !== "production" ? process.env.API_KEY : undefined
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "NuxtWordpress20210401",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/destyle.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["./assets/css/_variables.scss", "./assets/css/_mixin.scss"]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
