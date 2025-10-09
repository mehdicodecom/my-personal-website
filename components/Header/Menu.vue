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
        if (route === menu.path) {
          activeIndex = index;
        }
      });
      
      // Handle dynamic routes
      // Blog posts: /post/[slug] should activate Blog menu (index 1)
      if (route.startsWith('/post/')) {
        activeIndex = 1; // Blog menu index
      }
      // Project pages: /project/[project] should activate Portfolios menu (index 2)
      else if (route.startsWith('/project/')) {
        activeIndex = 2; // Portfolios menu index
      }
      
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
        class="flex 2xl:gap-12 lg:gap-8 md:(w-initial gap-10) xs:(w-full gap-0) items-center font-semibold relative"
    >
      <li
          v-for="(menu, index) in menus"
          :key="menu.path"
          class="md:(h-initial flex-initial) xs:(h-full flex-1) relative"
      >
        <div class="h-full">
          <div class="loading textLoading h-full">
            <nuxt-link
                :to="{ path: menu.path }"
                :class="[
                `menu-item h-full flex items-center md:(flex-row gap-2.5 text-white pb-4) xs:(flex-col gap-1.5 justify-center) hover:text-main-orange transition-all duration-300 ease-out group`,
                { 'xs:(!text-main-orange)': index === activeMenu },
              ]"
            >
              <svg
                  :class="[
                  'relative transition-all duration-300 ease-out md:(w-6 h-6) w-8 h-8 group-hover:scale-110',
                  index === activeMenu ? 'text-main-orange scale-110 icon-bounce' : 'opacity-90 group-hover:opacity-100'
                ]"
              >
                <component :is="`Icon${menu.icon.charAt(0).toUpperCase() + menu.icon.slice(1)}`" />
              </svg>

              <span 
                :class="[
                  'text-slide transition-all duration-300 ease-out',
                  { 
                    'sm:block xs:(opacity-70 text-sm)': index !== activeMenu,
                    'text-main-orange font-semibold': index === activeMenu
                  }
                ]"
              >{{
                  menu.title
                }}</span>
            </nuxt-link>
          </div>
        </div>
        
        <!-- Individual indicator for each menu item - positioned below the li -->
        <div 
          class="xs:(hidden) md:(block) absolute left-1/2 transform -translate-x-1/2 h-[2px] bg-main-orange rounded-lg transition-all duration-500 ease-out"
          :class="{
            'opacity-100': index === activeMenu,
            'w-0 opacity-0': index !== activeMenu
          }"
          :style="{
            width: index === activeMenu ? '100%' : '0px',
            bottom: '-8px'
          }"
        ></div>
      </li>
    </ul>
  </nav>

  <!-- End Menu -->
</template>

<style scoped>
/* Enhanced menu item hover effects */
.menu-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  padding: 8px 12px;
  margin: -8px -12px;
}

.menu-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(244, 122, 8, 0.1), transparent);
  transition: left 0.6s ease-out;
  border-radius: 8px;
}

.menu-item:hover::before {
  left: 100%;
}

/* Smooth active state transition */
.active-indicator {
  transform-origin: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 8px rgba(244, 122, 8, 0.3);
}

/* Icon bounce animation on active */
.icon-bounce {
  animation: iconBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes iconBounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.1);
  }
}

/* Text slide animation */
.text-slide {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover effects */
.menu-item:hover {
  transform: translateY(-1px);
}

.menu-item:active {
  transform: translateY(0) scale(0.98);
}

/* Mobile menu enhanced transitions */
@media (max-width: 768px) {
  .menu-item {
    transition: all 0.3s ease-out;
    padding: 4px 8px;
    margin: -4px -8px;
  }
  
  .menu-item:active {
    transform: scale(0.95);
  }
  
  .menu-item:hover {
    transform: none;
  }
}

/* Sliding indicator enhancement */
ul {
  position: relative;
}
</style>
