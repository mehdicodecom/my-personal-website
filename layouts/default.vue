<template>
  <div class="flex flex-col min-h-screen bg-main-dark">
    <coloredCodes />
    <div class="min-h-screen">
      <AppHeader />
      <slot />
    </div>
    <Projects
      v-if="$route.path === '/'"
      :projects="projects"
      :headline="true"
      :home-page="true"
      :slide-auto-play="homeProjectsSwiper.autoPlay"
    />
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      homeProjectsSwiper: {
        slidesPerView: 2,
        autoPlay: {
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      },
      projects: [
        {
          name: "Metriland",
          title: "Tokenizing Realstates",
          description:
            "MetriLand offers investment on realstates by tokens, even with small budget you can get profit",
          img: "metriland/home.png",
          used: ["html", "css", "js", "nuxt", "vue", "pinia", "unocss"],
        },
        {
          name: "FinnoTex",
          title: "Trading CryptoCurrencies",
          description:
            "This platform (FinnoTex) has many features like advanced trading and OTC trading.",
          img: "finnotex.png",
          used: [
            "html",
            "css",
            "js",
            "nuxt",
            "vue",

            "tradingview",
            "responsive",
          ],
        },
        {
          name: "FinnoBot",
          title: "Automatic Trading",
          description:
            "Buy automatic trading bots and connect to ur trading accounts like binance and get profit with it",
          img: "finnobot.jpg",
          used: [
            "html",
            "css",
            "js",
            "nuxt",
            "vue",
            "tradingview",
            "responsive",
          ],
        },
        {
          name: "Rotana",
          title: "Bank Tokens Trading System",
          description:
            "This platform was meant to be used on banks for trading special tokens",
          img: "rotana.png",
          used: ["html", "css", "js", "nuxt", "vue", "tailwind", "responsive"],
        },
        {
          name: "4Sou",
          title: "Job Searching for immigrants",
          description:
            "4sou was a large app with multiple languages support for immigrants to find their dream jobs",
          img: "4sou-English.png",
          used: ["html", "css", "js", "sass", "nuxt", "vue"],
        },
      ],
    };
  },
};
</script>

<style></style>
