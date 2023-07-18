<template>
  <Head>
    <Title>Mehdi Rafiei | Front-end Developer | Home</Title>
  </Head>

  <div class="flex w-11/12 mx-auto pl-24 pr-20 2xl:mt-60 xl:mt-46">
    <Home-HelloWorld class="flex-1" />

    <Home-Circular />

    <section class="relative flex-1 ml-30 -top-17">
      <h2 class="relative text-left">
        <span class="text-5xl tracking-widest">Latest</span>
        <span class="text-3xl font-bold text-codeColor-orange"> Works </span>
      </h2>

      <div class="flex mt-8">
        <article v-for="project in projects">
          <screen class="w-90" />
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      projects: [
        {
          img: "metriland/home.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
. {
}
</style>
