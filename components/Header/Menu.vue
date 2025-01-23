<script>
export default {
  data() {
    return {
      menus: [
        {
          title: "Home",
          icon: "home",
          path: "/",
        },
        {
          title: "Blog",
          icon: "folder",
          path: "/portfolios",
        },
        {
          title: "Portfolios",
          icon: "folder",
          path: "/portfolios",
        },
        {
          title: "About Me",
          icon: "user",
          path: "/about",
        },
        {
          title: "Contact Me",
          icon: "contact",
          path: "/contact-me",
        },
      ],
    };
  },
  computed: {
    activeMenu() {
      let route = this.$route.path;
      let activeIndex = 0;
      this.menus.forEach((menu, index) => {
        if (route === menu.path) activeIndex = index;
      });
      if (activeIndex === 0 && route !== "/") return null;
      return activeIndex;
    },
  },
};
</script>

<template>
  <!-- Start Menu -->
  <nav
      class="flex select-none md:(static bg-transparent h-initial bottom-initial w-initial) xs:(fixed bottom-0 h-24 bg-dark-100 left-0 w-screen)"
  >
    <ul
        class="flex 2xl:gap-14 lg:gap-12 md:(w-initial gap-10) xs:(w-full gap-0) items-center font-semibold"
    >
      <li
          v-for="(menu, index) in menus"
          class="md:(h-initial flex-initial) xs:(h-full flex-1)"
      >
        <div class="relative h-full">
          <div class="loading textLoading h-full">
            <nuxt-link
                :to="{ path: menu.path }"
                :class="[
                `h-full flex items-center md:(flex-row gap-2.5 text-white) xs:(flex-col gap-1.5 justify-center) hover:text-main-orange`,
                { 'xs:(!text-main-orange)': index === activeMenu },
              ]"
            >
              <svg
                  :class="[
                  'relative trans3ms w-8 h-8',
                  { 'md:(w-8 h-8) xs:(w-10 h-10)': index === activeMenu },
                ]"
              >
                <use :href="'/imgs/icons.svg' + `#${menu.icon}`"></use>
              </svg>

              <span :class="[{ 'sm:block xs:hidden': index !== activeMenu }]">{{
                  menu.title
                }}</span>
            </nuxt-link>
          </div>
          <span
              v-if="index === activeMenu"
              class="xs:(hidden) md:(block) w-full bg-main-orange h-1 rounded-lg absolute left-0 right-0 mx-auto mt-1.5"
          ></span>
        </div>
      </li>
    </ul>
  </nav>

  <!-- End Menu -->
</template>

<style scoped></style>
