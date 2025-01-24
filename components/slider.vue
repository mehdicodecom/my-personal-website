<template>
  <div class="swiper-container transition duration-300" :class="swiperInitialized ? 'opacity-100' : 'opacity-0'">
    <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="5"
        :autoplay="true"
        :speed="500"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :observe="true"
        :observe-parents="true"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
        :initial-slide="3"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide v-for="post in posts" :key="post.img">
        <img class="rounded-xl w-full h-full" :src="`/imgs/blog/${post.img}`" alt="test">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      posts: [
        { img: "js.jpg",title:'test' },
        { img: "vue.png" },
        { img: "ai.jpg" },
        { img: "nuxt.jpg" },
        { img: "css.png" },
        { img: "ai.jpg" },
        { img: "nuxt.jpg" },
        { img: "css.png" },
      ],
      swiperInitialized: false, // New state to track Swiper initialization
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(()=>{
        this.swiperInitialized = true;
      },50)
    });
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination, Autoplay],
    };
  },
};
</script>

<style>
.swiper-container {
  width: 100%;
  display:flex;
  min-height:318px;
}


</style>
