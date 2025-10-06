<template>
  <Title>Mehdi Rafiei | Home | Front-end Developer</Title>

  <div
    class="flex lg:(justify-center text-center items-center) mt-8 w-full overflow-hidden"
  >
    <Home-HelloWorld />
  </div>
  <div class="flex mt-10 w-full overflow-hidden mx-auto home-carousel">
    <Slider :items="getPosts(6)" :show-skeleton="!carouselReady" />
  </div>

  <Shared-Projects
    class="lg:pt-28 sm:pt-26 xl:px-20 overflow-hidden w-full lg:pl-34 xs:pl-14 xs:(pl-6 pt-30)"
    :projects="getPortfolios(8)"
    :headline="true"
    :home-page="true"
  />

  <transition name="fadeScale">
    <Shared-Gallery
      v-if="galleryVisible"
      :project="getPortfolio(activeProjectID)"
    />
  </transition>
</template>

<script>
import { mapState } from "pinia";
import useProjectsStore from "@/stores/projects";
import usePostsStore from "@/stores/posts";

export default {
  data() {
    return {
      carouselReady: false,
    };
  },
  computed: {
    ...mapState(useProjectsStore, [
      "galleryVisible",
      "activeProjectID",
      "getPortfolio",
      "getPortfolios",
    ]),
    ...mapState(usePostsStore, ["getPosts"]),
  },
  mounted() {
    // Wait for critical resources to load
    this.$nextTick(() => {
      // Preload critical images
      this.preloadCriticalImages().then(() => {
        setTimeout(() => {
          this.carouselReady = true;
        }, 200); // Give some time for smooth transition
      });
    });
  },
  methods: {
    preloadCriticalImages() {
      return new Promise((resolve) => {
        const posts = this.getPosts(6);
        const imagePromises = posts.slice(0, 3).map((post) => {
          return new Promise((imgResolve) => {
            const img = new Image();
            img.onload = imgResolve;
            img.onerror = imgResolve;
            img.src = `/imgs/blog/${post.img}`;
          });
        });
        
        Promise.all(imagePromises).then(() => {
          resolve();
        });
      });
    },
  },
};
</script>