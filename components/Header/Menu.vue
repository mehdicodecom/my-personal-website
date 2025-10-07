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
          icon: "blog",
          path: "/blog",
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
      class="flex select-none md:(static bg-transparent h-initial bottom-initial w-initial) xs:(fixed bottom-0 h-24 bg-dark-300 left-0 w-screen rounded-t-2xl)"
  >
    <ul
        class="flex 2xl:gap-12 lg:gap-8 md:(w-initial gap-10) xs:(w-full gap-0) items-center font-semibold"
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
                  'relative trans3ms md:(w-6 h-6) w-8 h-8',
                  index !== activeMenu && 'opacity-90'
                ]"
              >
                <component :is="`Icon${menu.icon.charAt(0).toUpperCase() + menu.icon.slice(1)}`" />
              </svg>

              <span :class="[{ 'sm:block xs:(opacity-70 text-sm)': index !== activeMenu }]">{{
                  menu.title
                }}</span>
            </nuxt-link>
          </div>
          <span
              v-if="index === activeMenu"
              class="xs:(hidden) md:(block) w-full bg-main-orange h-[2px] rounded-lg absolute left-0 right-0 mx-auto mt-1.5"
          ></span>
        </div>
      </li>
    </ul>
  </nav>

  <!-- End Menu -->
</template>

<style scoped></style>
