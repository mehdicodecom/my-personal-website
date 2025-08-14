<template>
  <Title>Mehdi Rafiei | Blog | Front-end Developer</Title>

  <div class="relative xl:px-22 lg:(px-18 w-full) mx-auto md:px-16 sm:px-14 xs:px-12 xs:w-full mt-20">
    <div class="relative text-3xl font-bold">
      <span
          class="updown inline-block absolute -top-1 -left-2.5 w-14 h-14 bg-main-orange rounded-full"
      ></span>
      <div class="loading textLoading inline-block">
        <span class="relative inline-block">Blog Posts <span class="text-lg" v-if="filteredPosts.length">({{ filteredPosts.length }} items)</span></span>
      </div>
    </div>
    <div class="mt-6 flex justify-center">
      <input
          v-model="searchQuery"
          type="text"
          placeholder="Search posts by title, description, or category..."
          class="w-full max-w-lg px-5 py-3 rounded-lg bg-dark/50 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-main-orange transition duration-200"
      />
    </div>
    <section class="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6 mt-10">
      <div
          v-for="post in filteredPosts"
          :key="post.id"
          class="relative bg-dark/70 rounded-lg flex flex-col gap-4 items-center py-6 px-4 shadow-lg group hover:shadow-xl hover:bg-dark/80 transition duration-300 transform hover:-translate-y-1"
      >
        <NuxtLink :to="`/post/${post.slug}`" class="absolute z-30 w-full h-full"></NuxtLink>
        <img
            :src="`/imgs/blog/${post.img}`"
            alt=""
            class="w-full h-48 object-cover rounded-md group-hover:scale-105 transition duration-500"
        />
        <section class="flex flex-col gap-2 items-center text-center">
          <div class="loading textLoading inline-block">
            <p class="font-medium text-xl text-main-orange">{{ post.title }}</p>
          </div>
          <div class="loading textLoading inline-block">
            <p class="text-white/80 text-sm">{{ post.date }}</p>

          </div>
          <div class="loading textLoading inline-block">
            <p class="text-lg opacity-70 group-hover:opacity-100 transition duration-300">{{ post.description }}</p>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from "pinia";
import usePostsStore from "@/stores/posts";

export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    ...mapState(usePostsStore, ["getPosts"]),
    posts() {
      return this.getPosts();
    },
    filteredPosts() {
      if (!this.searchQuery) return this.posts;
      const query = this.searchQuery.toLowerCase();
      return this.posts.filter(
          (post) =>
              post.title.toLowerCase().includes(query) ||
              post.description.toLowerCase().includes(query) ||
              post.categories.some((category) => category.toLowerCase().includes(query))
      );
    },
  },
};
</script>