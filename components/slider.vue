<template>
  <div
    class="swiper-container transition duration-300"
    :class="swiperInitialized ? 'opacity-100' : 'opacity-0'"
  >
    <swiper
      :effect="sliderConfig.effect"
      :grabCursor="sliderConfig.grabCursor"
      :centeredSlides="sliderConfig.centeredSlides"
      :slidesPerView="sliderConfig.slidesPerView"
      :autoplay="sliderConfig.autoplay"
      :speed="sliderConfig.speed"
      :coverflowEffect="sliderConfig.coverflowEffect"
      :loop="sliderConfig.loop"
      :breakpoints="breakpoints"
      :observe="sliderConfig.observe"
      :observe-parents="sliderConfig.observeParents"
      :pagination="sliderConfig.pagination"
      :modules="modules"
      class="mySwiper"
      :initial-slide="sliderConfig.initialSlide"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(post, i) in posts"
        :key="post.img"
        class="group overflow-hidden"
      >
        <NuxtLink to="/blog" class="relative">
          <img
            class="rounded-xl w-full h-full transition duration-800 group-hover:(scale-110)"
            :src="`/imgs/blog/${post.img}`"
            alt="test"
          />

          <div
            class="absolute text-white top-3 left-3 flex items-center gap-2 bg-black bg-opacity-20 rounded-lg p-1"
          >
            <svg class="w-5 h-5 select-none">
              <use href="/imgs/icons.svg#clock"></use>
            </svg>
            <span class="text-sm">{{ post.date }}</span>
          </div>
          <div
            class="absolute inline-flex justify-center items-center w-14 h-14 rounded-full bg-black bg-opacity-70 top-1/2 transition duration-400 transform opacity-0 -translate-y-30 scale-150 right-0 left-0 mx-auto group-hover:(-translate-y-1/2 opacity-100 scale-100)"
          >
            <svg class="w-6 h-6 text-white select-none">
              <use href="/imgs/icons.svg#link"></use>
            </svg>
          </div>
          <div
            class="p-4 transition duration-200 pb-8 flex flex-col gap-2 backdrop-blur-[6px] bg-black w-full absolute bottom-0 rounded-xl bg-opacity-15 group-hover:bg-opacity-70"
            :class="activeIndex === i && 'bg-opacity-50'"
          >
            <h2 class="text-lg text-gray-100">{{ post.title }}</h2>
            <p class="text-gray-100 text-md opacity-70">
              {{ truncatedDescription(post.description) }}
            </p>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    posts: {
      type: Array,
      required: true,
      validator: (posts) =>
        posts.every(
          (post) =>
            typeof post.img === "string" &&
            typeof post.title === "string" &&
            typeof post.description === "string" &&
            typeof post.date === "string",
        ),
    },
    breakpoints: {
      type: Object,
      default: () => ({
        650: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
        1500: { slidesPerView: 4.1 },
      }),
    },
    sliderConfig: {
      type: Object,
      default: () => ({
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        speed: 1200,
        coverflowEffect: {
          rotate: 45,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        loop: true,
        observe: true,
        observeParents: true,
        pagination: true,
        initialSlide: 0,
      }),
    },
  },
  data() {
    return {
      activeIndex: 0,
      swiperInitialized: false,
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange(swiper) {
      this.activeIndex = swiper?.activeIndex;
      console.log(swiper, "slide change");
    },
    truncatedDescription(description, limit = 100) {
      if (description?.length > limit) {
        return description.substring(0, limit) + "...";
      }
      return description;
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.swiperInitialized = true;
      }, 50);
    });
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination, Autoplay, Navigation],
    };
  },
};
</script>

<style>
.swiper-container {
  width: 100%;
  display: flex;
}

.swiper-pagination-bullet {
  background: white;
}
</style>
