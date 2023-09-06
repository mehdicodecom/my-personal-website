<template>
  <div class="flex flex-col min-h-screen bg-main-dark">
    <coloredCodes />
    <div class="flex flex-col min-h-screen">
      <AppHeader />
      <slot />
      <AppFooter v-if="$route.path === '/contact_me'" />
    </div>
    <Projects
      v-if="$route.path === '/'"
      :projects="getPortfolios(8)"
      :headline="true"
      :home-page="true"
      :slide-auto-play="homeProjectsSwiper.autoPlay"
    />
    <AppFooter v-if="$route.path !== '/contact_me'" />
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
