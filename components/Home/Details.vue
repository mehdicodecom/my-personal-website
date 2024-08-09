<template>
  <div
    class="relative flex flex-wrap xl:w-120 lg:(mt-0) md:(w-100 gap-y-4 gap-x-0 justify-start mx-0) sm:(w-180) xs:(w-220 mt-14 gap-4 mx-auto justify-center order-3)"
  >
    <p
      v-for="(detail, key) in details"
      class="md:(w-1/2 bg-transparent p-0) xs:(w-5/12 bg-dark-400 py-6 px-4)"
    >
      <span class="block loading textLoading">
        <span class="inline-block font-semibold text-main-orange">
          {{ key }}
        </span>
      </span>
      <span class="block loading textLoading">
        <span class="inline-block text-white/60">{{ detail }}</span>
      </span>
    </p>
    <!-- <nuxt-link
      :to="{ path: '/' }"
      class="bg-main-orange h-12 w-40 rounded-md flex items-center justify-center"
      >More About me</nuxt-link
    > -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: {
        Stack: "Vue, Nuxt, Tailwind",
        "Completed Projects": "+10",
        Birthdate: "1998/07/11 (26 Yr)",
        Experience: "Over 6 years",
        Interest: "Front, AI, Automation",
        Email: "info@mehdicode.com",
      },
    };
  },
};
</script>

<style scoped></style>
