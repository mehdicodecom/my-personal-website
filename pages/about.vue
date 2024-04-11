<template>
  <Title>Mehdi Rafiei | About me | Front-end Developer</Title>

  <div
    class="relative xl:px-24 lg:(px-18 w-11/12) mx-auto md:px-16 sm:px-14 xs:px-12 xs:w-full"
  >
    <div
      class="relative xl:mt-40 lg:mt-26 md:mt-20 xs:mt-16 text-3xl font-bold"
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

    <div class="relative xl:mt-40 xs:mt-30 text-2xl font-bold">
      <span
        class="updown inline-block absolute -top-1 -left-2.5 w-12 h-12 bg-main-orange/70 rounded-full"
      ></span>
      <div class="loading textLoading inline-block">
        <span class="relative inline-block"
          >Experiences <span class="text-lg">(3 Items)</span></span
        >
      </div>
    </div>

    <div class="mt-8 flex flex-col gap-6">
      <div
        :class="[
          'bg-dark py-8 px-6 border border-zinc-700 rounded-md flex gap-4 overflow-hidden',
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
          <div class="">
            <div
              class="flex justify-between items-start sm:flex-row xs:flex-col"
            >
              <h3
                class="md:w-9/12 sm:w-8/12 xs:w-full text-xl text-main-orange font-medium"
              >
                <span class="md:ml-0 xs:ml-12">{{ experience.company }}</span>
                <span
                  class="text-white lg:(inline-block mb-0 mt-0 ml-2) sm:mb-5 xs:(block mt-3)"
                  >({{ experience.role }})</span
                >
              </h3>
              <div
                :class="[
                  'relative trans3ms flex gap-2 items-center cursor-pointer lg:(top-8) md:(top-5 mb-0 mr-6) xs:(top-2 min-w-36 mb-12)',
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

          <p class="mt-8 font-bold text-main-green">Some of tasks:</p>
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

          <p class="mt-8 font-bold text-main-cyan">
            Related Projects:
            <span class="text-sm text-white/80"
              >({{ getPortfolios(null, experience.id)?.length }} Projects)</span
            >
          </p>

          <Shared-Projects
            :current-slider-num="index + 1"
            :show-details-buttom="false"
            :slides-per-view="2"
            :about-page="true"
            :projects="getPortfolios(null, experience.id)"
            :breakpoints="related_projects_breakpoints"
          />
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
          itemsToShow: 2,
        },
      },
      skills: [
        {
          title: "Languages",
          items: "HTMl, CSS, JavaScript (EcmaScript), JSON",
        },
        {
          title: "Modules",
          items:
            "SASS, TailWind, WindiCSS, UnoCSS, I18N, VueJs, Vuex, Pinia, Nuxt, WebSocket, JQuery, BootStrap",
        },
        {
          title: "Concepts",
          items:
            "Cross Browser Compatibility, Responsive Design, SEO, PWA, SPA, Restful API, TDD, UI/UX, Agile, CI/CD",
        },
        {
          title: "Tools & etc",
          items:
            "Jira, Version Control (Git, Github), Figma, XD, Emmet, ESLint, Prettier, NPM, Yarn, Docker, PM2",
        },
      ],
      experiences: [
        {
          id: 1,
          company: "Ayandeh Bank",
          role: "Front-End Developer",
          bio: "Worked Hybrid with Ayandeh Bank. Using Jira for agile & GitLab for CI/CD",
          startDate: "Aug 2021",
          endDate: "May 2023",
          duration: "1 yr 10 mos",
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
          id: 2,
          company: "Freelance - Metriland, 4Sou & other companies",
          role: "Full-Stack Web Developmer ",
          bio: "Worked on multiple projects during freelancing & free time",
          startDate: "Jul 2017",
          endDate: "Present",
          duration: "6 yrs 2 mos",
          tasks: [
            "Designed Responsively. so almost 100% of users can view these websites perfectly on any device or browser.",
            "Used PHP MVC architecture for Back-end, to develop two times easier & cleaner than development with pure PHP.",
            "Developed an advanced online ordering system for the Namichap, So users could customize their orders with multiple options.",
          ],
          showDetails: false,
        },
        {
          id: 3,
          company: "Cactus ICT Center",
          role: "Web Developer & SEO Expert",
          bio: "Cactus ICT center is a web development company, most websites was based on WordPress CMS with some customizations",
          startDate: "Apr 2013",
          endDate: "Mar 2015",
          duration: "2 yrs",
          tasks: [
            "Taught WordPress to co-workers & launched more than 10 diﬀerent websites with WordPress.",
            "Translated & Redesigned more than 5 advanced templates for customers. ",
            "Increased companies customers & traﬃc by 50% by doing search optimization for the websites",
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
