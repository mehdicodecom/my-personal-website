<template>
  <div
    class="fixed top-0 left-0 h-screen overflow-auto w-full z-90 flex flex-col bg-black/80"
  >
    <div class="bg-dark/60 h-24 flex">
      <div class="h-full flex-1 flex gap-3 items-center justify-center px-4">
        <svg
          v-if="currentMedia.type === 'img'"
          class="relative w-6 h-6 text-main-orange inline-block"
        >
          <use :href="'/imgs/icons.svg#img'"></use>
        </svg>
        <svg v-else class="relative w-8 h-8 text-main-orange inline-block">
          <use :href="'/imgs/icons.svg#video'"></use>
        </svg>
        <NuxtLink
          @click.prevent="
            hideGallery();
            $router.push({ path: `/project/${project.name}` });
          "
          class="cursor-pointer text-xl lg:inline-block hover:text-main-orange transition"
        >
          {{ project.name }} {{ currentMedia.title }}
        </NuxtLink>

        <div
          @click="toggleImgScroll"
          v-if="currentMedia.type === 'img' && currentMedia.scroll"
          class="cursor-pointer inline-block trans3ms h-10 min-w-max text-dark-100 font-semibold rounded-lg flex items-center pl-1 pr-2 bg-main-orange hover:(bg-main-orange/80 shadow-lg)"
        >
          <svg
            :class="[
              'relative w-8 h-8',
              imgScrollDown ? '-rotate-90' : 'rotate-90',
            ]"
          >
            <use :href="'/imgs/icons.svg#arrow'"></use>
          </svg>

          <p>{{ imgScrollDown ? "Scroll Up" : "Scroll Down" }}</p>
        </div>

        <div
          @click="toggleVideo($refs.screen.$refs.video)"
          v-if="currentMedia.type === 'video'"
          class="cursor-pointer inline-block trans3ms min-w-max h-10 text-dark-100 rounded-lg flex items-center px-4 gap-2 bg-main-orange font-bold hover:(bg-main-orange/80 shadow-lg)"
        >
          <svg class="relative w-5 h-5">
            <use
              :href="'/imgs/icons.svg' + `#${videoPlaying ? 'pause' : 'play'}`"
            ></use>
          </svg>

          <p>{{ videoPlaying ? "Pause Video" : "Play Video" }}</p>
        </div>
      </div>
    </div>

    <div
      class="relative flex lg:(items-center) xs:(mt-4) lg:h-full lg:pt-0 pt-12"
    >
      <Shared-Screen
        ref="screen"
        :class="['relative  mx-auto my-4 justify-center',
        currentMedia.mobile && currentMedia.type !== 'video' ? 'sm:w-[400px] w-[300px]' : 'lg:w-8/12 sm:w-10/12 xs:w-11/12']"
        :media="currentMedia"
        :screen-height="currentMedia.mobile && currentMedia.type !== 'video' ? 'lg:h-160 h-[400px]': 'lg:h-160 md:h-140 sm:h-104 xs:h-80'"
        :only-screen="true"
        :zoom="false"
        :scroll="imgScrollDown"
        :video-controls="true"
      >
        <template v-if="navigation">
          <div
            @click="prevMedia"
            class="group absolute z-20 lg:(-left-26 w-18 h-18) md:(-left-18 w-14 h-14 -left-6) -left-3.5 w-10 h-10 top-1/2 -translate-y-1/2 md:bg-dark-100 bg-main-orange transition md:hover:bg-dark-300 flex items-center justify-center cursor-pointer rounded-full"
          >
            <svg
              class="relative md:(w-14 h-14) w-12 h-12 rotate-180 md:text-white text-dark-100 md:group-hover:text-main-orange transition"
            >
              <use :href="'/imgs/icons.svg#arrow'"></use>
            </svg>
          </div>
          <div
            @click="nextMedia"
            class="group lg:(-right-26 w-18 h-18) z-20 md:(-right-18 w-14 h-14 -right-6) -right-3.5 w-10 h-10 absolute top-1/2 -translate-y-1/2 rounded-full md:bg-dark-100 bg-main-orange transition md:hover:bg-dark-300 flex items-center justify-center cursor-pointer"
          >
            <svg
              class="relative md:(w-14 h-14) w-12 h-12 md:text-white text-dark-100 md:group-hover:text-main-orange transition"
            >
              <use :href="'/imgs/icons.svg#arrow'"></use>
            </svg>
          </div>
        </template>

        <div
          @click="hideGallery"
          class="absolute z-20 sm:(w-12 h-12 -right-6 -top-6) w-10 h-10 -right-3.5 mx-auto -top-4 rounded-full bg-red-500 flex items-center justify-center cursor-pointer transition hover:bg-red-600"
        >
          <svg class="relative sm:(w-5 h-5) w-5 h-5 text-white">
            <use :href="'/imgs/icons.svg#close'"></use>
          </svg>
        </div>
      </Shared-Screen>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useProjectsStore from "@/stores/projects";
export default {
  props: {
    project: {
      required: true,
    },
    navigation: {
      default: true,
    },
  },
  computed: {
    ...mapState(useProjectsStore, [
      "activeMediaIndex",
      "imgScrollDown",
      "videoPlaying",
    ]),
    currentMedia() {
      return this.project.media[this.activeMediaIndex];
    },
  },
  methods: {
    ...mapActions(useProjectsStore, [
      "hideGallery",
      "nextMedia",
      "prevMedia",
      "toggleImgScroll",
      "toggleVideo",
    ]),
  },
};
</script>

<style scoped></style>
