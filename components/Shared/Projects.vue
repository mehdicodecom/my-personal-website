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
        1300: {
          itemsToShow: 1.8,
        },
        1400: {
          itemsToShow: 2,
        },
        1600: {
          itemsToShow: 2.2,
        },
        1900: {
          itemsToShow: 3,
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
          itemsToShow: this.breakpoints[breakpoint]?.itemsToShow,
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
  <section class="relative flex-1" v-if="!portfoliosPage">
    <div class="flex items-center justify-between mr-10" v-if="headline">
      <h2 class="relative text-left">
        <span
          class="updown inline-block absolute -top-1 -left-2.5 w-14 h-14 bg-main-orange rounded-full"
        ></span>
        <span class="loading 2xl:text-5xl xs:text-4xl tracking">Latest</span>
        <span
          class="loading 2xl:text-4xl xs:text-2xl font-bold text-main-orange"
        >
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
        'relative flex flex-wrap w-full',
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
              'flex flex-col gap-4 justify-center items-center rounded-lg py-5',
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
                { 'md:w-110 sm:w-130 w-70': aboutPage },
                { 'md:w-110 sm:w-130 xs:w-100': homePage },
              ]"
              :about-page="true"
              screen-height="sm:h-60 h-50"
              :media="project.media[project.mainMedia]"
              :enable-hover-effects="true"
            />
            <section
              class="flex flex-col gap-2 flex-wrap items-center justify-center w-full px-12"
            >
              <p
                :class="[
                  'font-medium ',
                  aboutPage ? 'text-lg sm:text-xl' : 'text-2xl',
                ]"
              >
                <span class="text-main-orange">{{ project.name }}</span>
                {{ project.title }}
              </p>
              <p class="opacity-70">{{ project.description }}</p>
            </section>
          </div>
        </swipeSlide>
      </swipeCarousel>
      <div class="flex gap-6 w-full justify-center mt-2 items-center md:mt-0">
        <button
          @click="prevSlide"
          :class="[
            ' lg:(absolute -left-6 top-1/2 transform -translate-y-1/2)  bg-dark-50 transition duration-200 rounded-full',
            prevDisabled
              ? 'bg-opacity-60 cursor-not-allowed'
              : 'bg-opacity-90 hover:bg-opacity-100',
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
            'lg:(absolute right-0 bg-opacity-90 top-1/2 transform -translate-y-1/2) bg-opacity-90 bg-dark-50 bg-opacity-50 transition duration-200 rounded-full',
            nextDisabled ? 'cursor-not-allowed' : 'hover:bg-opacity-100',
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
    </div>
  </section>
  <section
    class="xl:(mt-16 pl-24 pr-22) lg:(pl-17 pr-14 ) sm:(pl-16 pr-14) xs:(px-10 mt-16 w-full)"
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
    <section class="grid lg:grid-cols-2 gap-6 mt-10">
      <div
        v-for="project in projects"
        :key="project.id"
        class="relative bg-dark/70 rounded-lg flex lg:(flex-col gap-8) md:(pr-16 pl-18) shadow-lg xs:(py-8 pr-4 pl-4 flex-col gap-4 items-center)"
      >
        <nuxt-link
          :to="{ path: `/project/${project.name}` }"
          class="absolute z-30 w-full h-full"
        >
        </nuxt-link>
        <Shared-Screen
          @click="showGallery(project.id)"
          :media="project.media[project.mainMedia]"
          :enable-hover-effects="true"
          class="relative z-50 xl:min-w-120 xl:w-140 lg:(min-w-116 w-116 mx-initial) md:(w-140 mx-auto) sm:w-110 xs:(w-86)"
          screen-height="xl:h-74 lg:h-66 md:h-74 h-70"
        />
        <section
          class="flex flex-col gap-2 mt-2 flex-wrap items-start lg:items-center xs:(items-center)"
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
            <p class="text-lg text-center hidden md:block">
              {{ project.description }}
            </p>
          </div>

          <!--          <div class="loading textLoading inline-block">-->
          <!--            <p class="text-main-green font-bold mt-6">Technologies</p>-->
          <!--          </div>-->
          <!--          <div class="loading textLoading inline-block">-->
          <!--            <ul class="flex gap-4 mt-2">-->
          <!--              <li v-for="skill in project.used">-->
          <!--                <img-->
          <!--                  :src="`/imgs/skills/${skill}.svg`"-->
          <!--                  alt=""-->
          <!--                  class="w-8 h-8"-->
          <!--                  :title="skill"-->
          <!--                />-->
          <!--              </li>-->
          <!--            </ul>-->
          <!--          </div>-->
        </section>
      </div>
    </section>
  </section>
</template>
<style>
.carousel__viewport {
  border-radius: 8px;
}
</style>
