// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr: "server",
  target: "static",
  experimental: {
    payloadExtraction: false,
  },
  app: {
    head: {
      title: "Mehdi Rafiei | Front-end Developer",
      meta: [
        {
          name: "description",
          content:
            "Experienced front end developer knowledge about UI/UX Design, TDD, Nuxt, Vue, PWA, TWA, Responsive design & etc",
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  modules: ["@pinia/nuxt", "@unocss/nuxt", "vue3-carousel-nuxt"],
  carousel: {
    prefix: "swipe",
  },
});
