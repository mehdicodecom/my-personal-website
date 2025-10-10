<template>
  <section 
    ref="sectionRef"
    class="relative pt-0 pb-16"
  >
    <div class="xl:px-20 lg:pl-34 px-6 max-w-6xl mx-auto">
      <div class="bg-gradient-to-r from-main-orange/10 to-main-green/10 rounded-2xl p-8 md:p-12 border border-main-orange/20">
        <div class="text-center mb-8">
          <div class="loading textLoading inline-block">
            <h2 class="text-3xl font-bold text-white mb-4">
              <span class="text-main-orange">Let's</span> Connect
            </h2>
          </div>
          <p class="text-white/70 text-lg">
            Ready to start your next project? Let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="text-center">
            <div class="w-12 h-12 bg-main-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-main-orange">
                <IconMail />
              </svg>
            </div>
            <p class="text-white font-medium">Email Me</p>
            <p class="text-white/70 text-sm">Career@mehdicode.com</p>
          </div>

          <div class="text-center">
            <div class="w-12 h-12 bg-main-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-main-orange">
                <IconClock />
              </svg>
            </div>
            <p class="text-white font-medium">Response Time</p>
            <p class="text-white/70 text-sm">Within 24 hours</p>
          </div>

          <div class="text-center">
            <div class="w-12 h-12 bg-main-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-main-orange">
                <IconGlobe />
              </svg>
            </div>
            <p class="text-white font-medium">Availability</p>
            <p class="text-white/70 text-sm">Open to new projects</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <nuxt-link
            to="/contact-me"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-main-orange text-white rounded-lg hover:bg-main-orange/80 transition-colors duration-200 font-semibold"
          >
            <span>Get In Touch</span>
            <svg class="w-5 h-5">
              <IconArrow />
            </svg>
          </nuxt-link>

          <a
            href="/Mehdi Rafiei - FrontEnd Developer.pdf"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-main-orange text-main-orange rounded-lg hover:bg-main-orange hover:text-white transition-colors duration-200 font-semibold"
          >
            <svg class="w-5 h-5">
              <IconPdf />
            </svg>
            <span>Download Resume</span>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const sectionRef = ref(null)

onMounted(() => {
  // Add scroll-triggered animation for the entire section
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(sectionRef.value.querySelector('.bg-gradient-to-r'), 
            { 
              opacity: 0, 
              y: 50,
              scale: 0.95
            },
            { 
              opacity: 1, 
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out"
            }
          )
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>
