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
      default: 2.5,
    },
    slideAutoPlay: {
      default: false,
    },
    currentSliderNum: {
      default: 1,
    },
    projects: {},
    breakpoints: {
      default: {
        320: {
          itemsToShow: 1,
        },

        900: {
          itemsToShow: 1.4,
        },
        1200: {
          itemsToShow: 1.8,
        },
        1400: {
          itemsToShow: 2,
        },
        1600: {
          itemsToShow: 2.2,
        },
        1900: {
          itemsToShow: 2.47,
        },
      },
    },
  },
  data() {
    return {
      width: null,
      nextDisabled: false,
      prevDisabled: true,
    };
  },
  computed: {
    currentSlider() {
      return this.$refs[`slider${this.currentSliderNum}`];
    },
    settings() {
      if (process.client) {
        let width = window.innerWidth;
        let breakpoint = 1900;
        switch (true) {
          case width >= 1600 && width < 1900: {
            breakpoint = 1600;
            break;
          }
          case width >= 1400 && width < 1600: {
            breakpoint = 1400;
            break;
          }
          case width >= 1200 && width < 1400: {
            breakpoint = 1200;
            break;
          }
          case width >= 900 && width < 1200: {
            breakpoint = 900;
            break;
          }
          case width >= 320 && width < 900: {
            breakpoint = 320;
            break;
          }
        }
        return {
          itemsToShow: this.breakpoints[breakpoint].itemsToShow,
        };
      }
    },
  },
  methods: {
    ...mapActions(useProjectsStore, ["showGallery"]),
    prevSlide() {
      if (this.currentSlider.data.currentSlide.value !== 0)
        this.currentSlider.prev();
    },
    nextSlide() {
      if (
        this.currentSlider.data.currentSlide.value !==
        this.currentSlider.data.maxSlide.value
      )
        this.currentSlider.next();
    },
    sliderChanged() {
      let maxSlide = this.currentSlider.data.maxSlide.value;
      setTimeout(() => {
        this.prevDisabled = this.currentSlider.data.currentSlide.value === 0;
        this.nextDisabled =
          this.currentSlider.data.currentSlide.value === maxSlide;
      }, 50);
    },
    goToLink(link) {
      this.$router.push({ path: link });
    },
  },
};
</script>

<template>
  <section
    :class="[
      'relative flex-1',
      { 'xl:px-12 lg:pl-34 xs:pl-14 xs:(pl-6 mt-30) mb-8 ': homePage },
    ]"
    v-if="!portfoliosPage"
  >
    <div class="flex items-center justify-between mr-10" v-if="headline">
      <h2 class="relative text-left">
        <span class="2xl:text-5xl xs:text-4xl tracking-widest">Latest</span>
        <span class="2xl:text-3xl xs:text-2xl font-bold text-main-orange">
          Projects
        </span>
      </h2>

      <nuxt-link
        :to="{ path: '/portfolios' }"
        class="flex items-center gap-1 text-lg transition duration-200 text-main-orange/80 hover:text-main-orange font-bold"
      >
        <span class="sm:block xs:(hidden)">View More Projects</span>
        <span class="sm:hidden xs:(block)">View More</span>
        <svg :class="['relative w-10 h-10 ']">
          <use :href="'/imgs/icons.svg' + `#arrow`"></use>
        </svg>
      </nuxt-link>
    </div>
    <div
      :class="[
        'flex w-full',
        { 'mr-10 mt-4 mb-8': aboutPage },
        { 'sm:(my-10) xs:(mt-4 mb-6)': homePage },
      ]"
    >
      <swipeCarousel
        @slide-start="sliderChanged"
        :ref="`slider${currentSliderNum}`"
        :breakpoints="breakpoints"
        snap-align="start"
        v-bind="settings"
        class="w-full"
      >
        <swipeSlide
          v-for="project in projects"
          :key="project.id"
          class="relative border-r-20 border-transparent"
        >
          <div
            :class="[
              'flex flex-col gap-6 justify-center items-center bg-dark rounded-lg py-8',
              homePage
                ? 'shadow-lg sm:(pr-15 pl-15) xs:(pr-4 pl-4)'
                : 'border border-neutral-700',
              { 'xs:(pr-4 pl-4)': aboutPage },
            ]"
          >
            <a
              @click.prevent="
                $router.push({ path: `/project/${project.name}` })
              "
              class="absolute z-30 w-full h-full cursor-pointer"
            >
            </a>
            <Shared-Screen
              @click="showGallery(project.id)"
              :class="[
                'relative z-50',
                { 'md:w-140 sm:w-116 xs:w-60': aboutPage },
                { 'md:w-140 sm:w-130 xs:w-100': homePage },
              ]"
              :about-page="true"
              :media="project.media[project.mainMedia]"
            />
            <section
              class="flex flex-col gap-2 mt-2 flex-wrap items-center justify-center w-full"
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


            </section>
          </div>
        </swipeSlide>
      </swipeCarousel>
    </div>
  </section>
  <section
    class="xl:(mt-26 pl-24 pr-22) lg:(pl-17 pr-14 w-11/12 mx-auto) sm:(pl-16 pr-14) xs:(px-10 mt-16 w-full)"
    v-else
  >
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
        class="relative bg-dark rounded-lg flex lg:(flex-row gap-26) md:(pr-16 pl-18) shadow-lg xs:(py-8 pr-4 pl-4 flex-col gap-4 items-center)"
      >
        <nuxt-link
          :to="{ path: `/project/${project.name}` }"
          class="absolute z-30 w-full h-full"
        >
        </nuxt-link>
        <Shared-Screen
          @click="showGallery(project.id)"
          class="relative z-50 xl:min-w-140 lg:(min-w-120 mx-initial) md:(w-140 mx-auto) sm:w-110 xs:(w-100)"
          :media="project.media[project.mainMedia]"
        />
        <section
          class="flex flex-col gap-2 mt-2 flex-wrap items-start lg:items-start xs:(items-center)"
        >
          <div class="loading textLoading inline-block">
            <span
              class="inline-block font-medium text-2xl lg:text-left xs:text-center"
            >
              <span class="text-main-orange mr-2">{{ project.name }}</span>
              <span>{{ project.title }}</span>
            </span>
          </div>
          <div class="loading textLoading inline-block">
            <p class="text-lg lg:text-left xs:text-center">
              {{ project.description }}
            </p>
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
<style>
. {
}
</style>
