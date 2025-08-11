<template>
  <Title>Mehdi Rafiei | Home | Front-end Developer</Title>

  <div
    class="flex lg:(justify-center text-center items-center) mt-8 w-full overflow-hidden"
  >
    <Home-HelloWorld />
  </div>
  <div class="flex mt-10 w-full overflow-hidden mx-auto">
    <Slider :posts="posts" />
  </div>

  <Shared-Projects
    class="lg:pt-28 sm:pt-26 xl:px-20 overflow-hidden w-full lg:pl-34 xs:pl-14 xs:(pl-6 pt-30)"
    :projects="getPortfolios(8)"
    :headline="true"
    :home-page="true"
  />

  <transition name="fadeScale">
    <Shared-Gallery
      v-if="galleryVisible"
      :project="getPortfolio(activeProjectID)"
    />
  </transition>
</template>

<script>
import { mapState } from "pinia";
import useProjectsStore from "@/stores/projects";
export default {
  data() {
    return {
      posts: [
        {
          img: "ai.jpg",
          title: "Enhancing User Experience with AI in Front",
          categories: ["programming", "ai", "frontend"],
          description: `AI is transforming the way users interact with web applications, providing smarter, more personalized experiences. In this article, we’ll explore how to integrate AI-driven features such as chatbots, recommendation systems, and dynamic content generation into your front-end projects. Learn how to use AI tools to create intuitive, engaging UIs that adapt to user behavior and preferences.`,
          date: "January 30, 2025",
        },
        {
          img: "team.jpg",
          title: "Tips for Successful Teamwork in Web Development",
          categories: ["programming", "ai", "frontend"],
          description: `Effective teamwork is essential for building successful web applications. In this article, we’ll explore practical tips and strategies for fostering collaboration between front-end, back-end, and full-stack developers. Learn how to communicate better, manage tasks efficiently, and leverage each team member's strengths to create a seamless development process and deliver high-quality projects.`,
          date: "January 29, 2025",
        },

        {
          img: "react.jpg",
          title: "From Zero to React Hero: A Beginner's Guide",
          categories: ["programming", "frontend", "javascript", "react"],
          description: `React is one of the most popular JavaScript libraries for building user interfaces, but getting started can be intimidating. In this guide, we’ll walk you through the basics of React, from understanding components to managing state and handling events. By the end, you'll have the foundation you need to start building your own React applications with confidence.`,
          date: "January 30, 2025",
        },
        {
          img: "js.jpg",
          title: "The Art of Writing Clean and Maintainable JavaScript Code",
          categories: ["programming", "frontend", "javascript"],
          description: `Writing clean and maintainable JavaScript code is essential for building scalable, bug-free applications. In this article, we'll explore best practices, design patterns, and techniques that will help you write code that's easy to understand, test, and maintain over time. Whether you're a beginner or an experienced developer, mastering these principles will improve the quality and longevity of your projects.`,
          date: "January 29, 2025",
        },
        {
          img: "react-vs-vue.jpg",
          title: "Battle of the Front-End Frameworks: React vs Vue",
          categories: ["programming", "ai", "frontend"],
          description: `React and Vue are two of the most popular front-end frameworks, each offering unique strengths. In this article, we’ll compare them based on performance, ease of use, and community support, helping you decide which is best for your next web project.`,
          date: "January 29, 2025",
        },

        {
          img: "programming.jpg",
          title: "From Good to Great: Developer Growth Tips",
          categories: ["programming"],
          description: `
          Becoming a great developer isn’t just about writing code—it’s about thinking critically, solving problems efficiently, and continuously improving. In this article, we’ll explore key habits, mindset shifts, and practical strategies that can help you level up your development skills and stand out in the tech world. 🚀`,
          date: "January 29, 2025",
        },
      ],
    };
  },
  computed: {
    ...mapState(useProjectsStore, [
      "galleryVisible",
      "activeProjectID",
      "getPortfolio",
      "getPortfolios",
    ]),
  },
};
</script>
