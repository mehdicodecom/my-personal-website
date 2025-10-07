<template>
  <!-- Start Resume Button -->
  <a
    :href="resumeLink"
    :download="download"
    class="flex gap-2 items-center h-12 w-40 transition duration-200 hover:bg-main-orange bg-main-orange/80 justify-center rounded-md"
  >
    <svg class="relative w-6 h-6">
      <IconPdf />
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
