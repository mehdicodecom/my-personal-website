<template>
  <div>
    <slot></slot>
    <div class="mac">
      <div class="display">
        <div :class="['screen', screenHeight]">
          <div
            :class="['relative viewport group', { scrollToEnd: scroll }]"
            :style="[
              {
                backgroundImage:
                  media?.type === 'img' ? `url(${media?.src})` : 'none',
              },
              { '--transitionSpeed': media?.transition },
            ]"
          >
            <video
              ref="video"
              @play="videoPlaying = true"
              @pause="videoPlaying = false"
              :class="[
                'absolute h-full w-full rounded-lg screenVideo',
                { 'object-cover': !videoControls },
              ]"
              v-if="media?.type === 'video'"
              :src="media?.src"
              :controls="videoControls"
              controlsList="nodownload"
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
  },
  computed: {
    ...mapWritableState(useProjectsStore, ["videoPlaying"]),
  },
};
</script>

<style scoped>
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
