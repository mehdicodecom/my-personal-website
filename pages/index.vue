<template>
  <Head>
    <Title>Mehdi Rafiei | Front-end Developer | Home</Title>
  </Head>

  <div class="flex w-11/12 mx-auto pl-24 pr-20 2xl:mt-60 xl:mt-46">
    <Home-HelloWorld class="flex-1" />

    <Home-Circular />

    <section class="relative flex-1 ml-20 -top-17">
      <h2 class="relative text-left">
        <span class="text-7xl text-white/30 tracking-widest">Latest</span>
        <span
          class="absolute left-0 right-0 inline-flex items-center justify-center text-3xl h-full font-bold"
        >
          Works
        </span>
      </h2>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
. {
}
</style>
