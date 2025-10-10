<template>
  <div class="category-filter">
    <!-- Desktop: Button Layout -->
    <div class="hidden md:flex flex-wrap gap-3 justify-start">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectCategory(category)"
        :class="[
          'px-4 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 min-h-[48px]',
          selectedCategory === category
            ? 'bg-main-orange text-white shadow-lg shadow-main-orange/30'
            : 'bg-dark-200 text-white/80 hover:bg-dark-300 hover:text-white'
        ]"
      >
        <svg v-if="showIcons" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" v-html="getCategoryIcon(category)"></svg>
        {{ category === 'all' ? allText : category }}
        <span class="text-white/60 text-sm">({{ getCategoryCount(category) }})</span>
      </button>
    </div>

    <!-- Mobile: Dropdown Layout -->
    <div class="md:hidden">
      <div class="relative">
        <button
          @click="toggleDropdown"
          :class="[
            'w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between gap-2 min-h-[48px] relative z-10',
            'bg-dark-200 text-white/80 hover:bg-dark-300 hover:text-white'
          ]"
        >
          <div class="flex items-center gap-2">
            <svg v-if="showIcons" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" v-html="getCategoryIcon(selectedCategory)"></svg>
            <span>{{ selectedCategory === 'all' ? allText : selectedCategory }}</span>
            <span class="text-white/60 text-sm">({{ getCategoryCount(selectedCategory) }})</span>
          </div>
          <svg 
            class="w-5 h-5 transition-transform duration-300"
            :class="{ 'rotate-180': dropdownOpen }"
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <transition name="dropdown">
          <div
            v-if="dropdownOpen"
            class="absolute top-full left-0 right-0 mt-2 bg-dark-200 rounded-lg shadow-lg border border-dark-300 z-[9999] max-h-60 overflow-y-auto"
          >
            <button
              v-for="category in categories"
              :key="category"
              @click="selectCategory(category)"
              :class="[
                'w-full px-4 py-3 text-left font-medium transition-all duration-200 flex items-center gap-2 hover:bg-dark-300 first:rounded-t-lg last:rounded-b-lg relative z-10',
                selectedCategory === category
                  ? 'bg-main-orange/20 text-main-orange'
                  : 'text-white/80 hover:text-white'
              ]"
            >
              <svg v-if="showIcons" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" v-html="getCategoryIcon(category)"></svg>
              <span class="flex-1">{{ category === 'all' ? allText : category }}</span>
              <span class="text-white/60 text-sm">({{ getCategoryCount(category) }})</span>
            </button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    },
    selectedCategory: {
      type: String,
      default: 'all'
    },
    categoryCounts: {
      type: Object,
      default: () => ({})
    },
    showIcons: {
      type: Boolean,
      default: true
    },
    allText: {
      type: String,
      default: 'All Items'
    }
  },
  data() {
    return {
      dropdownOpen: false
    };
  },
  computed: {
    getCategoryCount(category) {
      return (category) => {
        return this.categoryCounts[category] || 0;
      };
    }
  },
  mounted() {
    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    selectCategory(category) {
      this.$emit('category-selected', category);
      this.dropdownOpen = false; // Close dropdown after selection
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.dropdownOpen = false;
      }
    },
    getCategoryIcon(category) {
      const icons = {
        'all': '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>',
        'programming': '<path d="M8 3a1 1 0 011-1h6a1 1 0 011 1v1h3a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V3zM10 5H6v10h12V5h-4V4h-4v1z" fill="currentColor"/>',
        'ai': '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>',
        'frontend': '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>',
        'javascript': '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>',
        'react': '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>',
        'vue': '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>',
        'tutorial': '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>',
        'tips': '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>',
        'news': '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>'
      };
      return icons[category] || icons['all'];
    }
  }
};
</script>

<style scoped>
.category-filter {
  animation: fadeInUp 0.6s ease-out;
}

.category-filter button {
  position: relative;
  overflow: hidden;
}

.category-filter button svg {
  display: block;
  width: 20px;
  height: 20px;
}

.category-filter button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.category-filter button:hover::before {
  left: 100%;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button click animation */
.category-filter button:active {
  transform: scale(0.95);
}

/* Dropdown animations */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

/* Mobile dropdown specific styles */
@media (max-width: 767px) {
  .category-filter {
    width: 100%;
  }
}
</style>
