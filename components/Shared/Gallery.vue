<template>
  <div
    class="fixed top-0 left-0 h-screen overflow-auto w-full z-90 flex flex-col bg-black/80"
  >
    <div class="bg-dark/60 h-18 flex">
      <div
        @click="prevMedia"
        v-if="navigation"
        class="h-full w-20 bg-dark-100 flex items-center justify-center cursor-pointer"
      >
        <svg class="relative w-12 h-12 rotate-180 text-main-orange">
          <use :href="'/imgs/icons.svg#arrow'"></use>
        </svg>
      </div>
      <div class="h-full flex-1 flex gap-3 items-center justify-center">
        <svg
          v-if="currentMedia.type === 'img'"
          class="relative w-6 h-6 text-main-orange lg:inline-block xs:hidden"
        >
          <use :href="'/imgs/icons.svg#img'"></use>
        </svg>
        <svg
          v-else
          class="relative w-8 h-8 text-main-orange lg:inline-block xs:hidden"
        >
          <use :href="'/imgs/icons.svg#video'"></use>
        </svg>
        <h2 class="text-xl lg:inline-block xs:hidden">
          {{ project.name }} {{ currentMedia.title }}
        </h2>

        <div
          @click="toggleImgScroll"
          v-if="currentMedia.type === 'img' && currentMedia.scroll"
          class="cursor-pointer inline-block trans3ms h-10 bg-dark-100 rounded-lg flex items-center pl-1 pr-2 gap-1 text-main-orange hover:(font-bold bg-dark-100/80 shadow-lg)"
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
          class="cursor-pointer inline-block trans3ms h-10 bg-dark-100 rounded-lg flex items-center px-4 gap-2 text-main-orange hover:(font-bold bg-dark-100/80 shadow-lg)"
        >
          <svg class="relative w-6 h-6">
            <use
              :href="'/imgs/icons.svg' + `#${videoPlaying ? 'pause' : 'play'}`"
            ></use>
          </svg>

          <p>{{ videoPlaying ? "Pause Video" : "Play Video" }}</p>
        </div>
      </div>
      <div
        v-if="navigation"
        @click="nextMedia"
        class="h-full w-20 bg-dark-100 flex items-center justify-center cursor-pointer"
      >
        <svg class="relative w-12 h-12 text-main-orange">
          <use :href="'/imgs/icons.svg#arrow'"></use>
        </svg>
      </div>
      <div
        @click="hideGallery"
        class="h-full w-20 bg-red-500 flex items-center justify-center cursor-pointer"
      >
        <svg class="relative w-6 h-6 text-white">
          <use :href="'/imgs/icons.svg#close'"></use>
        </svg>
      </div>
    </div>

    <div
      class="items-center gap-2 items-center mt-8 mb-2 justify-center px-6 lg:hidden xs:flex"
    >
      <svg
        v-if="currentMedia.type === 'img'"
        class="relative w-8 h-8 text-main-orange"
      >
        <use :href="'/imgs/icons.svg#img'"></use>
      </svg>
      <svg v-else class="relative w-10 h-10 text-main-orange">
        <use :href="'/imgs/icons.svg#video'"></use>
      </svg>
      <h2 class="text-xl">{{ project.name }} {{ currentMedia.title }}</h2>
    </div>

    <div class="flex lg:(items-center) xs:(mt-4) h-full">
      <Shared-Screen
        ref="screen"
        class="relative lg:w-8/12 sm:w-10/12 xs:w-11/12 mx-auto my-4 justify-center"
        :media="project.media[activeMediaIndex]"
        screen-height="lg:h-160 md:h-140 sm:h-104 xs:h-80"
        :only-screen="true"
        :zoom="false"
        :scroll="imgScrollDown"
        :video-controls="true"
      />
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
