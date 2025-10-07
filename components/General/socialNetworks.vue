<template>
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
              <component :is="`Icon${socialNetwork.charAt(0).toUpperCase() + socialNetwork.slice(1)}`" />
            </svg>
          </span>

          <span class="ml-2 font-semibold text-sm">{{ socialNetwork }}</span>
        </a>
      </div>
    </li>
  </ul>
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
