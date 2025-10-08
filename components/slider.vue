<template>
  <div class="slider-wrapper relative">
  <!-- Skeleton Layout (Static) -->
  <div
    class="skeleton-container transition-all duration-700 ease-out"
    :class="showSkeleton ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'"
  >
    <div
      v-for="(item, i) in visibleSkeletonItems"
      :key="`skeleton-${i}`"
      class="skeleton-slide"
      :class="{ 'skeleton-active': i === Math.floor(visibleSkeletonItems.length / 2) }"
    >
      <div class="relative w-full h-full">
        <!-- Skeleton image -->
        <div class="skeleton-image rounded-xl w-full h-full"></div>
        
        <!-- Skeleton date badge -->
        <div class="absolute top-3 left-3 flex items-center gap-2 bg-black bg-opacity-20 rounded-lg p-1">
          <div class="skeleton-icon w-5 h-5 rounded"></div>
          <div class="skeleton-date w-16 h-4 rounded"></div>
        </div>
        
        
        <!-- Skeleton content -->
        <div class="p-4 pb-8 flex flex-col gap-2 backdrop-blur-[6px] bg-black w-full absolute bottom-0 rounded-xl bg-opacity-15">
          <div class="skeleton-title h-6 rounded w-3/4"></div>
          <div class="skeleton-description h-4 rounded w-full"></div>
          <div class="skeleton-description h-4 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Real Carousel -->
  <div
    class="swiper-container transition-all duration-700 ease-out absolute top-0 left-0 w-full"
    :class="showSkeleton ? 'opacity-0 scale-105 translate-y-4 pointer-events-none' : 'opacity-100 scale-100 translate-y-0'"
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
        v-for="(item, i) in items"
        :key="item.id"
        class="group overflow-hidden relative"
      >
        <NuxtLink :to="`/post/${item.slug}`" class="relative block w-full h-full">
          <img
            class="rounded-xl w-full h-full transition-all duration-800 ease-out group-hover:scale-110"
            :src="`/imgs/blog/${item.img}`"
            :loading="i < 3 ? 'eager' : 'lazy'"
            alt=""
          />
          <div
            class="absolute text-white top-3 left-3 flex items-center gap-2 bg-black bg-opacity-20 rounded-lg p-1 z-10"
          >
            <svg class="w-5 h-5 select-none">
              <IconClock />
            </svg>
            <span class="text-sm">{{ item.date }}</span>
          </div>
          <div
            class="absolute inline-flex justify-center items-center w-14 h-14 rounded-full bg-black bg-opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 transition-all duration-400 ease-out opacity-0 -translate-y-30 scale-150 group-hover:-translate-y-16 group-hover:opacity-100 group-hover:scale-100 z-20"
          >
            <svg class="w-6 h-6 text-white select-none">
              <IconLink />
            </svg>
          </div>
          <div
            class="p-4 transition-all duration-300 ease-out pb-8 flex flex-col gap-2 backdrop-blur-[6px] bg-black w-full absolute bottom-0 left-0 right-0 rounded-xl bg-opacity-15 group-hover:bg-opacity-70 z-10"
            :class="activeIndex === i && 'bg-opacity-50'"
          >
            <h2 class="text-lg text-gray-100">{{ item.title }}</h2>
            <p class="text-gray-100 text-md opacity-70">
              {{ truncatedDescription(item.description) }}
            </p>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
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
    items: {
      type: Array,
      required: true,
      validator: (items) =>
        items.every(
          (item) =>
            typeof item.img === "string" &&
            typeof item.title === "string" &&
            typeof item.description === "string" &&
            typeof item.date === "string" &&
            typeof item.slug === "string",
        ),
    },
    showSkeleton: {
      type: Boolean,
      default: false,
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
        initialSlide: 2,
      }),
    },
  },
  data() {
    return {
      activeIndex: 0,
      swiperInitialized: false,
    };
  },
  computed: {
    visibleSkeletonItems() {
      // Show only 5 items for skeleton (like the real carousel)
      return this.items.slice(0, 5);
    },
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
    waitForImages() {
      return new Promise((resolve) => {
        const images = this.$el.querySelectorAll('img');
        if (images.length === 0) {
          resolve();
          return;
        }
        
        let loadedCount = 0;
        const totalImages = images.length;
        
        const checkComplete = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            resolve();
          }
        };
        
        images.forEach((img) => {
          if (img.complete) {
            checkComplete();
          } else {
            img.addEventListener('load', checkComplete);
            img.addEventListener('error', checkComplete);
          }
        });
      });
    },
  },
  mounted() {
    if (!this.showSkeleton) {
      this.$nextTick(() => {
        // Wait for images to load before initializing swiper
        this.waitForImages().then(() => {
          setTimeout(() => {
            this.swiperInitialized = true;
          }, 50);
        });
      });
    }
  },
  beforeDestroy() {
    this.swiperInitialized = false;
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

/* Fix pointer events for clickable cards - only for home carousel */
.home-carousel .mySwiper {
  pointer-events: none;
}

.home-carousel .mySwiper .swiper-slide {
  pointer-events: auto;
}

.home-carousel .mySwiper .swiper-slide a {
  pointer-events: auto;
}


/* Skeleton loading styles */
.skeleton-image,
.skeleton-icon,
.skeleton-date,
.skeleton-title,
.skeleton-description {
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}


/* Slider wrapper */
.slider-wrapper {
  width: 100%;
  padding: 2rem 0;
  min-height: 480px;
}

/* Skeleton container styles */
.skeleton-container {
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  padding: 0 2rem;
  position: relative;
  overflow: visible;
}

/* Create equal spacing on both sides - only show 5 items */
.skeleton-container::before {
  content: '';
  flex: 0 0 300px;
  max-width: 300px;
}

.skeleton-container::after {
  content: '';
  flex: 0 0 300px;
  max-width: 300px;
}

.skeleton-slide {
  width: 350px;
  height: 420px;
  border-radius: 12px;
  position: relative;
  transform: scale(0.8);
  opacity: 0.6;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.skeleton-slide.skeleton-active {
  transform: scale(1);
  opacity: 1;
  z-index: 2;
}

/* Responsive heights */
@media (max-width: 768px) {
  .slider-wrapper {
    min-height: 300px;
  }
  
  .skeleton-container {
    gap: 0.5rem;
    padding: 0 1rem;
  }
  
  .skeleton-slide {
    width: 300px;
    height: 360px;
  }
  
  /* Match actual carousel height to skeleton */
  .mySwiper .swiper-slide {
    height: 360px !important;
  }
  
  .mySwiper .swiper-slide img {
    height: 360px;
    object-fit: cover;
  }
}

@media (max-width: 480px) {
  .slider-wrapper {
    min-height: 250px;
  }
  
  .skeleton-slide {
    width: 260px;
    height: 320px;
  }
  
  /* Match actual carousel height to skeleton */
  .mySwiper .swiper-slide {
    height: 320px !important;
  }
  
  .mySwiper .swiper-slide img {
    height: 320px;
    object-fit: cover;
  }
}
</style>
