<template>
  <Title>Mehdi Rafiei | {{ post.title }} | Front-end Developer</Title>

  <div
    class="relative xl:(ml-42 mr-40 px-22) lg:(ml-30 mr-30 px-18) md:(px-14 mt-30) sm:(px-8 mx-12 mt-30) xs:(px-6 mx-8 mt-24)"
  >
    <!-- Development Notice -->
    <div
      class="bg-main-orange/20 text-white/80 text-sm text-center py-2 px-4 rounded-lg mb-6"
    >
      🚧 This page is under development. Content is for testing purposes and not
      final.
    </div>

    <!-- Back Button -->
    <NuxtLink
      to="/blog"
      class="absolute flex items-center gap-3 xl:(left-0 -top-16) xs:(left-0 -top-16) z-50"
    >
      <button
        class="bg-dark-100 rounded-full p-2 hover:bg-dark transition duration-200"
      >
        <svg :class="['rotate-180 w-10 h-10 text-main-orange']">
          <IconArrow />
        </svg>
      </button>
      <span class="text-main-orange font-bold text-lg">Blog</span>
    </NuxtLink>

    <!-- Hero Section -->
    <div
      class="relative bg-dark/70 rounded-lg flex flex-col items-center p-8 animate-fade-in"
    >
      <div class="relative z-10 text-center">
        <div class="loading textLoading inline-block">
          <h1 class="font-medium text-3xl lg:text-4xl text-main-orange">
            {{ post.title }}
          </h1>
        </div>
      </div>
      
      <!-- Image container with skeleton background -->
      <div class="relative w-full mt-6" style="min-height: 24rem;">
        <!-- Skeleton background -->
        <div 
          v-if="!imageLoaded" 
          class="absolute inset-0 skeleton-bg rounded-md pointer-events-none"
        ></div>
        
        <img
          :src="`/imgs/blog/${post.img}`"
          alt=""
          :class="['w-full h-auto object-contain max-h-96 rounded-md relative z-10', { 'loaded': imageLoaded }]"
          @load="onImageLoad"
        />
      </div>
    </div>

    <!-- Content Section -->
    <div class="flex lg:flex-row flex-col gap-8 mt-10">
      <!-- Main Content -->
      <div
        class="flex-1 bg-dark/70 rounded-lg p-8 border border-neutral-700 shadow-lg animate-slide-up"
      >
        <div
          class="prose prose-invert prose-lg max-w-4xl mx-auto"
          v-html="post.content"
        ></div>
        <!-- Share Button -->
        <div class="mt-8 flex justify-center">
          <a
            :href="shareUrl"
            target="_blank"
            class="inline-flex items-center bg-gradient-to-r from-main-orange/20 to-main-orange/40 text-main-orange font-semibold text-lg pr-4 pl-1 rounded-lg hover:bg-gradient-to-r hover:from-main-orange/30 hover:to-main-orange/50 hover:scale-105 transition duration-200 shadow-md"
          >
            <svg class="w-16 h-16">
              <IconTwitter />
            </svg>
            Share on X
          </a>
        </div>
      </div>

      <!-- Sidebar -->
      <aside
        class="lg:w-80 bg-dark/70 rounded-lg p-6 border border-neutral-700 shadow-lg lg:sticky lg:top-20 animate-slide-up"
      >
        <h3 class="text-xl font-bold text-main-orange mb-4">Categories</h3>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="category in post.categories"
            :key="category"
            class="bg-main-orange/20 text-main-orange text-sm px-3 py-1 rounded-full hover:bg-main-orange/30 hover:scale-105 transition duration-200"
          >
            {{ category }}
          </li>
        </ul>
        <div class="mt-6">
          <h3 class="text-xl font-bold text-main-orange mb-2">Metadata</h3>
          <p class="text-white/80 text-sm">
            Published: <span class="text-white">{{ post.date }}</span>
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import usePostsStore from "@/stores/posts";

export default {
  data() {
    return {
      imageLoaded: false,
      skeletonStartTime: null,
      skeletonMinTime: 500, // Minimum time to show skeleton (500ms)
    };
  },
  computed: {
    ...mapState(usePostsStore, ["getPost"]),
    post() {
      const slug = this.$route.params.slug;
      const post = this.getPost(slug);
      if (!post) {
        throw createError({
          statusCode: 404,
          message: `${slug} Post not found`,
          fatal: true,
        });
      }
      return post;
    },
    shareUrl() {
      // Ensure window is only accessed on client side
      const url = process.client
        ? window.location.href
        : `https://your-site.com/post/${this.post.slug}`; // Fallback for SSR
      return `https://x.com/intent/tweet?text=Check out this post: ${encodeURIComponent(this.post.title)}&url=${encodeURIComponent(url)}`;
    },
  },
  mounted() {
    // Record when skeleton loading started
    this.skeletonStartTime = Date.now();
    
    // Fallback for SSR: ensure image becomes visible after a timeout
    this.$nextTick(() => {
      setTimeout(() => {
        if (!this.imageLoaded) {
          this.imageLoaded = true;
        }
      }, 2000); // 2 second fallback
    });
  },
  methods: {
    onImageLoad() {
      // Ensure minimum skeleton time for client-side loads
      const elapsed = Date.now() - this.skeletonStartTime;
      const remainingTime = Math.max(0, this.skeletonMinTime - elapsed);
      
      setTimeout(() => {
        this.imageLoaded = true;
      }, remainingTime);
    },
  },
};
</script>

<style scoped>
.prose :deep(h1),
.prose :deep(h2),
.prose :deep(h3) {
  color: #ff7a00; /* main-orange */
}
.prose :deep(p) {
  color: #e5e7eb; /* light gray */
}
.prose :deep(ul),
.prose :deep(ol) {
  color: #d1d5db; /* lighter gray */
}
.prose :deep(a) {
  color: #ff7a00;
  text-decoration: underline;
}

/* Animations for hero and content sections */
.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out;
}
.animate-slide-up {
  animation: slideUp 0.8s ease-in-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Blog image loading states */
img {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

img.loaded {
  opacity: 1;
}

/* Skeleton background effect */
.skeleton-bg {
  background: linear-gradient(90deg, #343334 25%, #4a4a4a 50%, #343334 75%);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
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
