<template>
  <!-- Start Resume Button -->
  <a
    :href="resumeLink"
    :download="download"
    class="flex gap-2 items-center h-12 w-40 bg-main-orange justify-center rounded-md ml-auto"
  >
    <svg class="relative w-6 h-6">
      <use :href="'/imgs/icons.svg#pdf'"></use>
    </svg>

    <span class="text-md font-medium">Resume</span>
  </a>
  <!-- End Resume Button -->
</template>

<script>
export default {
  data() {
    return {
      resumeLink: "Mehdi%20Rafiei%20-%20FrontEnd%20Developer.pdf",
      download: "Mehdi Rafiei - FrontEnd Developer.pdf",
    };
  },
};
</script>

<style scoped></style>
