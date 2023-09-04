<template>
  <div class="flex flex-col min-h-screen bg-main-dark">
    <coloredCodes />
    <div class="min-h-screen">
      <AppHeader />
      <slot />
    </div>
    <Projects
      v-if="$route.path === '/'"
      :projects="getPortfolios(8)"
      :headline="true"
      :home-page="true"
      :slide-auto-play="homeProjectsSwiper.autoPlay"
    />

    <!-- <Gallery :project="projects[activeProject]" />
    <div class="fixed bg-black/80 absolute w-full h-full z-80"></div> -->
    <AppFooter />
  </div>
</template>

<script>
import { mapState } from "pinia";
import useProjectsStore from "@/stores/projects";
export default {
  name: "default",
  data() {
    return {
      homeProjectsSwiper: {
        slidesPerView: 2,
        autoPlay: false,
        // autoPlay: {
        //   delay: 8000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // },
      },
      activeProject: 0,
    };
  },
  computed: {
    ...mapState(useProjectsStore, ["getPortfolios"]),
  },
};
</script>

<style></style>
