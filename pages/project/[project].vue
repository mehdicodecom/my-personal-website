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
        :project="project"
        :only-screen="true"
      />
      <img src="/imgs/projects/finnotex.png" alt="" class="rounded-lg" />

      <img src="/imgs/projects/finnobot.jpg" alt="" class="rounded-lg" />
      <div
        class="bg-dark-200 rounded-lg flex items-center justify-center text-3xl"
      >
        +2
      </div>
    </div>
    <!-- {{ $route.params.project }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {
        name: "Metriland",
        title: "Tokenizing Realstates",
        description:
          "MetriLand offers investment on realstates by tokens, even with small budget you can get profit",
        img: "metriland/home.png",
        media: [
          {
            type: "img",
            src: "/imgs/metriland/home.png",
          },
        ],
        used: ["html", "css", "js", "nuxt", "vue", "pinia", "unocss"],
      },
    };
  },
};
</script>

<style scoped></style>
