<template>
  <!-- Start Menu -->
  <nav class="flex">
    <ul class="flex items-center gap-12 font-semibold">
      <li v-for="(menu, index) in menus" class="relative pl-1 pr-2">
        <div class="loading textLoading">
          <nuxt-link
            :to="{ path: menu.path }"
            @click="activeMenu = index"
            class="flex items-center gap-2.5"
          >
            <svg class="relative w-8 h-8">
              <use
                :href="'./_nuxt/assets/imgs/icons.svg' + `#${menu.icon}`"
              ></use>
            </svg>

            {{ menu.title }}
          </nuxt-link>
        </div>
        <span
          v-if="index === activeMenu"
          class="block w-full bg-main-orange h-1 rounded-lg absolute left-0 right-0 mx-auto mt-1.5"
        ></span>
      </li>
    </ul>
  </nav>

  <!-- End Menu -->
</template>

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
          title: "About Me",
          icon: "user",
          path: "/about",
        },
        {
          title: "Portfolios",
          icon: "folder",
          path: "/works",
        },
        {
          title: "Contact Me",
          icon: "contact",
          path: "/contact_me",
        },
      ],
      activeMenu: 0,
    };
  },
};
</script>

<style scoped></style>
