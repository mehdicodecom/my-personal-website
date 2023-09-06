<template>
  <Head>
    <Title>Mehdi Rafiei | Front-end Developer | Home</Title>
  </Head>

  <div
    :class="[
      'flex px-40 justify-between 2xl:mt-60 xl:mt-46',
      { showup: showupLoadTime === 0 },
    ]"
  >
    <Home-HelloWorld />

    <Home-Circular />

    <DetailsSec />
  </div>

  <transition name="fadeScale">
    <Gallery v-if="galleryVisible" :project="getPortfolio(activeProjectID)" />
  </transition>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import useProjectsStore from "@/stores/projects";
import useMainStore from "@/stores/main";
export default {
  computed: {
    ...mapState(useProjectsStore, [
      "galleryVisible",
      "activeProjectID",
      "getPortfolio",
    ]),
    ...mapWritableState(useMainStore, ["showupLoadTime"]),
  },
  beforeMount() {
    if (this.showupLoadTime < 3) this.showupLoadTime++;
  },
};
</script>

<style scoped>
. {
}
</style>
