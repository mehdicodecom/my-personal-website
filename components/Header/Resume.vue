<template>
  <!-- Start Resume Button -->
  <a
    :href="resumeLink"
    class="flex gap-2 items-center h-12 w-40 bg-main-orange justify-center rounded-md ml-auto"
  >
    <svg class="relative w-6 h-6">
      <use :href="'./imgs/icons.svg#pdf'"></use>
    </svg>

    <span class="text-md font-medium">Resume</span>
  </a>
  <!-- End Resume Button -->
</template>

<script>
export default {
  data() {
    return {
      resumeLink: "#",
    };
  },
};
</script>

<style scoped></style>
