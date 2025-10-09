<template>
  <Title>Mehdi Rafiei | About me | Front-end Developer</Title>

  <div
      class="relative xl:px-22 lg:(px-18 w-full) mx-auto md:px-16 sm:px-14 xs:px-12 xs:w-full"
  >
    <div
        class="relative xl:mt-16 lg:mt-26 md:mt-20 xs:mt-16 text-3xl font-bold"
    >
      <span
          class="updown inline-block absolute -top-1 -left-2.5 w-14 h-14 bg-main-orange rounded-full"
      ></span>
      <div class="loading textLoading inline-block">
        <span class="relative inline-block">About Me</span>
      </div>
    </div>

    <div >
      <div class="flex-1 sm:(order-1 mr-10) xs:order-2">
        <div class="flex items-start gap-6">
          <div class="loading textLoading mt-5 inline-block">
            <p class="text-lg">
              <strong>Over 6 years’ experience</strong> building high-performance, responsive, and SEO-friendly web applications in <strong>FinTech, cryptocurrency, and
              e-commerce</strong>.
              <br/>
              Led front-end development for 10+ major projects using modern frameworks to deliver
              <strong>seamless, scalable UI/UX for global audiences.</strong>
              <br/><br/>
              <strong>Open to Hybrid, Remote and Relocation Opportunities..</strong>
            </p>
          </div>
        </div>

        <div class="relative lg:mt-12 md:mt-14 xs:mt-12 text-2xl font-bold">
          <span
              class="updown inline-block absolute -top-1 -left-2.5 w-12 h-12 bg-main-orange/70 rounded-full"
          ></span>
          <div class="loading textLoading inline-block">
            <span class="relative inline-block">Skills</span>
          </div>
        </div>

        <ul class="flex flex-col gap-4 mt-8">
          <li class="" v-for="skill in skills">
            <div class="loading textLoading inline-block">
              <div class="sm:inline-flex gap-2">
                <span
                    class="text-xl inline-block font-medium text-main-orange  sm:inline-block xs:block"
                >
                  {{ skill.title }}:
                </span>
                <span>{{ skill.items }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="relative mt-14 text-2xl font-bold">
      <span
          class="updown inline-block absolute -top-1 -left-2.5 w-12 h-12 bg-main-orange/70 rounded-full"
      ></span>
      <div class="loading textLoading inline-block">
        <span class="relative inline-block"
        >Experiences
          <span class="text-lg" v-if="experiences.length"
          >({{ experiences.length }} Items)</span
          ></span
        >
      </div>
    </div>

    <div class="mt-8 flex flex-col gap-6">
      <div
          ref="experienceRefs"
          :class="[
            'transition-max-height duration-400 ease-linear relative bg-dark/70 py-10 2xl:py-6 px-6 border border-zinc-700 rounded-md flex gap-4 overflow-hidden max-h-[148px]'
          ]"
          v-for="(experience, index) in experiences"
          :key="experience.id"
      >
        <span
            class="sm:relative xs:absolute inline-block min-w-8 h-8 bg-main-orange rounded-full flex items-center justify-center"
        >
          <span
              class="inline-block w-7 h-7 bg-main-orange border-7 border-dark rounded-full"
          ></span>
        </span>

        <div class="sm:w-[calc(100%-2rem)] xs:w-full">
          <div>
            <div
                class="w-full flex justify-between items-start sm:flex-row xs:flex-col"
            >
              <h3
                  class="sm:w-9/12 xs:w-full text-xl text-main-orange font-medium"
              >
                <span class="sm:ml-0 xs:ml-12">{{ experience.company }}</span>
                <span
                    class="text-white lg:(inline-block mb-0 mt-0 ml-2) xs:(block mt-4)"
                >({{ experience.role }})</span
                >
              </h3>
              <div
                  :class="[
                  'select-none transition duration-300 ease-in-out flex gap-2 items-center cursor-pointer sm:(absolute top-9 right-8 mb-0) xs:(relative top-2 min-w-36 mb-12)',
                  experience.showDetails ? 'text-red' : 'text-main-green',
                ]"
                  @click="toggleDetails(index, experience)"
              >
                <IconEyeClose v-if="experience.showDetails" class="w-8 h-8 text-white-3 select-none" />
                <IconEyeOpen v-else class="w-8 h-8 text-white-3 select-none" />
                <p class="text-lg font-bold">
                  {{ experience.showDetails ? "Hide Details" : "Show Details" }}
                </p>
              </div>
            </div>

            <p :class="['mt-2 text-lg', experience.showDetails]">
              {{ experience.bio }}
            </p>

            <p :class="['mt-1 text-white/60', experience.showDetails]">
              {{ experience.startDate }} - {{ experience.endDate }} ·
              {{ experience.duration }}
            </p>
          </div>

          <p class="mt-14 font-bold text-main-green">Some of tasks:</p>
          <ul class="flex flex-col gap-2 mt-2 text-white/80 w-11/12">
            <li
                v-for="task in experience.tasks"
                class="flex items-center gap-2"
            >
              <span
                  class="inline-block min-w-2 min-h-2 bg-stone-400 rounded-full"
              ></span>
              <p>{{ task }}</p>
            </li>
          </ul>

          <template v-if="getPortfolios(null, experience.id)?.length">
            <p class="mt-8 font-bold text-main-cyan">
              Related Projects:
              <span class="text-sm text-white/80"
              >({{
                  getPortfolios(null, experience.id)?.length
                }}
                Projects)</span
              >
            </p>

            <Shared-Projects
                :current-slider-num="index + 1"
                :show-details-buttom="false"
                :slides-per-view="3"
                :about-page="true"
                :projects="getPortfolios(null, experience.id)"
                :breakpoints="related_projects_breakpoints"
            />
          </template>
        </div>
      </div>
    </div>

    <div class="relative mt-20 text-2xl font-bold">
      <span
          class="updown inline-block absolute -top-1 -left-2.5 w-12 h-12 bg-main-orange/70 rounded-full"
      ></span>
      <div class="loading textLoading inline-block">
        <span class="relative inline-block">Education </span>
      </div>
    </div>

    <transition name="fadeScale">
      <Shared-Gallery
          v-if="galleryVisible"
          :project="getPortfolio(activeProjectID)"
      />
    </transition>

    <div class="mt-8 flex flex-col gap-6">
      <div
          v-for="edu in educations"
          class="bg-dark py-8 px-6 border border-zinc-700 rounded-md flex gap-4"
      >
        <svg class="w-10 h-10 text-main-orange select-none">
          <IconEdu />
        </svg>

        <div>
          <h3 class="text-xl text-main-orange font-medium">
            {{ edu.college }}
            <span class="text-white md:inline-block xs:block"
            >({{ edu.degree }})</span
            >
          </h3>

          <p class="mt-1 text-white/60">
            {{ edu.startYear }} - {{ edu.endYear }}
          </p>

          <ul class="flex gap-6 mt-3 text-white/80 md:flex-row xs:flex-col">
            <li><p class="text-main-green font-bold">Courses:</p></li>
            <li v-for="subject in edu.subjects" class="flex items-center gap-2">
              <span
                  class="inline-block w-2 h-2 bg-stone-400 rounded-full"
              ></span>
              <p>{{ subject }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "pinia";
import useProjectsStore from "@/stores/projects";
import gsap from "gsap";

export default {
  data() {
    return {
      related_projects_breakpoints: {
        320: {
          itemsToShow: 1,
        },
        700:{
          itemsToShow: 1.2,
        },
        900: {
          itemsToShow: 1.4,
        },
        1200: {
          itemsToShow: 2,
        },
        1840: {
          itemsToShow: 3,
        },
      },
      skills: [
        {
          "title": "Languages",
          "items": "HTML5, CSS3, JavaScript (ES6+), TypeScript, Node.js, JSON (Data Format)"
        },
        {
          "title": "Frameworks & Libraries",
          "items": "Vue.js (Nuxt, Vuetify, Pinia, Vuex, PrimeVue), React.js (Next.js, Redux), SCSS, Tailwind CSS, UnoCSS, Bootstrap, jQuery, Lodash"
        },
        {
          "title": "Testing",
          "items": "Vitest, Cypress, Jest"
        },
        {
          "title": "Concepts",
          "items": "Responsive Web Design, RESTful API Integration, UI/UX Design, SEO Optimization, Core Web Vitals, Cross-Browser Compatibility, Progressive Web Apps (PWA), Single Page Applications (SPA), Internationalization (i18n), WebSockets, Server-Sent Events (SSE), Front-End Architecture, Performance Optimization"
        },
        {
          "title": "Tools",
          "items": "Git, GitHub, GitLab, Jira, Figma, Emmet, ESLint, Prettier, NPM, Yarn, Docker, PM2"
        }
      ],
      experiences: [
        {
          "id": 7,
          "company": "BitBank Company",
          "role": "Senior Front-End Developer",
          "bio": "BitBank is a multi-language cryptocurrency exchange platform.",
          "startDate": "Feb 2025",
          "endDate": "Current",
          "duration": "Ongoing",
          "tasks": [
            "Created a modular JavaScript support widget with automated builds and iframe integration, deployed across Next.js and Vue projects including BitBank3.com.",
            "Implemented multi-language support for BitBank’s cryptocurrency exchange platform.",
            "Delivered Sim Pay as a PWA for financial transactions (Paya, Card-to-Card, Satna, Pol) and payment link generation.",
            "Packaged Nuxt.js projects as Android APKs via Capacitor and Android Studio for cross-platform deployment.",
            "Built Sim Card services with customizable card design and geolocation-based delivery.",
            "Implemented KYC with video verification and face detection for secure onboarding.",
            "Optimized the landing page (Next.js) with SEO enhancements including sitemap, canonical URLs, and structural improvements.",
            "Developed Sim Pay admin panel with Excel/PDF export and interactive statistical charts for data analysis.",
            "Enhanced the main multi-language landing page with high-quality animations and interactive elements to improve engagement."
          ],
          "showDetails": false
        },
        {
          "id": 6,
          "company": "Sarmayex",
          "role": "Senior Front-End Developer",
          "bio": "Sarmayex is one of the top trading platforms in Iran with more than 1.5 million users.",
          "startDate": "Jun 2024",
          "endDate": "Feb 2025",
          "duration": "9 mos",
          "tasks": [
            "Developed major new features, including pre-market tools, loaning system, interactive prize wheel, demo trading mode, and a Telegram mini-app game — contributing to acquiring over 1M users.",
            "Resolved critical issues with internal Trading View chart loading, corrected transaction calculation inaccuracies, and optimized responsive layouts to improve system reliability and overall user experience.",
            "Implemented request caching and Server-Sent Events (SSE) for real-time market data, reducing server load and improving responsiveness.",
            "Built an update log system to communicate new features and improvements with each version release."
          ],
          "showDetails": false
        },
        {
          "id": 4,
          "company": "Mega",
          "role": "Senior Front-End Developer",
          "bio": "Mega is one of the biggest car sales platforms & an consulting company for e-commerce services.",
          "startDate": "Sep 2023",
          "endDate": "Jun 2024",
          "duration": "10 mos",
          "tasks": [
            "Delivered the company’s official website using Nuxt 3, implementing advanced animations and smooth page transitions.",
            "Engineered a reusable multi-carousel component without external dependencies, enabling flexibility across multiple application areas.",
            "Automated the export of multiple API-driven PDFs into a single ZIP file using JS Zip.",
            "Designed a custom admin panel with PrimeVue for internal product management.",
            "Conducted workshops for the front-end team on Unit, Integration, Snapshot, and E2E testing.",
            "Improved maintainability by refactoring components, removing redundancies, and optimizing architecture."
          ],
          "showDetails": false
        },
        {
          "id": 1,
          "company": "Ayandeh Bank",
          "role": "Front-End Developer",
          "bio": "Worked Hybrid with Ayandeh Bank. Using Jira for agile & GitLab for CI/CD.",
          "startDate": "Aug 2021",
          "endDate": "Jul 2023",
          "duration": "2 yrs",
          "tasks": [
            "Collaborated in a hybrid Agile environment using Jira and GitLab for streamlined workflows.",
            "Led front-end development for FinnoTex, an advanced trading platform supporting spot, limit, and OTC trading.",
            "Engineered the front-end for FinnoBot, a subscription-based bot trading platform integrated with Binance, KuCoin, and others, enabling asset allocation, analysis, and automated orders.",
            "Enhanced security with encrypted API communications and 2FA, reducing security incidents by 30%.",
            "Implemented real-time notifications via WebSocket, increasing user engagement by 20%."
          ],
          "showDetails": false
        },
        {
          "id": 3,
          "company": "Cactus ICT Center",
          "role": "Web Developer & SEO Expert",
          "bio": "Cactus ICT center is a web development company.",
          "startDate": "Jul 2019",
          "endDate": "Jun 2021",
          "duration": "2 yrs",
          "tasks": [
            "Optimized responsive websites for cross-device and cross-browser compatibility, increasing mobile engagement by 30%.",
            "Applied performance optimization techniques, improving load speeds by 25% and boosting SEO rankings.",
            "Developed a guest ordering feature that converted guest accounts to registered accounts, increasing registrations by 35%.",
            "Created a customizable online ordering system, increasing online orders by 25% and user satisfaction by 15%."
          ],
          "showDetails": false
        },
        {
          "id": 2,
          "company": "Freelance projects",
          "role": "Full-Stack Web Developer",
          "bio": "Worked on multiple projects during freelancing & free time",
          "startDate": "Jul 2017",
          "endDate": "Present",
          "duration": "8 yrs",
          "tasks": [
            "Designed Responsively. so almost 100% of users can view these websites perfectly on any device or browser.",
            "Used PHP MVC architecture for Back-end, to develop two times easier & cleaner than development with pure PHP.",
            "Developed an advanced online ordering system for the Namichap, So users could customize their orders with multiple options."
          ],
          "showDetails": false
        }
      ],
      educations: [
        {
          college: "AmirKabir High School",
          degree: "Diploma in Computer Science",
          subjects: [
            "Computer Networks",
            "Operating Systems",
            "Web Design",
            "C++",
          ],
          startYear: "2014",
          endYear: "2018",
        },
      ],
    };
  },
  computed: {
    ...mapState(useProjectsStore, [
      "getPortfolios",
      "galleryVisible",
      "activeProjectID",
      "getPortfolio",
    ]),
  },
  methods: {
    toggleDetails(index, experience) {
      const element = this.$refs.experienceRefs[index];
      experience.showDetails = !experience.showDetails;

      if (experience.showDetails) {
        gsap.to(element, {
          maxHeight: element.scrollHeight + 28,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(element, {
          maxHeight: 160,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    },
  },
};
</script>
<style scoped>
test {

}
</style>