<template>
  <section 
    ref="sectionRef"
    class="relative py-20 bg-dark/20 mb-2"
  >
    <div class="xl:px-20 lg:pl-34 px-6">
      <div class="text-center mb-12 opacity-0">
        <div class="loading textLoading inline-block">
          <h2 class="text-4xl font-bold text-white mb-4">
            <span class="text-main-orange">What I</span> Do
          </h2>
        </div>
        <p class="text-white/70 text-lg">
          Services I provide to help bring your ideas to life
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="group bg-dark/50 p-6 rounded-lg border border-zinc-700 hover:border-main-orange/50 transition-all duration-300 hover:transform hover:scale-105 opacity-0"
        >
          <div class="text-center">
            <div class="w-16 h-16 bg-main-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-main-orange/30 transition-colors duration-300">
              <svg class="w-8 h-8" :class="service.color">
                <component :is="service.icon" />
              </svg>
            </div>
            
            <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-main-orange transition-colors duration-300">
              {{ service.title }}
            </h3>
            
            <p class="text-white/70 text-sm leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 opacity-0">
        <nuxt-link
          to="/contact-me"
          class="inline-flex items-center gap-2 px-8 py-4 bg-main-orange text-white rounded-lg hover:bg-main-orange/80 transition-colors duration-200 text-lg font-semibold"
        >
          <span>Let's Work Together</span>
          <svg class="w-5 h-5">
            <IconArrow />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const sectionRef = ref(null)

const services = ref([
  {
    id: 'frontend',
    title: 'Front-end Development',
    description: 'Modern, responsive web applications using Vue.js, React, and TypeScript',
    icon: 'IconGlobe',
    color: 'text-blue-400'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Implementation',
    description: 'Converting designs into pixel-perfect, interactive user interfaces',
    icon: 'IconEyeOpen',
    color: 'text-purple-400'
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Optimizing Core Web Vitals and improving loading speeds',
    icon: 'IconZoom',
    color: 'text-green-400'
  },
  {
    id: 'seo',
    title: 'SEO Enhancement',
    description: 'Implementing SEO best practices and technical optimizations',
    icon: 'IconLink',
    color: 'text-orange-400'
  }
])

onMounted(() => {
  // Add scroll-triggered animation for the entire section
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the title first
          gsap.fromTo(sectionRef.value.querySelector('.text-center'), 
            { 
              opacity: 0, 
              y: 50
            },
            { 
              opacity: 1, 
              y: 0,
              duration: 0.8,
              ease: "power2.out"
            }
          )
          
          // Then animate the service cards with more visible effect
          gsap.fromTo(sectionRef.value.querySelectorAll('.group'), 
            { 
              opacity: 0, 
              y: 60,
              scale: 0.8,
              rotationX: 15
            },
            { 
              opacity: 1, 
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 0.6, 
              stagger: 0.25,
              ease: "power2.out",
              delay: 0.3
            }
          )
          
          // Animate the CTA button last
          gsap.fromTo(sectionRef.value.querySelector('.text-center.mt-12'), 
            { 
              opacity: 0, 
              y: 30
            },
            { 
              opacity: 1, 
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              delay: 1.2
            }
          )
          
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>
