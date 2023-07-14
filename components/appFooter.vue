<template>
  <div
    class="mt-auto py-8 justify-center text-lg flex items-center gap-3 text-white/40"
  >
    Made with
    <svg class="relative w-6 h-6 love">
      <use :href="'./_nuxt/assets/imgs/icons.svg' + `#love`"></use>
    </svg>
    By Mehdi
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.love {
  animation: pound 0.4s infinite alternate;
  -webkit-animation: pound 0.4s infinite alternate;
}

@-webkit-keyframes pound {
  to {
    transform: scale(1.4);
  }
}

@keyframes pound {
  to {
    transform: scale(1.4);
  }
}
</style>
