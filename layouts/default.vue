<template>
  <div class="flex flex-col min-h-screen bg-main-dark">
    <Layout-ColoredCodes />
    <Layout-Header />
    <slot />
    <Layout-Footer />
  </div>
</template>

<script>
export default {
  name: "default",
};
</script>

<style></style>
