<template>
  <section class="relative flex flex-col items-start gap-6">
    <div class="loading textLoading">
      <p class="inline-block 2xl:text-3xl xl:text-2xl font-normal">
        <span class="text-main-cyan">&lt;</span>
        <span class="text-main-green">HELLO WORLD</span>
        <span class="text-main-cyan">/&gt</span>
      </p>
    </div>

    <div class="loading textLoading">
      <p class="inline-block 2xl:text-6xl xl:text-5xl font-bold">
        <span> I’M <span class="text-main-orange">Mehdi Rafiei</span></span>
      </p>
    </div>
    <div class="loading textLoading">
      <p class="inline-block 2xl:text-3xl xl:text-2xl text-white/60">
        Front-End Developer
      </p>
    </div>

    <ul class="flex gap-4">
      <li class="flex gap-4" v-for="(value, socialNetwork) in socialNetworks">
        <div class="circleLoading">
          <a
            :href="value.link"
            target="_blank"
            class="group/social flex rounded-full trans3ms overflow-hidden bg-dark-300 w-12 h-12 items-center shadow-md hover:(w-34)"
          >
            <span
              :class="`min-w-12 h-12 relative flex justify-center items-center rounded-full trans3ms ${value.groupHover}`"
            >
              <svg class="relative w-6 h-6">
                <use
                  :href="'./_nuxt/assets/imgs/icons.svg' + `#${socialNetwork}`"
                ></use>
              </svg>
            </span>

            <span class="ml-2 font-semibold text-sm">{{ socialNetwork }}</span>
          </a>
        </div>
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
          groupHover: "group-hover/social:(bg-socials-github text-white)",
        },
        Linkedin: {
          link: "https://www.linkedin.com/in/merafiee/",
          groupHover: "group-hover/social:(bg-socials-linkedin text-white)",
        },
        Telegram: {
          link: "https://t.me/merafiei",
          groupHover: "group-hover/social:(bg-socials-telegram text-white)",
        },
      },
    };
  },
};
</script>

<style scoped></style>
