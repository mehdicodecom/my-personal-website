<template>
  <!-- Start Logo -->
  <nuxt-link
    :to="{ path: '/' }"
    class="relative flex items-center"
  >
    <img 
    v-show="showImg"
      ref="logoImg"
      src="/imgs/logo.png" 
      class="z-10 w-18" 
      alt="" 
    />
    <div 
      v-if="imageLoaded"
      class="bg-white h-10 w-12 absolute top-6 left-3"
    ></div>
  </nuxt-link>
  <!-- End Logo -->
</template>

<script setup>
const imageLoaded = ref(false)
const logoImg = ref(null)
const showImg = ref(false)

onMounted(() => {
  // Check if image is already loaded
  showImg.value = true
  if (logoImg.value?.complete) {
    imageLoaded.value = true
  }
})
</script>

<style scoped></style>
