<template>
  <Head>
    <Title>Mehdi Rafiei | Front-end Developer | Home</Title>
  </Head>

  <div class="showup flex px-40 justify-between 2xl:mt-60 xl:mt-46">
    <Home-HelloWorld />

    <Home-Circular />

    <DetailsSec />
  </div>

  <transition name="fadeScale">
    <Gallery v-if="galleryVisible" :project="getPortfolio(activeProjectID)" />
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
    ]),
  },
};
</script>

<style scoped>
. {
}
</style>
