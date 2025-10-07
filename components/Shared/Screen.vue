<template>
  <div>
    <slot></slot>
    <div class="mac">
      <div class="display">
        <div :class="['screen', screenHeight]">
          <div
            @mouseenter="handleHover(true)"
            @mouseleave="handleHover(false)"
            :class="['relative viewport group', { scrollToEnd: (enableHoverEffects && isHovered && media?.type === 'img' && media?.scroll === true) || (!enableHoverEffects && scroll && media?.type === 'img') }]"
            :style="[
              {
                backgroundImage: getBackgroundImage(),
              },
              { '--transitionSpeed': media?.transition },
            ]"
          >
            <!-- Skeleton background for loading -->
            <div 
              v-if="!mediaLoaded" 
              class="absolute inset-0 skeleton-bg pointer-events-none"
            ></div>
            <video
              ref="video"
              @play="videoPlaying = true"
              @pause="videoPlaying = false"
              @loadeddata="onMediaLoad"
              :class="[
                'absolute h-full w-full rounded-lg screenVideo',
                { 'object-cover': !videoControls },
                { 'opacity-0': enableHoverEffects && !isHovered },
                { 'opacity-100': !enableHoverEffects || isHovered },
              ]"
              v-show="media?.type === 'video'"
              :src="media?.src"
              :controls="videoControls"
              controlsList="nodownload"
              :muted="enableHoverEffects && isHovered && media?.type === 'video'"
              loop
            ></video>
            <Shared-Zoom v-if="zoom" />
            <!-- <img
              :src="`/imgs/projects/${project.img}`"
              alt=""
              class="w-full h-full rounded-lg"
            /> -->
          </div>
        </div>
        <span class="label sm:inline-block xs:hidden">MehdiCode.com</span>
      </div>
      <div :class="aboutPage ? 'md:block xs:hidden' : 'sm:block xs:hidden'">
        <div class="keys" v-if="!onlyScreen">
          <div class="board"></div>
          <div class="touchpad"></div>
        </div>
        <div class="comp" v-if="!onlyScreen">
          <div class="notch"></div>
        </div>
        <div class="compBottom" v-if="!onlyScreen"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import useProjectsStore from "@/stores/projects";
export default {
  props: {
    aboutPage: {
      default: false,
    },
    onlyScreen: {
      default: false,
    },
    zoom: {
      default: true,
    },
    media: {},
    scroll: false,
    screenHeight: {
      default: "h-74",
    },
    videoControls: {
      default: false,
    },
    autoplay: {
      default: false,
    },
    enableHoverEffects: {
      default: false,
    },
  },
  data() {
    return {
      isHovered: false,
      mediaLoaded: false,
    };
  },
  computed: {
    ...mapWritableState(useProjectsStore, ["videoPlaying"]),
  },
  methods: {
    getBackgroundImage() {
      if (this.media?.type === 'img') {
        return `url(${this.media?.src})`;
      } else if (this.media?.type === 'video') {
        // In gallery (videoControls = true), don't show poster
        if (this.videoControls) {
          return 'none';
        }
        // In carousels, show poster when not hovered or when video element is not visible
        if (!this.enableHoverEffects || !this.isHovered) {
          return this.media?.poster ? `url(${this.media?.poster})` : 'none';
        }
        return 'none'; // Hide background when video is playing
      }
      return 'none';
    },
    handleHover(hovering) {
      if (!this.enableHoverEffects) return;
      
      this.isHovered = hovering;
      
      if (this.media?.type === 'video') {
        // Use nextTick to ensure video element is ready
        this.$nextTick(() => {
          if (this.$refs.video) {
            if (hovering) {
              // Ensure video is loaded before playing
              if (this.$refs.video.readyState >= 2) { // HAVE_CURRENT_DATA
                this.$refs.video.play().catch(err => {
                  console.log('Video play failed:', err);
                });
              } else {
                // Wait for video to load
                this.$refs.video.addEventListener('canplay', () => {
                  this.$refs.video.play().catch(err => {
                    console.log('Video play failed after load:', err);
                  });
                }, { once: true });
              }
            } else {
              // Stop video when leaving hover
              this.$refs.video.pause();
              this.$refs.video.currentTime = 0; // Reset to beginning
            }
          }
        });
      }
    },
    onMediaLoad() {
      this.mediaLoaded = true;
    },
  },
  watch: {
    media: {
      handler() {
        // Reset loading state when media changes
        this.mediaLoaded = false;
        
        // For background images, we need to check if they're loaded
        // Only do this on client side to avoid SSR issues
        if (this.media?.type === 'img') {
          if (typeof window !== 'undefined') {
            const img = new Image();
            img.onload = () => {
              this.mediaLoaded = true;
            };
            img.src = this.media.src;
          } else {
            // On server side, assume image is loaded to avoid skeleton showing
            this.mediaLoaded = true;
          }
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
/* Skeleton background effect */
.skeleton-bg {
  background: linear-gradient(90deg, #343334 25%, #4a4a4a 50%, #343334 75%);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
  z-index: 0;
  pointer-events: none;
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

.display {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 1rem;
  background: #4e4e4e;
  animation: shine2 12s infinite;
}

.screen {
  position: relative;
  width: 100%;
  /* width: 560px; */
}
.viewport {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition: background-position var(--transitionSpeed) linear;
  background: #333 no-repeat 0 0;
  background-size: 100% auto;
  border-radius: 0.5rem;
}
.viewport.scrollToEnd {
  background-position: 100% 100%;
}
.label {
  position: absolute;
  color: #a7a7a7;
  font-size: 9px;
  font-family: "Signika Negative", sans-serif;
  z-index: 4;
  bottom: 5px;
}
.keys {
  position: relative;
  width: calc(100% + 5.8rem);
  top: -6px;
  left: -2.8rem;
  height: 0;
  border-left: 3rem solid transparent;
  border-right: 3rem solid transparent;
  border-bottom: 2rem solid #4e4e4e;
  display: flex;
  justify-content: center;
}
.board {
  position: relative;
  width: 100%;
  height: 0;
  top: 2px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 15px solid #141414ce;
}
.touchpad {
  position: absolute;
  width: 160px;
  height: 0;
  top: 20px;
  border-radius: 20px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 8px solid #3f3f3f96;
}

.comp {
  position: relative;
  display: flex;
  justify-content: center;
  top: -8px;
  left: -2.8rem;
  width: calc(100% + 5.8rem);
  height: 12px;
  background: #393a42;
  animation: shine1 10s infinite;
}
.notch {
  position: relative;
  width: 120px;
  height: 10px;
  background: #4e4f58;
  border-radius: 0 0 20px 20px;
}
.compBottom {
  position: relative;
  top: -9px;
  width: 100%;
  height: 3px;
  background: #35353d;
  border-radius: 0 0 50% 50%;
}
</style>
