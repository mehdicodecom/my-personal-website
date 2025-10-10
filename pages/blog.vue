<template>
  <Title>Mehdi Rafiei | Blog | Front-end Developer</Title>

  <div class="relative xl:px-22 lg:(px-18 w-full) mx-auto md:px-16 sm:px-14 xs:px-12 xs:w-full mt-20">
    <!-- Header -->
    <div class="relative text-3xl font-bold mb-8">
      <span
          class="updown inline-block absolute -top-1 -left-2.5 w-14 h-14 bg-main-orange rounded-full"
      ></span>
      <div class="loading textLoading inline-block">
        <span class="relative inline-block">Blog Posts <span class="text-lg" v-if="filteredPosts.length">({{ filteredPosts.length }} items)</span></span>
      </div>
    </div>

    <!-- Compact Filters -->
    <div class="mb-8">
      <Shared-CompactBlogFilters
        :categories="categories"
        :selected-category="selectedCategory"
        :category-counts="categoryCounts"
        :search-query="searchQuery"
        @category-selected="onCategorySelected"
        @search-changed="onSearchChanged"
      />
    </div>

    <!-- Blog Posts Grid -->
    <section class="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-8 mb-12">
      <Shared-BlogCard
        v-for="post in paginatedPosts"
        :key="post.id"
        :post="post"
      />
    </section>

    <!-- Pagination -->
    <div class="flex justify-center">
      <Shared-Pagination
        :current-page="currentPage"
        :total-items="filteredPosts.length"
        :items-per-page="itemsPerPage"
        @page-changed="onPageChanged"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from "pinia";
import usePostsStore from "@/stores/posts";

export default {
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      currentPage: 1,
      itemsPerPage: 6,
    };
  },
  computed: {
    ...mapState(usePostsStore, ["getPosts", "getCategories", "getCategoryCounts"]),
    categories() {
      return this.getCategories;
    },
    categoryCounts() {
      return this.getCategoryCounts;
    },
    filteredPosts() {
      return this.getPosts(null, this.searchQuery, this.selectedCategory);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPosts.slice(start, end);
    }
  },
  watch: {
    '$route.query': {
      handler(newQuery) {
        this.selectedCategory = newQuery.category || 'all';
        this.currentPage = parseInt(newQuery.page) || 1;
        this.searchQuery = newQuery.search || '';
      },
      immediate: true
    }
  },
  methods: {
    onCategorySelected(category) {
      this.selectedCategory = category;
      this.currentPage = 1; // Reset to first page when category changes
      this.updateQuery();
      this.scrollToTop();
    },
    onSearchChanged(query) {
      this.searchQuery = query;
      this.currentPage = 1; // Reset to first page when search changes
      this.updateQuery();
    },
    onPageChanged(page) {
      this.currentPage = page;
      this.updateQuery();
      this.scrollToTop();
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    updateQuery() {
      const query = {};
      if (this.selectedCategory !== 'all') {
        query.category = this.selectedCategory;
      }
      if (this.currentPage > 1) {
        query.page = this.currentPage.toString();
      }
      if (this.searchQuery) {
        query.search = this.searchQuery;
      }
      
      this.$router.replace({ 
        path: this.$route.path, 
        query: Object.keys(query).length ? query : {} 
      });
    }
  }
};
</script>