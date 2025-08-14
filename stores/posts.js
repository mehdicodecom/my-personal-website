import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export default defineStore("posts", {
  state: () => ({
    posts: [
      {
        id: uuidv4(),
        title: "Enhancing User Experience with AI in Front",
        slug: "enhancing-user-experience-with-ai-in-front",
        img: "ai.jpg",
        categories: ["programming", "ai", "frontend"],
        description: `AI is transforming the way users interact with web applications, providing smarter, more personalized experiences. In this article, we’ll explore how to integrate AI-driven features such as chatbots, recommendation systems, and dynamic content generation into your front-end projects. Learn how to use AI tools to create intuitive, engaging UIs that adapt to user behavior and preferences.`,
        date: "January 30, 2025",
        content: `<p>AI is transforming the way users interact with web applications, providing smarter, more personalized experiences. In this article, we’ll explore how to integrate AI-driven features such as chatbots, recommendation systems, and dynamic content generation into your front-end projects. Learn how to use AI tools to create intuitive, engaging UIs that adapt to user behavior and preferences.</p>`
      },
      {
        id: uuidv4(),
        title: "Tips for Successful Teamwork in Web Development",
        slug: "tips-for-successful-teamwork-in-web-development",
        img: "team.jpg",
        categories: ["programming", "ai", "frontend"],
        description: `Effective teamwork is essential for building successful web applications. In this article, we’ll explore practical tips and strategies for fostering collaboration between front-end, back-end, and full-stack developers. Learn how to communicate better, manage tasks efficiently, and leverage each team member's strengths to create a seamless development process and deliver high-quality projects.`,
        date: "January 29, 2025",
        content: `<p>Effective teamwork is essential for building successful web applications. In this article, we’ll explore practical tips and strategies for fostering collaboration between front-end, back-end, and full-stack developers. Learn how to communicate better, manage tasks efficiently, and leverage each team member's strengths to create a seamless development process and deliver high-quality projects.</p>`
      },
      {
        id: uuidv4(),
        title: "From Zero to React Hero: A Beginner's Guide",
        slug: "from-zero-to-react-hero-a-beginners-guide",
        img: "react.jpg",
        categories: ["programming", "frontend", "javascript", "react"],
        description: `React is one of the most popular JavaScript libraries for building user interfaces, but getting started can be intimidating. In this guide, we’ll walk you through the basics of React, from understanding components to managing state and handling events. By the end, you'll have the foundation you need to start building your own React applications with confidence.`,
        date: "January 30, 2025",
        content: `<p>React is one of the most popular JavaScript libraries for building user interfaces, but getting started can be intimidating. In this guide, we’ll walk you through the basics of React, from understanding components to managing state and handling events. By the end, you'll have the foundation you need to start building your own React applications with confidence.</p>`
      },
      {
        id: uuidv4(),
        title: "The Art of Writing Clean and Maintainable JavaScript Code",
        slug: "the-art-of-writing-clean-and-maintainable-javascript-code",
        img: "js.jpg",
        categories: ["programming", "frontend", "javascript"],
        description: `Writing clean and maintainable JavaScript code is essential for building scalable, bug-free applications. In this article, we'll explore best practices, design patterns, and techniques that will help you write code that's easy to understand, test, and maintain over time. Whether you're a beginner or an experienced developer, mastering these principles will improve the quality and longevity of your projects.`,
        date: "January 29, 2025",
        content: `<p>Writing clean and maintainable JavaScript code is essential for building scalable, bug-free applications. In this article, we'll explore best practices, design patterns, and techniques that will help you write code that's easy to understand, test, and maintain over time. Whether you're a beginner or an experienced developer, mastering these principles will improve the quality and longevity of your projects.</p>`
      },
      {
        id: uuidv4(),
        title: "Battle of the Front-End Frameworks: React vs Vue",
        slug: "battle-of-the-front-end-frameworks-react-vs-vue",
        img: "react-vs-vue.jpg",
        categories: ["programming", "ai", "frontend"],
        description: `React and Vue are two of the most popular front-end frameworks, each offering unique strengths. In this article, we’ll compare them based on performance, ease of use, and community support, helping you decide which is best for your next web project.`,
        date: "January 29, 2025",
        content: `<p>React and Vue are two of the most popular front-end frameworks, each offering unique strengths. In this article, we’ll compare them based on performance, ease of use, and community support, helping you decide which is best for your next web project.</p>`
      },
      {
        id: uuidv4(),
        title: "From Good to Great: Developer Growth Tips",
        slug: "from-good-to-great-developer-growth-tips",
        img: "programming.jpg",
        categories: ["programming"],
        description: `Becoming a great developer isn’t just about writing code—it’s about thinking critically, solving problems efficiently, and continuously improving. In this article, we’ll explore key habits, mindset shifts, and practical strategies that can help you level up your development skills and stand out in the tech world. 🚀`,
        date: "January 29, 2025",
        content: `<p>Becoming a great developer isn’t just about writing code—it’s about thinking critically, solving problems efficiently, and continuously improving. In this article, we’ll explore key habits, mindset shifts, and practical strategies that can help you level up your development skills and stand out in the tech world. 🚀</p>`
      }
    ]
  }),
  getters: {
    getPosts: (state) => (howMany) => {
      return state.posts.slice(0, howMany || state.posts.length);
    },
    getPost: (state) => (slug) => {
      return state.posts.find(post => post.slug === slug);
    }
  }
});