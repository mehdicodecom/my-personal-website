<template>
  <section
    :class="['relative flex-1', { 'showup pl-40 mb-20': homePage }]"
    v-if="!portfoliosPage"
  >
    <div class="flex items-center justify-between mr-10" v-if="headline">
      <h2 class="relative text-left">
        <span class="text-5xl tracking-widest">Latest</span>
        <span class="text-3xl font-bold text-main-orange"> Projects </span>
      </h2>

      <nuxt-link
        :to="{ path: '/portfolios' }"
        class="flex items-center gap-1 text-lg text-main-orange font-bold"
      >
        View More Projects

        <svg :class="['relative w-10 h-10 ']">
          <use :href="'/imgs/icons.svg' + `#arrow`"></use>
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
        :breakpoints="breakpoints"
        :loop="false"
        :autoplay="slideAutoPlay"
      >
        <SwiperSlide
          v-for="project in projects"
          :key="project.id"
          :class="[
            'relative bg-dark rounded-lg flex flex-col gap-6 py-8 pr-18 pl-18 justify-center items-center',
            homePage ? 'shadow-lg' : 'border border-neutral-700',
          ]"
        >
          <nuxt-link
            :to="{ path: `/project/${project.name}` }"
            class="absolute z-40 w-full h-full"
          >
          </nuxt-link>
          <screen
            @click="showGallery(project.id)"
            class="relative z-50 w-140"
            :media="project.media[project.mainMedia]"
          />
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
                  :src="`/imgs/skills/${skill}.svg`"
                  alt=""
                  class="w-8 h-8"
                  :title="skill"
                />
              </li>
            </ul>

            <nuxt-link
              v-if="showDetailsButtom"
              :to="{ path: `/project/${project.name}` }"
              class="relative z-50 bg-main-orange w-full flex items-center justify-center font-medium text-lg h-12 rounded-md mt-8 hover:bg-main-orange/80"
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
          <use :href="'/imgs/icons.svg' + `#arrow`"></use>
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
          <use :href="'/imgs/icons.svg' + `#arrow`"></use>
        </svg>
      </button>
    </div>
  </section>
  <section class="pl-42 pr-40 mt-26" v-else>
    <div class="relative text-3xl font-bold">
      <span
        class="updown inline-block absolute -top-1 -left-2.5 w-14 h-14 bg-main-orange rounded-full"
      ></span>
      <div class="loading textLoading inline-block">
        <span class="relative inline-block z-20"
          >Projects
          <span class="text-lg">({{ projects?.length }} items)</span></span
        >
      </div>
    </div>
    <section class="flex flex-col gap-6 mt-10">
      <div
        v-for="project in projects"
        :key="project.id"
        class="relative bg-dark rounded-lg flex gap-26 py-8 pr-18 pl-18 shadow-lg"
      >
        <nuxt-link
          :to="{ path: `/project/${project.name}` }"
          class="absolute z-30 w-full h-full"
        >
        </nuxt-link>
        <screen
          @click="showGallery(project.id)"
          class="relative z-50 w-140"
          :media="project.media[project.mainMedia]"
        />
        <section class="flex flex-col gap-2 mt-2 flex-wrap items-start">
          <div class="loading textLoading inline-block">
            <span class="inline-block font-medium text-2xl">
              <span class="text-main-orange mr-2">{{ project.name }}</span>
              <span>{{ project.title }}</span>
            </span>
          </div>
          <div class="loading textLoading inline-block">
            <p class="text-lg">{{ project.description }}</p>
          </div>

          <div class="loading textLoading inline-block">
            <p class="text-main-green font-bold mt-6">Technologies</p>
          </div>
          <div class="loading textLoading inline-block">
            <ul class="flex gap-4 mt-2">
              <li v-for="skill in project.used">
                <img
                  :src="`/imgs/skills/${skill}.svg`"
                  alt=""
                  class="w-8 h-8"
                  :title="skill"
                />
              </li>
            </ul>
          </div>

          <nuxt-link
            v-if="showDetailsButtom"
            :to="{ path: `/project/${project.name}` }"
            class="relative z-40 bg-main-orange w-80 flex items-center justify-center font-medium text-lg h-12 rounded-md mt-8 hover:bg-main-orange/80"
            >More Details</nuxt-link
          >
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import { mapActions } from "pinia";
import useProjectsStore from "@/stores/projects";
export default {
  props: {
    showDetailsButtom: { default: true },
    headline: { default: false },
    homePage: { default: false },
    aboutPage: { default: false },
    portfoliosPage: { default: false },
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
    breakpoints: {
      default: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        800: {
          slidesPerView: 1.2,
          spaceBetween: 12,
        },
        900: {
          slidesPerView: 1.4,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 2.2,
        },
        1900: {
          slidesPerView: 2.5,
        },
      },
    },
  },
  data() {
    return {
      nextDisabled: false,
      prevDisabled: true,
    };
  },
  methods: {
    ...mapActions(useProjectsStore, ["showGallery"]),
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
      let currentSwlider = `.sw${this.currentSlideNum}`;
      let nextbtn = document.querySelector(
        `${currentSwlider} .swiper-button-next`
      );
      this.nextDisabled = nextbtn.classList.contains("swiper-button-disabled");
      let prevbtn = document.querySelector(
        `${currentSwlider} .swiper-button-prev`
      );
      this.prevDisabled = prevbtn.classList.contains("swiper-button-disabled");
    },
  },
};
</script>
<style>
 {
}
</style>
