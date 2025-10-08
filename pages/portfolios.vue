<template>
  <Title>Mehdi Rafiei | Portfolios | Front-end Developer</Title>

  <div>
    <Shared-Projects
      :projects="paginatedProjects"
      :portfolios-page="true"
      :headline="true"
      :slide-auto-play="homeProjectsSwiper.autoPlay"
      :selected-category="selectedCategory"
      :total-projects-count="allProjects.length"
      @category-selected="onCategorySelected"
    />
    
    <!-- Pagination -->
    <div class="xl:(ml-42 mr-40 px-22) lg:(ml-30 mr-30 px-18) md:(px-14 mt-8) sm:(px-8 mx-12 mt-8) xs:(px-6 mx-8 mt-8)">
      <Shared-Pagination
        :current-page="currentPage"
        :total-items="filteredProjects.length"
        :items-per-page="itemsPerPage"
        @page-changed="onPageChanged"
      />
    </div>
    
    <transition name="fadeScale">
      <Shared-Gallery
        v-if="galleryVisible"
        :project="getPortfolio(activeProjectID)"
      />
    </transition>
  </div>
</template>

<script>
import { mapState } from "pinia";
import useProjectsStore from "@/stores/projects";
export default {
  data() {
    return {
      selectedCategory: 'all',
      currentPage: 1,
      itemsPerPage: 6,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        770: {
          slidesPerView: 2,
          spaceBetween: 50,
        },

        771: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      homeProjectsSwiper: {
        slidesPerView: 2,
        autoPlay: {
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      },
    };
  },
  computed: {
    ...mapState(useProjectsStore, [
      "getPortfolios",
      "galleryVisible",
      "activeProjectID",
      "getPortfolio",
    ]),
    allProjects() {
      return this.getPortfolios();
    },
    filteredProjects() {
      return this.getPortfolios(null, null, this.selectedCategory);
    },
    paginatedProjects() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProjects.slice(start, end);
    }
  },
  watch: {
    '$route.query': {
      handler(newQuery) {
        this.selectedCategory = newQuery.category || 'all';
        this.currentPage = parseInt(newQuery.page) || 1;
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
      this.preventOverflowDuringTransition();
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
    preventOverflowDuringTransition() {
      // Add overflow hidden to body during transition
      document.body.style.overflowX = 'hidden';
      
      // Remove it after animation completes
      setTimeout(() => {
        document.body.style.overflowX = '';
      }, 500); // Slightly longer than animation duration
    },
    updateQuery() {
      const query = {};
      if (this.selectedCategory !== 'all') {
        query.category = this.selectedCategory;
      }
      if (this.currentPage > 1) {
        query.page = this.currentPage.toString();
      }
      
      this.$router.replace({ 
        path: this.$route.path, 
        query: Object.keys(query).length ? query : {} 
      });
    }
  }
};
</script>

<style scoped></style>
