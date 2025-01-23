<template>
  <Title>Mehdi Rafiei | Home | Front-end Developer</Title>

  <div
    class="flex xl:px-40 lg:(px-34 justify-center text-center items-center) md:(w-10/12 mt-18 mx-auto) xs:(w-full px-2 flex-wrap mt-4) justify-between mt-46"
  >
    <Home-HelloWorld />
  </div>
  <div class="flex mt-28 w-10/12 mx-auto">
    <Slider />
  </div>

  <Shared-Projects
    class="lg:mt-20 sm:mt-26"
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
