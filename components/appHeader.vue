<template>
  <!-- Start Header -->
  <header
    class="relative z-20 flex items-center bg-transparent xl:px-20 lg:(mt-12 px-14 w-11/12 mx-auto) sm:( px-12) xs:(mt-8 px-8 w-full)"
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
