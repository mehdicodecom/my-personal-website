<template>
  <Title>
    Mehdi Rafiei | {{ cachedProjectName }} Project | Front-end Developer
  </Title>

  <div
    class="relative bg-dark/70 rounded-lg flex flex-col items-center py-10 border border-neutral-700 xl:(ml-42 mr-40 px-22) lg:(ml-30 mr-30 px-18) md:(px-14 mt-30) sm:(px-8 mx-12 mt-30) xs:(px-6 mx-8 mt-24)"
  >
    <nuxt-link
      :to="{ path: '/portfolios' }"
      class="absolute flex items-center gap-3 xl:(left-0 -top-16) xs:(left-0 -top-16)"
    >
      <button class="bg-dark-100 rounded-full">
        <IconArrow :class="['rotate-180 w-12 h-12 text-main-orange']" />
      </button>
      <span class="text-main-orange font-bold text-lg">Portfolios</span>
    </nuxt-link>
    <div class="loading textLoading inline-block">
      <span class="inline-block font-medium text-3xl text-center">
        <span class="text-main-orange mr-2">{{ project.name }}</span>
        <span>{{ project.title }}</span>
      </span>
    </div>
    <div class="loading sm:w-8/12 mx-auto textLoading inline-block mt-2">
      <p class="text-lg text-center">{{ project.description }}</p>
    </div>

    <div class="loading textLoading inline-block mt-4">
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
    <div
      class="grid lg:grid-cols-4 sm:(grid-cols-3 grid-rows-3) xs:(grid-rows-4 grid-cols-2) gap-4 mt-8"
    >
      <Shared-Screen
        @click="showGallery(project.id)"
        class="group relative sm:(col-span-3 row-span-3) xs:(col-span-2 row-span-4) w-full"
        :media="project.media[project.mainMedia]"
        screen-height="lg:h-134 md:h-126 sm:h-100 xs:h-86"
        :only-screen="true"
        :enable-hover-effects="true"
      />
      <div
        @click="showGallery(project.id, mediaIndex + 1)"
        class="relative group row-span-1 w-full h-42 overflow-hidden rounded-xl skeleton"
        v-for="(media, mediaIndex) in otherMedia"
        :key="mediaIndex"
      >
        <!-- Skeleton background -->
        <div 
          v-if="!mediaLoaded[mediaIndex]" 
          class="absolute inset-0 skeleton-bg pointer-events-none"
        ></div>
        
        <img
          v-if="media?.type === 'img'"
          :src="media.src"
          alt=""
          :class="['w-full h-full object-cover', { 'loaded': mediaLoaded[mediaIndex] }]"
          @load="onImageLoad(mediaIndex)"
        />
        <video
          :class="['w-full h-full object-cover', { 'loaded': mediaLoaded[mediaIndex] }]"
          v-if="media?.type === 'video'"
          :src="media?.src"
          controlsList="nodownload"
          @loadeddata="onVideoLoad(mediaIndex)"
        ></video>
        <Shared-Zoom />
      </div>

      <div
        @click="showGallery(project.id, 3)"
        v-if="project.media.length - 3 > 0"
        class="bg-dark-200 sm:(row-span-1 col-span-1 h-initial) xs:(col-span-2 h-50) trans3ms rounded-lg flex items-center justify-center text-3xl cursor-pointer hover:bg-dark-900"
      >
        +{{ project.media.length - 3 }}
      </div>
    </div>

    <div class="mt-12 text-xl text-center">
      More description of the projects will be added later
    </div>
    <transition name="fadeScale">
      <Shared-Gallery v-if="galleryVisible" :project="project" />
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useProjectsStore from "@/stores/projects";

export default {
  data() {
    return {
      cachedProjectName: "",
      mediaLoaded: [],
      skeletonMinTime: 500, // Minimum time to show skeleton (500ms)
    };
  },
  computed: {
    ...mapState(useProjectsStore, [
      "getPortfolio",
      "portfolios",
      "galleryVisible",
    ]),
    otherMedia() {
      return this.project.media
        .filter((media, index) => {
          return index !== this.project.mainMedia;
        })
        .splice(0, 2);
    },
    project() {
      let projectName = this.$route.params.project;
      let project = this.getPortfolio(null, projectName);
      if (!project) {
        throw createError({
          statusCode: 404,
          message: `${projectName} Project not found`,
          fatal: true,
        });
      } else this.cachedProjectName = project.name;
      return project;
    },
  },
  mounted() {
    // Initialize mediaLoaded state for all media items
    this.mediaLoaded = new Array(this.otherMedia.length).fill(false);
    
    // Record when skeleton loading started
    this.skeletonStartTime = Date.now();
    
    // Fallback for SSR: ensure all images become visible after a timeout
    this.$nextTick(() => {
      setTimeout(() => {
        this.otherMedia.forEach((_, index) => {
          if (!this.mediaLoaded[index]) {
            this.mediaLoaded[index] = true;
          }
        });
      }, 3000); // 3 second fallback for SSR cases
    });
  },
  methods: {
    ...mapActions(useProjectsStore, ["showGallery"]),
    updatePageTitle() {
      console.log("test");

      document.title = `Mehdi Rafiei | ${this.project.name} | Front-end Developer`;
    },
    onImageLoad(mediaIndex) {
      // Image loaded successfully - ensure minimum skeleton time
      const elapsed = Date.now() - this.skeletonStartTime;
      const remainingTime = Math.max(0, this.skeletonMinTime - elapsed);
      
      setTimeout(() => {
        this.mediaLoaded[mediaIndex] = true;
      }, remainingTime);
    },
    onVideoLoad(mediaIndex) {
      // Video loaded successfully - ensure minimum skeleton time
      const elapsed = Date.now() - this.skeletonStartTime;
      const remainingTime = Math.max(0, this.skeletonMinTime - elapsed);
      
      setTimeout(() => {
        this.mediaLoaded[mediaIndex] = true;
      }, remainingTime);
    },
  },
};
</script>

<style scoped>
.gallery {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: #333;
  transition: background-position var(--transitionSpeed) linear;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% auto;
  border-radius: 0.5rem;
}

/* Grid item loading states */
.grid img,
.grid video {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.grid img.loaded,
.grid video.loaded {
  opacity: 1;
}

/* Skeleton background effect */
.skeleton-bg {
  background: linear-gradient(90deg, #343334 25%, #4a4a4a 50%, #343334 75%);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
  z-index: 0;
  pointer-events: none;
}

/* Ensure media content appears above skeleton */
.group img,
.group video {
  position: relative;
  z-index: 1;
}

/* Ensure zoom component is always on top */
.group > div:last-child {
  position: absolute;
  z-index: 10;
}

/* Skeleton shimmer animation */
@keyframes skeleton-shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
