<template>
  <Head>
    <Title>Mehdi Rafiei | Front-end Developer | Home</Title>
  </Head>

  <div
    class="flex justify-between w-11/12 mx-auto pl-24 pr-20 2xl:mt-60 xl:mt-46"
  >
    <Home-HelloWorld />

    <Home-Circular />

    <div class="relative flex flex-wrap w-120">
      <p v-for="(detail, key) in details" class="w-1/2">
        <span class="block font-semibold text-codeColor-orange">
          {{ key }}
        </span>
        <span class="text-white/60">{{ detail }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      details: {
        Birthdate: "1998/07/11 (25 Yr)",
        Address: "Tehran, Iran",
        Experience: "Over 6 years",
        Interest: "Front, AI, Automation",
        Email: "info@mehdicode.com",
        Phone: "+989300432875",
      },
    };
  },
};
</script>

<style scoped>
. {
}
</style>
