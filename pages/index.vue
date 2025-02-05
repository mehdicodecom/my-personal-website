<template>
  <Title>Mehdi Rafiei | Home | Front-end Developer</Title>

  <div
    class="flex lg:(justify-center text-center items-center) mt-8"
  >
    <Home-HelloWorld />
  </div>
  <div class="flex mt-10 w-full mx-auto">
    <Slider />
  </div>

  <Shared-Projects
    class="lg:pt-28 sm:pt-26 xl:px-20 overflow-hidden w-full lg:pl-34 xs:pl-14 xs:(pl-6 pt-30)"
    :projects="getPortfolios(8)"
    :headline="true"
    :home-page="true"
  />

  <transition name="fadeScale">
    <Shared-Gallery
      v-if="galleryVisible"
      :project="getPortfolio(activeProjectID)"
    />
  </transition>
</template>

<script>
import { mapState } from "pinia";
import useProjectsStore from "@/stores/projects";
export default {
  computed: {
    ...mapState(useProjectsStore, [
      "galleryVisible",
      "activeProjectID",
      "getPortfolio",
      "getPortfolios",
    ]),
  },
};
</script>
