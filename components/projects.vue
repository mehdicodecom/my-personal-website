<template>
  <section :class="['relative flex-1', { 'showup pl-40 mb-20': homePage }]">
    <div class="flex items-center justify-between mr-10" v-if="headline">
      <h2 class="relative text-left">
        <span class="text-5xl tracking-widest">Latest</span>
        <span class="text-3xl font-bold text-main-orange"> Projects </span>
      </h2>

      <nuxt-link
        :to="{ path: '/' }"
        class="flex items-center gap-1 text-lg text-main-orange font-bold"
      >
        View More Projects

        <svg :class="['relative w-10 h-10 ']">
          <use :href="'./imgs/icons.svg' + `#arrow`"></use>
        </svg>
      </nuxt-link>
    </div>
    <div
      :class="['flex', { 'mr-10 mt-4 mb-8': aboutPage }, { 'my-10': homePage }]"
    >
      <Swiper
        :class="'sw' + currentSlideNum"
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :slides-per-view="slidesPerView"
        :navigation="true"
        :space-between="slideSpaceBetween"
        @slideChange="SwitchSlideNavStates"
        :loop="false"
        :autoplay="slideAutoPlay"
      >
        <SwiperSlide
          v-for="project in projects"
          :class="[
            'relative bg-dark rounded-lg flex flex-col gap-6 py-8 pr-18 pl-18 justify-center items-center',
            homePage ? 'shadow-lg' : 'border border-neutral-700',
          ]"
        >
          <nuxt-link :to="{ path: '/' }" class="absolute z-90 w-full h-full">
          </nuxt-link>
          <screen class="w-140" :project="project" />
          <section
            class="flex flex-col gap-2 mt-2 flex-wrap items-center justify-center"
          >
            <p class="font-medium text-2xl">
              <span class="text-main-orange">{{ project.name }}</span>
              {{ project.title }}
            </p>
            <p class="text-lg">{{ project.description }}</p>

            <ul class="flex gap-4 mt-6">
              <li v-for="skill in project.used">
                <img
                  :src="`imgs/skills/${skill}.svg`"
                  alt=""
                  class="w-8 h-8"
                  :title="skill"
                />
              </li>
            </ul>

            <nuxt-link
              v-if="showDetailsButtom"
              :to="{ path: '/' }"
              class="bg-main-orange w-full flex items-center justify-center font-medium text-lg h-12 rounded-md mt-8"
              >More Details</nuxt-link
            >
          </section>
        </SwiperSlide>
        <SwiperControls
          ref="swiperSlide"
          v-if="projects?.length > slidesPerView"
        />
      </Swiper>
    </div>
    <div
      v-if="projects?.length > slidesPerView"
      :class="['flex justify-center gap-3', { 'mr-10': aboutPage }]"
    >
      <button
        @click="prevSlide"
        :class="[
          'bg-dark-100 rounded-full',
          { 'cursor-not-allowed': prevDisabled },
        ]"
      >
        <svg
          :class="[
            'relative w-14 h-14 transform rotate-180',
            prevDisabled ? ' text-stone-500' : 'text-orange',
          ]"
        >
          <use :href="'./imgs/icons.svg' + `#arrow`"></use>
        </svg>
      </button>
      <button
        @click="nextSlide"
        :class="[
          'bg-dark-100 rounded-full',
          { 'cursor-not-allowed': nextDisabled },
        ]"
      >
        <svg
          :class="[
            'relative w-14 h-14',
            nextDisabled ? 'text-stone-500' : 'text-orange',
          ]"
        >
          <use :href="'./imgs/icons.svg' + `#arrow`"></use>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    showDetailsButtom: { default: true },
    headline: { default: false },
    homePage: { default: false },
    aboutPage: { default: false },
    slidesPerView: {
      default: "2.5",
    },
    slideSpaceBetween: {
      default: "32",
    },
    slideAutoPlay: {
      default: false,
    },
    projects: {},
    currentSlideNum: {
      default: 1,
    },
  },
  data() {
    return {
      nextDisabled: false,
      prevDisabled: true,
    };
  },
  methods: {
    nextSlide() {
      if (!this.nextDisabled) {
        this.$refs.swiperSlide.next();
        this.SwitchSlideNavStates();
      }
    },
    prevSlide() {
      if (!this.prevDisabled) {
        this.$refs.swiperSlide.prev();
        this.SwitchSlideNavStates();
      }
    },

    SwitchSlideNavStates() {
      let nextbtn = document.querySelector(
        `.sw${this.currentSlideNum} .swiper-button-next`
      );
      this.nextDisabled = nextbtn.classList.contains("swiper-button-disabled");
      let prevbtn = document.querySelector(
        `.sw${this.currentSlideNum} .swiper-button-prev`
      );
      this.prevDisabled = prevbtn.classList.contains("swiper-button-disabled");
    },
  },
};
</script>

<style></style>
