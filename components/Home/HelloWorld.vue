<template>
  <section class="relative">
    <p class="2xl:text-3xl xl:text-2xl font-normal">
      <span class="text-codeColor-cyan">&lt;</span
      ><span class="text-codeColor-green">HELLO WORLD</span
      ><span class="text-codeColor-cyan">/&gt</span>
    </p>

    <p class="2xl:text-6xl xl:text-5xl font-bold mt-6">
      I’M <span class="text-codeColor-orange">Mehdi Rafiei</span>
    </p>
    <p class="2xl:text-3xl xl:text-2xl mt-6 text-white/60">
      Front-End Developer
    </p>

    <ul class="flex gap-4 mt-6">
      <li class="flex gap-4">
        <a
          v-for="(value, socialNetwork) in socialNetworks"
          :href="value.link"
          target="_blank"
          class="group/social flex rounded-full trans3ms overflow-hidden bg-dark-300 w-12 h-12 items-center shadow-md hover:(w-34)"
        >
          <div
            :class="`min-w-12 h-12 relative flex justify-center items-center rounded-full trans3ms ${value.groupHover}`"
          >
            <svg class="relative w-6 h-6">
              <use
                :href="'./_nuxt/assets/imgs/icons.svg' + `#${socialNetwork}`"
              ></use>
            </svg>
          </div>

          <span class="ml-2 font-semibold text-sm">{{ socialNetwork }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      socialNetworks: {
        Github: {
          link: "https://github.com/mehdicodecom",
          groupHover:
            "group-hover/social:(bg-socialNetworks-github text-white)",
        },
        Linkedin: {
          link: "https://www.linkedin.com/in/merafiee/",
          groupHover:
            "group-hover/social:(bg-socialNetworks-linkedin text-white)",
        },
        Telegram: {
          link: "https://t.me/merafiei",
          groupHover:
            "group-hover/social:(bg-socialNetworks-telegram text-white)",
        },
      },
    };
  },
};
</script>

<style scoped></style>
