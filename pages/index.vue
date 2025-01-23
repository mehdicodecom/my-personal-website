<template>
  <Title>Mehdi Rafiei | Home | Front-end Developer</Title>

  <div
    class="flex xl:px-40 lg:(px-34 w-full flex-nowrap) md:(w-10/12 mt-32 mx-auto) xs:(w-full px-2 flex-wrap mt-4) justify-between mt-46"
  >
    <Home-HelloWorld />

    <Home-Circular class="xs:(order-1 mx-auto)" />

    <Home-Details />
  </div>

  <Shared-Projects
    class="lg:mt-30 sm:mt-26"
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
