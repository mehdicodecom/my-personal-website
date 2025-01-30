<template>
  <div class="swiper-container transition duration-300" :class="swiperInitialized ? 'opacity-100' : 'opacity-0'">
    <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="1.5"
        :autoplay="{
          delay:5000,
          disableOnInteraction: true,
        }"
        :speed="1200"
        :coverflowEffect="{
          rotate: 45,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :breakpoints="breakpoints"
        :observe="true"
        :observe-parents="true"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
        :initial-slide="2"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(post,i) in posts" :key="post.img" class="group overflow-hidden">
        <NuxtLink to="/blog" class="relative">
          <img class="rounded-xl w-full h-full transition duration-800 group-hover:(scale-110)" :src="`/imgs/blog/${post.img}`" alt="test">

          <div class="absolute text-white top-3 left-3 flex items-center gap-2 bg-black bg-opacity-20 rounded-lg p-1">
            <svg class="w-5 h-5 select-none">
              <use href="/imgs/icons.svg#clock"></use>
            </svg>

            <span class="text-sm">{{ post.date}}</span>
          </div>
          <div
              class="absolute inline-flex justify-center items-center w-14 h-14 rounded-full bg-black bg-opacity-70 top-1/2 transition duration-400 transform opacity-0 -translate-y-30 scale-150 right-0 left-0 mx-auto group-hover:(-translate-y-1/2 opacity-100 scale-100)">
            <svg class="w-6 h-6 text-white select-none ">
              <use href="/imgs/icons.svg#link"></use>
            </svg>
          </div>
          <div
              class="p-4 transition duration-200 pb-8 flex flex-col gap-2 backdrop-blur-[6px] bg-black w-full absolute bottom-0 rounded-xl bg-opacity-15 group-hover:bg-opacity-70"
              :class="activeIndex === i && 'bg-opacity-50'"
          >
            <h2 class="text-lg text-gray-100">{{ post.title }}</h2>
            <p class="text-gray-100 text-md opacity-70">{{ truncatedDescription(post.description) }}</p>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {EffectCoverflow, Pagination, Autoplay, Navigation} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      activeIndex: 3,
      breakpoints: {
        650: {
          slidesPerView: 2
        },
        1100: {
          slidesPerView: 3
        },
        1500: {
          slidesPerView: 4.1
        }
      },
      posts: [
        {
          img: "js.jpg",
          title: "The Art of Writing Clean and Maintainable JavaScript Code",
          categories: ['programming', 'frontend', 'javascript'],
          description:
              `Writing clean and maintainable JavaScript code is essential for building scalable, bug-free applications. In this article, we'll explore best practices, design patterns, and techniques that will help you write code that's easy to understand, test, and maintain over time. Whether you're a beginner or an experienced developer, mastering these principles will improve the quality and longevity of your projects.`,
          date: 'January 29, 2025',
        },
        {
          img: "programming.jpg",
          title: "From Good to Great: Developer Growth Tips",
          categories: ['programming'],
          description: `
          Becoming a great developer isn’t just about writing code—it’s about thinking critically, solving problems efficiently, and continuously improving. In this article, we’ll explore key habits, mindset shifts, and practical strategies that can help you level up your development skills and stand out in the tech world. 🚀`,
          date: 'January 29, 2025',
        },
        {
          img: "react.jpg",
          title: "From Zero to React Hero: A Beginner's Guide",
          categories: ['programming', 'frontend', 'javascript', 'react'],
          description:
              `React is one of the most popular JavaScript libraries for building user interfaces, but getting started can be intimidating. In this guide, we’ll walk you through the basics of React, from understanding components to managing state and handling events. By the end, you'll have the foundation you need to start building your own React applications with confidence.`,
          date: 'January 30, 2025',
        },
        {
          img: "ai.jpg",
          title: "Enhancing User Experience with AI in Front",
          categories: ['programming', 'ai', 'frontend'],
          description:
              `AI is transforming the way users interact with web applications, providing smarter, more personalized experiences. In this article, we’ll explore how to integrate AI-driven features such as chatbots, recommendation systems, and dynamic content generation into your front-end projects. Learn how to use AI tools to create intuitive, engaging UIs that adapt to user behavior and preferences.`,
          date: 'January 30, 2025',
        },
        {
          img: "team.jpg",
          title: "Tips for Successful Teamwork in Web Development",
          categories: ['programming', 'ai', 'frontend'],
          description:
              `Effective teamwork is essential for building successful web applications. In this article, we’ll explore practical tips and strategies for fostering collaboration between front-end, back-end, and full-stack developers. Learn how to communicate better, manage tasks efficiently, and leverage each team member's strengths to create a seamless development process and deliver high-quality projects.`,
          date: 'January 29, 2025',
        },
        {
          img: "react-vs-vue.jpg",
          title: "Battle of the Front-End Frameworks: React vs Vue",
          categories: ['programming', 'ai', 'frontend'],
          description:
              `React and Vue are two of the most popular front-end frameworks, each offering unique strengths. In this article, we’ll compare them based on performance, ease of use, and community support, helping you decide which is best for your next web project.`,
          date: 'January 29, 2025',
        },
      ],
      swiperInitialized: false,
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange(swiper) {
      this.activeIndex = swiper?.activeIndex
      console.log(swiper, "slide change");
    },
    truncatedDescription(description, limit = 100) {
      if (description?.length > limit) {
        return description.substring(0, limit) + '...';
      }
      return description;
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.swiperInitialized = true;
      }, 50)
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
