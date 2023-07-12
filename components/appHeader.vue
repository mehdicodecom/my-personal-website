<template>
  <!-- Start Header -->
  <header
    class="relative z-20 flex items-center bg-transparent px-20 w-full mt-10"
  >
    <Header-Logo />

    <Header-Menu />

    <Header-Resume />

    <Header-ThemeSwitch />

    <Header-LangSwitch />
  </header>
  <!-- End Header -->
</template>

<script>
export default {
  data() {
    return {
      light: true,
    };
  },
};
</script>
