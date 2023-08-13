<template>
  <section class="relative flex-1 mt-80 pl-40 mb-20">
    <div class="flex items-center justify-between mr-10">
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
          <use :href="'./_nuxt/assets/imgs/icons.svg' + `#arrow`"></use>
        </svg>
      </nuxt-link>
    </div>
    <div class="flex my-10">
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :slides-per-view="2.5"
        :navigation="true"
        :space-between="32"
        @slideChange="SwitchSlideNavStates"
        :loop="false"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
      >
        <SwiperSlide
          v-for="project in projects"
          class="bg-dark py-8 pr-18 pl-18 justify-center items-center rounded-lg shadow-lg flex flex-col gap-6"
        >
          <screen class="w-140" :project="project" />
          <section class="flex mt-2 flex-wrap">
            <p class="font-medium text-2xl">
              {{ project.title }}
            </p>
          </section>
        </SwiperSlide>
        <SwiperControls ref="swiperSlide" />
      </Swiper>
    </div>

    <div class="flex justify-center gap-3 ml-10">
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
          <use :href="'./_nuxt/assets/imgs/icons.svg' + `#arrow`"></use>
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
          <use :href="'./_nuxt/assets/imgs/icons.svg' + `#arrow`"></use>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Metriland - Tokenizing Realstates",
          description:
            "On this platform users can invest on realstates with even small budget ",
          img: "metriland/home.png",
        },
        {
          title: "Finnotex - Trading CryptoCurrencies",
          img: "finnotex.png",
        },
        {
          title: "Finnobot - Automatic Trading",
          img: "finnobot.jpg",
        },
        {
          title: "Rotana - Bank Tokens Trading System",
          description:
            "On this platform users can invest on realstates with even small budget ",
          img: "rotana.png",
        },
        {
          title: "4Sou - Job Searching for immigrants",
          img: "4sou-English.png",
        },
      ],
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
      let nextbtn = document.querySelector(".swiper-button-next");
      this.nextDisabled = nextbtn.classList.contains("swiper-button-disabled");
      let prevbtn = document.querySelector(".swiper-button-prev");
      this.prevDisabled = prevbtn.classList.contains("swiper-button-disabled");
    },
  },
};
</script>

<style></style>
