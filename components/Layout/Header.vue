<template>
  <!-- Start Header -->
  <header
    class="relative z-60 flex items-center justify-between bg-transparent xl:px-20 lg:(mt-6 px-12 w-full) sm:(px-12) xs:(mt-8 px-8 w-full)"
  >
    <Header-Logo />

    <Header-Menu />

    <Header-Resume />

    <!-- <Header-ThemeSwitch />

    <Header-LangSwitch /> -->
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
