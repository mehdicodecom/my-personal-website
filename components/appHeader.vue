<template>
  <!-- Start Header -->
  <header
    class="relative z-20 flex items-center bg-transparent px-20 mt-12 w-11/12 mx-auto"
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
