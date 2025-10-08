<template>
  <div class="pagination-container" v-if="totalPages > 1">
    <div class="flex items-center justify-center gap-2 md:gap-2 sm:gap-3">
      <!-- Previous Button -->
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        :class="[
          'px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 relative z-10',
          'md:px-3 md:py-2 sm:px-3 sm:py-2 sm:min-h-[40px]',
          currentPage === 1
            ? 'bg-dark-200 text-white/50 cursor-not-allowed'
            : 'bg-dark-200 text-white/80 hover:bg-main-orange hover:text-white hover:scale-105'
        ]"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="hidden md:inline">Previous</span>
      </button>

      <!-- Page Numbers -->
      <div class="flex items-center gap-1 md:gap-1 sm:gap-2">
        <button
          v-for="page in visiblePages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'px-3 py-2 rounded-lg font-medium transition-all duration-300 min-w-[40px] relative z-10',
            'md:px-3 md:py-2 md:min-w-[40px] sm:px-2 sm:py-2 sm:min-w-[32px] sm:text-sm sm:min-h-[40px]',
            page === '...'
              ? 'cursor-default text-white/50'
              : currentPage === page
              ? 'bg-main-orange text-white shadow-lg shadow-main-orange/30'
              : 'bg-dark-200 text-white/80 hover:bg-dark-300 hover:text-white hover:scale-105'
          ]"
          :disabled="page === '...'"
        >
          {{ page }}
        </button>
      </div>

      <!-- Next Button -->
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        :class="[
          'px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 relative z-10',
          'md:px-3 md:py-2 sm:px-3 sm:py-2 sm:min-h-[40px]',
          currentPage === totalPages
            ? 'bg-dark-200 text-white/50 cursor-not-allowed'
            : 'bg-dark-200 text-white/80 hover:bg-main-orange hover:text-white hover:scale-105'
        ]"
      >
        <span class="hidden md:inline">Next</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <!-- Page Info -->
    <div class="text-center mt-4 text-white/60 text-sm hidden md:block">
      Showing {{ startItem }}-{{ endItem }} of {{ totalItems }} items
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 6
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    startItem() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    endItem() {
      const end = this.currentPage * this.itemsPerPage;
      return Math.min(end, this.totalItems);
    },
    visiblePages() {
      const pages = [];
      const total = this.totalPages;
      const current = this.currentPage;
      
      if (total <= 7) {
        // Show all pages if 7 or fewer
        for (let i = 1; i <= total; i++) {
          pages.push(i);
        }
      } else {
        // Always show first page
        pages.push(1);
        
        if (current <= 4) {
          // Show pages 1, 2, 3, 4, 5, ..., last
          for (let i = 2; i <= 5; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(total);
        } else if (current >= total - 3) {
          // Show 1, ..., last-4, last-3, last-2, last-1, last
          pages.push('...');
          for (let i = total - 4; i <= total; i++) {
            pages.push(i);
          }
        } else {
          // Show 1, ..., current-1, current, current+1, ..., last
          pages.push('...');
          for (let i = current - 1; i <= current + 1; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(total);
        }
      }
      
      return pages;
    }
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
        this.$emit('page-changed', page);
      }
    }
  }
};
</script>

<style scoped>
.pagination-container {
  animation: fadeInUp 0.4s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button hover effects */
button:not(:disabled):hover {
  transform: scale(1.05);
}

button:not(:disabled):active {
  transform: scale(0.95);
}
</style>
