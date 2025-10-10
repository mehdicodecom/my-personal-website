<template>
  <div class="compact-filters sticky top-4 z-40">
    <!-- Desktop: Horizontal Layout -->
    <div class="hidden lg:block">
      <div class="flex items-center gap-4 bg-dark/80 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-lg">
        <!-- Search Input -->
        <div class="flex-1 min-w-0 relative">
          <input
            :value="searchQuery"
            @input="onSearchInput"
            type="text"
            placeholder="Search posts..."
            class="w-full pl-4 pr-12 py-2 bg-dark-200/50 text-white placeholder-white/60 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-main-orange focus:border-transparent transition-all duration-200"
          />
          <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        
        <!-- Category Filter -->
        <div class="flex-shrink-0">
          <Shared-GenericCategoryFilter
            :categories="categories"
            :selected-category="selectedCategory"
            :category-counts="categoryCounts"
            :show-icons="false"
            all-text="All"
            @category-selected="onCategorySelected"
          />
        </div>
      </div>
    </div>

    <!-- Mobile: Vertical Layout -->
    <div class="lg:hidden space-y-4">
      <!-- Search Input -->
      <div class="relative">
        <input
          :value="searchQuery"
          @input="onSearchInput"
          type="text"
          placeholder="Search posts by title, description, or category..."
          class="w-full pl-4 pr-12 py-3 bg-dark/50 text-white placeholder-white/60 rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-main-orange hover:ring-2 hover:ring-main-orange transition duration-200"
        />
        <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      <!-- Category Filter -->
      <div>
        <Shared-GenericCategoryFilter
          :categories="categories"
          :selected-category="selectedCategory"
          :category-counts="categoryCounts"
          :show-icons="false"
          all-text="All Posts"
          @category-selected="onCategorySelected"
        />
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
    searchQuery: {
      type: String,
      default: ''
    }
  },
  emits: ['category-selected', 'search-changed'],
  methods: {
    onCategorySelected(category) {
      this.$emit('category-selected', category);
    },
    onSearchInput(event) {
      this.$emit('search-changed', event.target.value);
    }
  }
};
</script>

<style scoped>
.compact-filters {
  animation: slideDown 0.4s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom scrollbar for mobile dropdown */
:deep(.category-filter) {
  scrollbar-width: thin;
  scrollbar-color: #f47a08 #2d2d2d;
}

:deep(.category-filter)::-webkit-scrollbar {
  width: 6px;
}

:deep(.category-filter)::-webkit-scrollbar-track {
  background: #2d2d2d;
  border-radius: 3px;
}

:deep(.category-filter)::-webkit-scrollbar-thumb {
  background: #f47a08;
  border-radius: 3px;
}

:deep(.category-filter)::-webkit-scrollbar-thumb:hover {
  background: #ff9a33;
}
</style>
