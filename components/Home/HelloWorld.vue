<template>
  <section
    class="relative flex flex-col min-w-120 gap-6 lg:(gap-4 items-center) md:( mt-0 items-start) xs:( mt-4 items-center)"
  >
    <div class="loading textLoading">
      <p class="inline-block 2xl:text-3xl xl:text-2xl xs:text-2xl font-normal">
        <span class="text-main-cyan">&lt;</span>
        <span class="text-main-green">HELLO WORLD</span>
        <span class="text-main-cyan">/&gt</span>
      </p>
    </div>

    <div class="loading textLoading">
      <p class="inline-block 2xl:text-6xl xl:text-5xl xs:text-4xl font-bold">
        <span> I’M <span class="text-main-orange">Mehdi Rafiei</span></span>
      </p>
    </div>
    <div class="loading textLoading">
      <p
        class="inline-block 2xl:text-3xl xl:text-2xl xs:text-2xl text-white/60"
      >
        Front-End Developer
      </p>
    </div>

    <General-SocialNetworks />
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
