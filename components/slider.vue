<template>
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
      :pagination="true"
      :modules="modules"
      class="mySwiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide v-for="post in posts">
      <img class="rounded-xl w-full h-full" :src="`/imgs/blog/${post.img}`" alt="test">
    </swiper-slide>

  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import {EffectCoverflow, Pagination, Autoplay} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      posts: [
        {
          img: 'js.jpg'
        },
        {
          img: 'vue.png'
        },
        {
          img: 'ai.jpg'
        },
        {
          img: 'nuxt.jpg'
        },
        {
          img: 'css.png'
        },
                  {
          img: 'ai.jpg'
        },
        {
          img: 'nuxt.jpg'
        },
        {
          img: 'css.png'
        }
      ]
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      modules: [EffectCoverflow, Pagination, Autoplay],
      onSwiper,
      onSlideChange,
    };
  },
};
</script>