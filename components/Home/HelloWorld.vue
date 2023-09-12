<template>
  <section
    class="relative flex flex-col gap-6 lg:(gap-4 w-initial) md:(w-1/2 mt-0 order-1 items-start) xs:(w-full order-2 mt-4 items-center)"
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
