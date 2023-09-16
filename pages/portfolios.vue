<template>
  <Head>
    <Title>Mehdi Rafiei | Portfolios | Front-end Developer</Title>
  </Head>

  <div>
    <Projects
      :projects="getPortfolios()"
      :portfolios-page="true"
      :headline="true"
      :slide-auto-play="homeProjectsSwiper.autoPlay"
    />
    <transition name="fadeScale">
      <Gallery v-if="galleryVisible" :project="getPortfolio(activeProjectID)" />
    </transition>
  </div>
</template>

<script>
import { mapState } from "pinia";
import useProjectsStore from "@/stores/projects";
export default {
  data() {
    return {
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        770: {
          slidesPerView: 2,
          spaceBetween: 50,
        },

        771: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      homeProjectsSwiper: {
        slidesPerView: 2,
        autoPlay: {
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      },
    };
  },
  computed: {
    ...mapState(useProjectsStore, [
      "getPortfolios",
      "galleryVisible",
      "activeProjectID",
      "getPortfolio",
    ]),
  },
};
</script>

<style scoped></style>
