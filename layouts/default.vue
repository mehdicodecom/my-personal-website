<template>
  <div class="flex flex-col min-h-screen">
    <General-CustomCursor />
    <coloredCodes />
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "default",
};
</script>

<style></style>
