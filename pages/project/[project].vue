<template>
  <div
    class="relative bg-dark rounded-lg flex flex-col items-center py-10 px-22 border border-neutral-700 ml-42 mr-40 mt-12"
  >
    <nuxt-link
      :to="{ path: '/portfolios' }"
      class="absolute left-22 top-10 flex items-center gap-3"
    >
      <button class="bg-dark-100 rounded-full">
        <svg :class="['rotate-180 w-12 h-12 text-main-orange']">
          <use :href="'/imgs/icons.svg' + `#arrow`"></use>
        </svg>
      </button>

      <span class="text-main-orange font-bold text-lg">Portfolios</span>
    </nuxt-link>
    <div class="loading textLoading inline-block">
      <span class="inline-block font-medium text-3xl">
        <span class="text-main-orange mr-2">{{ project.name }}</span>
        <span>{{ project.title }}</span>
      </span>
    </div>
    <div class="loading textLoading inline-block mt-2">
      <p class="text-lg">{{ project.description }}</p>
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
    <div class="grid grid-cols-4 grid-rows-3 gap-4 mt-8">
      <screen
        class="group relative col-span-3 row-span-3"
        :media="project.media[project.mainMedia]"
        screen-height="33.5rem"
        :only-screen="true"
      />
      <div
        class="relative group row-span-1 h-42 overflow-hidden rounded-xl"
        v-for="media in otherMedia"
      >
        <img :src="media.src" alt="" class="min-h-full" />
        <zoom />
      </div>

      <div
        v-if="project.media.length - 3 > 0"
        class="bg-dark-200 row-span-1 trans3ms rounded-lg flex items-center justify-center text-3xl cursor-pointer hover:bg-dark-900"
      >
        +{{ project.media.length - 3 }}
      </div>
    </div>

    <div class="mt-12 text-xl">
      More description of the projects will be added later
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import useProjectsStore from "@/stores/projects";
export default {
  computed: {
    ...mapState(useProjectsStore, ["getPortfolio"]),
    otherMedia() {
      return this.project.media
        .filter((media, index) => {
          return index !== this.project.mainMedia;
        })
        .splice(0, 2);
    },
    project() {
      let projectName = this.$route.params.project;
      let project = this.getPortfolio(projectName);
      if (!project) {
        throw createError({
          statusCode: 404,
          message: "not found",
          fatal: true,
        });
      }
      return project;
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
  background-position: 0 0;
  background-size: 100% auto;
  border-radius: 0.5rem;
}
</style>
