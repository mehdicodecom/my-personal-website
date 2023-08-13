<script>
export default {
  data() {
    return {
      test: "asdsad",
    };
  },
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
