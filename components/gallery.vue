<template>
  <div class="fixed h-screen overflow-auto w-full z-90 grid">
    <div class="bg-dark/60 h-18 flex">
      <div
        v-if="navigation"
        class="h-full w-20 bg-dark-100 flex items-center justify-center cursor-pointer"
      >
        <svg class="relative w-12 h-12 rotate-180 text-main-orange">
          <use :href="'/imgs/icons.svg#arrow'"></use>
        </svg>
      </div>
      <div
        class="h-full flex-1 flex gap-3 items-center justify-center cursor-pointer"
      >
        <svg class="relative w-6 h-6 text-main-orange">
          <use :href="'/imgs/icons.svg#img'"></use>
        </svg>
        <!-- <svg class="relative w-8 h-8 text-main-orange">
          <use :href="'/imgs/icons.svg#video'"></use>
        </svg> -->
        <h2 class="text-xl">{{ project.name }} {{ project.title }}</h2>

        <div
          class="inline-block trans3ms h-10 bg-dark-100 rounded-lg flex items-center px-4 gap-2 text-main-orange hover:(font-bold bg-dark-100/80 shadow-lg)"
        >
          <svg class="relative w-5 h-5">
            <use :href="'/imgs/icons.svg#play'"></use>
          </svg>

          <!-- <svg class="relative w-5 h-5">
            <use :href="'/imgs/icons.svg#pause'"></use>
          </svg> -->

          <p>Scroll Down</p>
        </div>
      </div>
      <div
        v-if="navigation"
        class="h-full w-20 bg-dark-100 flex items-center justify-center cursor-pointer"
      >
        <svg class="relative w-12 h-12 text-main-orange">
          <use :href="'/imgs/icons.svg#arrow'"></use>
        </svg>
      </div>
      <div
        class="h-full w-20 bg-red-500 flex items-center justify-center cursor-pointer"
      >
        <svg class="relative w-6 h-6 text-white">
          <use :href="'/imgs/icons.svg#close'"></use>
        </svg>
      </div>
    </div>
    <screen
      class="relative w-8/12 mx-auto my-4"
      :project="project"
      screen-height="40rem"
      :only-screen="true"
      :zoom="false"
    />
  </div>
</template>

<script>
export default {
  props: {
    project: {
      required: true,
    },
    navigation: {
      default: true,
    },
  },
  data() {
    return {
      activeMedia: 0,
    };
  },
};
</script>

<style scoped></style>
