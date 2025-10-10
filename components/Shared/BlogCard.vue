<template>
  <article class="blog-card group">
    <NuxtLink :to="`/post/${post.slug}`" class="blog-card-link">
      <!-- Image Container -->
      <div class="blog-card-image-container">
        <img
          :src="`/imgs/blog/${post.img}`"
          :alt="post.title"
          class="blog-card-image"
        />
        <div class="blog-card-overlay">
          <div class="blog-card-categories">
            <span
              v-for="category in post.categories.slice(0, 2)"
              :key="category"
              class="blog-card-category-tag"
            >
              {{ category }}
            </span>
          </div>
          <div class="blog-card-read-more">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Content Container -->
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <time class="blog-card-date">{{ post.date }}</time>
          <div class="blog-card-reading-time">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{{ getReadingTime() }} min read</span>
          </div>
        </div>

        <h3 class="blog-card-title">{{ post.title }}</h3>
        
        <p class="blog-card-description">{{ post.description }}</p>

        <div class="blog-card-footer">
          <div class="blog-card-author">
            <div class="blog-card-author-avatar">
              <img src="/imgs/about/mehdi.jpg" alt="Mehdi Rafiei" class="w-8 h-8 rounded-full object-cover">
            </div>
            <div class="blog-card-author-info">
              <span class="blog-card-author-name">Mehdi Rafiei</span>
              <span class="blog-card-author-title">Front-end Developer</span>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    getReadingTime() {
      if (!this.post?.content) return 1;
      const wordsPerMinute = 200;
      // Remove HTML tags and count words from the full content
      const textContent = this.post.content.replace(/<[^>]*>/g, ' ');
      const words = textContent.trim().split(/\s+/).filter(word => word.length > 0);
      const wordCount = words.length;
      return Math.ceil(wordCount / wordsPerMinute) || 1; // Minimum 1 minute
    }
  }
};
</script>

<style scoped>
.blog-card {
  position: relative;
  background: linear-gradient(135deg, rgba(28, 28, 28, 0.8) 0%, rgba(52, 51, 52, 0.6) 100%);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  transform: translateY(0);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-card:hover {
  box-shadow: 0 20px 40px rgba(244, 122, 8, 0.15);
  transform: translateY(-8px);
}

.blog-card-link {
  display: block;
  height: 100%;
}

.blog-card-image-container {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.blog-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.blog-card:hover .blog-card-image {
  transform: scale(1.1);
}

.blog-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
}

.blog-card:hover .blog-card-overlay {
  opacity: 1;
}

.blog-card-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.blog-card-category-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(244, 122, 8, 0.9);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  backdrop-filter: blur(4px);
}

.blog-card-read-more {
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
}

.blog-card:hover .blog-card-read-more {
  transform: scale(1.1);
  background: #f47a08;
}

.blog-card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.blog-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

.blog-card-date {
  font-weight: 500;
}

.blog-card-reading-time {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.blog-card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  line-height: 1.25;
  background: linear-gradient(135deg, #ffffff 0%, #f47a08 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card-footer {
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-card-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.blog-card-author-avatar {
  flex-shrink: 0;
}

.blog-card-author-info {
  display: flex;
  flex-direction: column;
}

.blog-card-author-name {
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
}

.blog-card-author-title {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
}

/* Loading animation */
.blog-card {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .blog-card-content {
    padding: 1rem;
  }
  
  .blog-card-image-container {
    height: 180px;
  }
  
  .blog-card-title {
    font-size: 1.125rem;
  }
}
</style>
