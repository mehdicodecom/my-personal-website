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

    <div class="flex items-start md:flex-row xs:flex-col">
      <div class="flex-1 sm:(order-1 mr-10) xs:order-2">
        <div class="flex items-start gap-6">
          <div class="loading textLoading mt-6 inline-block">
            <p class="xl:w-200 lg:w-160 xs:w-full text-lg">
              With over six years of expertise in web development, I possess a
              keen ability to envision designs through the lens of the audience
              and craft exceptional user experiences. Recognizing that the front
              end serves as the initial point of contact for users, I am
              committed to delivering top-notch user interfaces that contribute
              significantly to the success of businesses.
            </p>
          </div>
          <img
            src="/imgs/about/mehdi.jpg"
            alt=""
            class="md:hidden sm:(inline-block max-w-50) xs:hidden rounded-md shadow-lg"
          />
        </div>

        <div class="relative lg:mt-20 md:mt-14 xs:mt-12 text-2xl font-bold">
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
              <div class="inline-block">
                <span
                  class="text-xl inline-block font-medium text-main-orange min-w-28 sm:inline-block xs:block"
                >
                  {{ skill.title }}:
                </span>
                <span>{{ skill.items }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <img
        src="/imgs/about/mehdi.jpg"
        alt=""
        class="md:(w-86 inline-block) sm:hidden xs:(mt-8 w-60 mx-auto) rounded-md shadow-lg order-1"
      />
    </div>

    <div class="relative xl:mt-20 xs:mt-30 text-2xl font-bold">
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
        :class="[
          'relative bg-dark/70 py-8 xs:(py-6) px-6 border border-zinc-700 rounded-md flex gap-4 overflow-hidden',
          experience.showDetails
            ? 'transMaxHeightIn lg:max-h-310 md:max-h-340 sm:max-h-360 xs:max-h-460'
            : 'transMaxHeightOut lg:max-h-40 md:(max-h-34) sm:max-h-30 xs:max-h-46',
        ]"
        v-for="(experience, index) in experiences"
      >
        <span
          class="md:relative xs:absolute inline-block min-w-8 h-8 bg-main-orange rounded-full flex items-center justify-center"
        >
          <span
            class="inline-block w-7 h-7 bg-main-orange border-7 border-dark rounded-full"
          ></span>
        </span>

        <div class="md:w-[calc(100%-2rem)] xs:w-full">
          <div>
            <div
              class="w-full flex justify-between items-start sm:flex-row xs:flex-col"
            >
              <h3
                class="md:w-9/12 sm:w-8/12 xs:w-full text-xl text-main-orange font-medium"
              >
                <span class="md:ml-0 xs:ml-12">{{ experience.company }}</span>
                <span
                  class="text-white lg:(inline-block mb-0 mt-0 ml-2) sm:mb-5 xs:(block mt-4)"
                  >({{ experience.role }})</span
                >
              </h3>
              <div
                :class="[
                  'trans3ms flex gap-2 items-center cursor-pointer md:(absolute top-9 right-8 mb-0) xs:(relative top-2 min-w-36 mb-12)',
                  experience.showDetails ? 'text-red' : 'text-main-green',
                ]"
                @click="experience.showDetails = !experience.showDetails"
              >
                <svg class="w-8 h-8 text-white-3 select-none">
                  <use
                    :href="`/imgs/icons.svg#eye_${
                      experience.showDetails ? 'close' : 'open'
                    }`"
                  ></use>
                </svg>
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

          <p class="mt-10 font-bold text-main-green">Some of tasks:</p>
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
          <use :href="`/imgs/icons.svg#edu`"></use>
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
import { mapState } from "pinia";
import useProjectsStore from "@/stores/projects";

export default {
  data() {
    return {
      related_projects_breakpoints: {
        320: {
          itemsToShow: 1,
        },
        900: {
          itemsToShow: 1.2,
        },
        1200: {
          itemsToShow: 1.5,
        },
        1400: {
          itemsToShow: 1.6,
        },
        1600: {
          itemsToShow: 1.8,
        },
        1900: {
          itemsToShow: 3,
        },
      },
      skills: [
        {
          title: "Languages",
          items: "HTML, CSS, JavaScript (ECMAScript), TypeScript, NodeJS, JSON",
        },
        {
          title: "Modules",
          items:
            "Vue, Vuex, Nuxt, SASS, Tailwind, UnoCSS, I18N, Jest, Webpack, WebSocket, jQuery, Bootstrap",
        },
        {
          title: "Concepts",
          items:
            "Responsive Design, Restful APIs, UI/UX Design, SEO, Cross-Browser compatibility, PWA, Core web vitals, SPA",
        },
        {
          title: "Tools & etc",
          items:
            "Version Control (Git, GitHub, GitLab), Jira, Figma, Emmet, ESLint, Prettier, NPM, Yarn, Docker, PM2",
        },
      ],
      experiences: [
        {
          id: 6,
          company: "Sarmayex",
          role: "Senior Front-End Developer",
          bio: "Sarmayex is one of the top trading platforms in iran with more than 1.5 million users.",
          startDate: "Mar 2024",
          endDate: "Current",
          duration: "6 mos",
          tasks: [
            "Developed new features like pre-market, loaning system, wheel of luck, demo trading which was helpful for gaining more users (more than 1 million users).",
            "Fixed bugs related to the loading of internal TradingView charts, corrected transaction calculation errors, and addressed responsive design issues to enhance overall functionality and user experience.",
            "Added an update log system to show users improvements on each version increase of app.",
            "Cached some requests to avoid server overhead & Implemented SSE for real-time markets data update.",
            "Implemented image optimization techniques such as lazy loading, and using next-gen formats (e.g., WebP) to reduce load times.",
            "Minimized render-blocking resources (e.g., CSS and JavaScript) to improve LCP across web pages.",
          ],
          showDetails: false,
        },
        {
          id: 4,
          company: "Mega",
          role: "Senior Front-End Developer",
          bio: "Mega One of the biggest car sales platforms & an consulting company for e-commerce services.",
          startDate: "Sep 2023",
          endDate: "Feb 2024",
          duration: "6 mos",
          tasks: [
            "Completed development of official website of mega with Nuxt 3, which had so many animation requirements, page transitions & extra.",
            "Created custom multi carousel component to use different places of the app without using external libraries.",
            "Implemented auto exporting multiple pdfs around each one filled with dynamic data from API, into single compressed ZIP file. Via some libraries like JS Zip",
            "Designed a custom admin panel with Prime Vue for 1 of the products",
            "Presented some tutorials about writing tests for projects to front end team. Introducing Unit, Integration, Snapshot, E2E testing to coworkers.",
            "Improved code quality by refactoring components, removing redundancies, and optimizing structure for improved maintainability and readability.",
          ],
          showDetails: false,
        },
        {
          id: 1,
          company: "Ayandeh Bank",
          role: "Front-End Developer",
          bio: "Worked Hybrid with Ayandeh Bank. Using Jira for agile & GitLab for CI/CD",
          startDate: "Aug 2021",
          endDate: "Jul 2023",
          duration: "2 yrs",
          tasks: [
            "Designed all pages Responsively with Cross-Browser Compatibility so 100% of users can view pages perfectly in any device",
            "Added multi language support for ﬁnnotex.com increased traﬃcs by 50%. Almost 70% of users prefer native language.",
            "Completed theme switch feature because at least 80% of users prefer to choose a theme between Dark & Light. ",
            "Developed PWA Features like oﬄine mode, caching & web apps & got 50% more traﬃc & number of users raised 20% .",
            "Implemented socket-based communications for notiﬁcation system & chat. 80% of users wanted real-time updates.",
            "Had excellent communications with back-end developers for debugging issues & calling APIs. for example, sensitive data gets encoded on API calls in both ways to prevent MITM attacks. ",
          ],
          showDetails: false,
        },
        {
          id: 3,
          company: "Cactus ICT Center",
          role: "Web Developer & SEO Expert",
          bio: "Cactus ICT center is a web development company.",
          startDate: "Jul 2019",
          endDate: "Jun 2021",
          duration: "2 yrs",
          tasks: [
            "Taught WordPress to co-workers & launched more than 10 diﬀerent websites with WordPress.",
            "Translated & Redesigned more than 5 advanced templates for customers. ",
            "Increased companies customers & traﬃc by 50% by doing search optimization for the websites",
          ],
          showDetails: false,
        },
        {
          id: 2,
          company: "Freelance - Contract projects",
          role: "Full-Stack Web Developmer ",
          bio: "Worked on multiple projects during freelancing & free time",
          startDate: "Jul 2017",
          endDate: "Present",
          duration: "7 yrs",
          tasks: [
            "Designed Responsively. so almost 100% of users can view these websites perfectly on any device or browser.",
            "Used PHP MVC architecture for Back-end, to develop two times easier & cleaner than development with pure PHP.",
            "Developed an advanced online ordering system for the Namichap, So users could customize their orders with multiple options.",
          ],
          showDetails: false,
        },
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
};
</script>

<style scoped></style>
