<template></template>
<script>
export default {
  setup() {
    const swiper = useSwiper();

    return {
      swiper,
    };
  },
  methods: {
    next() {
      return this.swiper.slideNext();
    },
    prev() {
      return this.swiper.slidePrev();
    },
  },
};
</script>
