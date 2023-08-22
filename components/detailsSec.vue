<template>
  <div class="relative flex flex-wrap w-120">
    <p v-for="(detail, key) in details" class="w-1/2">
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
        Birthdate: "1998/07/11 (25 Yr)",
        Address: "Tehran, Iran",
        Experience: "Over 6 years",
        Interest: "Front, AI, Automation",
        Email: "info@mehdicode.com",
        Phone: "+989300432875",
      },
    };
  },
};
</script>

<style scoped></style>
