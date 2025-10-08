<template>
  <div class="circular-progress-container">
    <div class="circular-progress" :style="{ '--progress': progress }">
      <svg class="progress-ring" width="80" height="80">
        <circle
          class="progress-ring-circle"
          stroke="#374151"
          stroke-width="4"
          fill="transparent"
          r="36"
          cx="40"
          cy="40"
        />
        <circle
          class="progress-ring-circle progress-ring-fill"
          :class="{ 'progress-complete': progress >= 95 }"
          stroke="#ff7a00"
          stroke-width="4"
          fill="transparent"
          r="36"
          cx="40"
          cy="40"
          :style="{ strokeDasharray: circumference, strokeDashoffset: strokeDashoffset }"
        />
      </svg>
             <div class="progress-text">
               <span class="progress-percentage" :class="{ 'progress-complete': progress >= 95 }">{{ progress }}%</span>
               <span class="progress-label" :class="{ 'progress-complete': progress >= 95 }">Read</span>
             </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircularProgress',
  props: {
    progress: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0 && value <= 100
    }
  },
  computed: {
    circumference() {
      return 2 * Math.PI * 36; // radius = 36
    },
    strokeDashoffset() {
      return this.circumference - (this.progress / 100) * this.circumference;
    }
  }
}
</script>

<style scoped>
.circular-progress-container {
  display: flex;
  justify-content: center;
}

.circular-progress {
  position: relative;
  display: inline-block;
  animation: pulse 2s infinite;
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring-circle {
  transition: all 0.3s ease-in-out;
}

.progress-ring-fill {
  stroke-linecap: round;
  filter: drop-shadow(0 0 6px rgba(255, 122, 0, 0.4));
  transition: all 0.3s ease;
}

.progress-ring-fill.progress-complete {
  stroke: #10b981;
  filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.4));
}

.progress-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

       .progress-percentage {
         font-size: 1.125rem;
         font-weight: bold;
         color: #ff7a00;
         line-height: 1;
         transition: color 0.3s ease;
       }

       .progress-percentage.progress-complete {
         color: #10b981;
       }

       .progress-label {
         font-size: 0.75rem;
         color: #9ca3af;
         line-height: 1;
         margin-top: 0.25rem;
         transition: color 0.3s ease;
       }

       .progress-label.progress-complete {
         color: #10b981;
       }

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Hover effect */
.circular-progress:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

.circular-progress:hover .progress-ring-fill {
  filter: drop-shadow(0 0 8px rgba(255, 122, 0, 0.6));
}
</style>
