<template>
  <transition name="scroll-to-top">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top-btn"
      aria-label="Scroll to top"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      scrollThreshold: 300, // Show button after scrolling 300px
    };
  },
  mounted() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeUnmount() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      if (process.client) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.isVisible = scrollTop > this.scrollThreshold;
      }
    },
    scrollToTop() {
      if (process.client) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #f47a08 0%, #ff9a33 100%);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(244, 122, 8, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.scroll-to-top-btn:hover {
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 8px 25px rgba(244, 122, 8, 0.4);
  background: linear-gradient(135deg, #ff9a33 0%, #f47a08 100%);
}

.scroll-to-top-btn:active {
  transform: translateY(-2px) scale(1.05);
  transition: all 0.1s ease;
}

.scroll-to-top-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(244, 122, 8, 0.3);
}

/* Animation for button appearance */
.scroll-to-top-enter-active,
.scroll-to-top-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-to-top-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.scroll-to-top-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .scroll-to-top-btn {
    bottom: 7.5rem; /* Higher above mobile navigation */
    right: 1rem;
    width: 3rem;
    height: 3rem;
  }
  
  .scroll-to-top-btn svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}

/* Pulse animation for attention */
@keyframes pulse {
  0% {
    box-shadow: 0 4px 12px rgba(244, 122, 8, 0.3);
  }
  50% {
    box-shadow: 0 4px 12px rgba(244, 122, 8, 0.6);
  }
  100% {
    box-shadow: 0 4px 12px rgba(244, 122, 8, 0.3);
  }
}

.scroll-to-top-btn:hover {
  animation: pulse 2s infinite;
}

/* Ensure button is above other elements */
.scroll-to-top-btn {
  z-index: 9999;
}
</style>
