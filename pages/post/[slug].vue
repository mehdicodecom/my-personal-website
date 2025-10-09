<template>
  <Title>Mehdi Rafiei | {{ post.title }} | Front-end Developer</Title>

  <div
    class="relative xl:(ml-42 mr-40 px-22) lg:(ml-30 mr-30 px-18) md:(px-14 mt-30) sm:(px-8 mx-12 mt-30) xs:(px-6 mx-8 mt-24)"
  >
    <!-- Top Progress Bar -->
    <div class="top-progress-bar">
      <div 
        class="progress-fill"
        :class="{ 'progress-complete': readProgress >= 95 }"
        :style="{ width: readProgress + '%' }"
      ></div>
    </div>

             <!-- Back Button -->
             <NuxtLink
               to="/blog"
               class="absolute flex items-center gap-3 xl:(left-0 -top-16) xs:(left-0 -top-16) z-50"
             >
               <button
                 class="bg-dark-100 rounded-full p-2 hover:bg-dark transition duration-200"
               >
                 <svg :class="['rotate-180 w-10 h-10 text-main-orange']">
                   <IconArrow />
                 </svg>
               </button>
               <span class="text-main-orange font-bold text-lg">Blog</span>
             </NuxtLink>

             <!-- Content Section -->
             <div class="flex lg:flex-row flex-col gap-8 mt-10">
               <!-- Main Content -->
               <div
                 class="flex-1 bg-dark/70 rounded-lg p-8 xl:px-22 lg:px-18 md:px-8 sm:px-6 xs:px-4 border border-neutral-700 shadow-lg animate-slide-up"
               >
                 <!-- Title and Image at top of content -->
                 <div class="text-center mb-8 border-b border-neutral-700 pb-8">
                   <h1 class="font-medium text-3xl lg:text-4xl text-main-orange mb-6">
                     {{ post.title }}
                   </h1>

                   <!-- Image container with skeleton background -->
                   <div class="relative w-full" style="min-height: 24rem;">
                     <!-- Skeleton background -->
                     <div
                       v-if="!imageLoaded"
                       class="absolute inset-0 skeleton-bg rounded-md pointer-events-none"
                     ></div>

                     <img
                       :src="`/imgs/blog/${post.img}`"
                       alt=""
                       :class="['w-full h-auto object-contain max-h-96 rounded-md relative z-10', { 'loaded': imageLoaded }]"
                       @load="onImageLoad"
                     />
                   </div>
                 </div>

                 <!-- Loading state for content -->
                 <div v-if="isHighlighting" class="flex items-center justify-center py-12">
                   <div class="flex items-center space-x-3">
                     <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-main-orange"></div>
                     <span class="text-gray-300 text-lg">Processing code blocks...</span>
                   </div>
                 </div>
                 
                 <!-- Content with highlighting -->
                 <div
                   v-else
                   class="prose prose-invert prose-lg max-w-4xl mx-auto"
                   v-html="processedContent"
                 ></div>
               </div>

      <!-- Sidebar -->
      <aside
        class="lg:w-80 bg-dark/70 rounded-lg p-6 xl:px-6 lg:px-6 md:px-8 sm:px-6 xs:px-4 border border-neutral-700 shadow-lg lg:sticky lg:top-20 lg:h-fit animate-slide-up space-y-6"
      >
                 <!-- Reading Progress -->
                 <div class="sidebar-section">
                   <Shared-CircularProgress :progress="readProgress" />
                 </div>

        <!-- Divider -->
        <div class="border-t border-neutral-700"></div>

        <!-- Categories -->
        <div class="sidebar-section">
          <h3 class="text-lg font-bold text-main-orange mb-4">Categories</h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="category in post.categories"
              :key="category"
              class="bg-main-orange/20 text-main-orange text-sm px-3 py-1 rounded-full hover:bg-main-orange/30 hover:scale-105 transition duration-200"
            >
              {{ category }}
            </li>
          </ul>
        </div>

        <!-- Divider -->
        <div class="border-t border-neutral-700"></div>

        <!-- Social Share -->
        <div class="sidebar-section">
          <h3 class="text-lg font-bold text-main-orange mb-4">Share Article</h3>
          <Shared-SocialShare 
            :title="post.title" 
            :url="shareUrl" 
          />
        </div>

        <!-- Divider -->
        <div class="border-t border-neutral-700"></div>

        <!-- Metadata -->
        <div class="sidebar-section">
          <h3 class="text-lg font-bold text-main-orange mb-4">Article Info</h3>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-white/60 text-sm">Published:</span>
              <span class="text-white text-sm">{{ post.date }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-white/60 text-sm">Reading Time:</span>
              <span class="text-white text-sm">{{ readingTime }} min</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-white/60 text-sm">Word Count:</span>
              <span class="text-white text-sm">{{ wordCount }}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import usePostsStore from "@/stores/posts";

export default {
  data() {
    return {
      imageLoaded: false,
      skeletonStartTime: null,
      skeletonMinTime: 500, // Minimum time to show skeleton (500ms)
      readProgress: 0,
      isHighlighting: true, // Start with loading state for SSR
      highlightingStarted: false,
    };
  },
  computed: {
    ...mapState(usePostsStore, ["getPost"]),
    post() {
      const slug = this.$route.params.slug;
      const post = this.getPost(slug);
      if (!post) {
        throw createError({
          statusCode: 404,
          message: `${slug} Post not found`,
          fatal: true,
        });
      }
      return post;
    },
             processedContent() {
               if (!this.post?.content) return '';

               // Add language classes to code blocks for highlight.js
               let content = this.post.content;

               // More comprehensive code block detection and language assignment
               content = content.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, (match, code) => {
                 const language = this.detectLanguageFromCode(code);
                 return `<pre><code class="language-${language}">${code}</code></pre>`;
               });

               return content;
             },
    shareUrl() {
      // Ensure window is only accessed on client side
      const url = process.client
        ? window.location.href
        : `https://your-site.com/post/${this.post.slug}`; // Fallback for SSR
      return url;
    },
    readingTime() {
      if (!this.post?.content) return 0;
      const wordsPerMinute = 200;
      const wordCount = this.wordCount;
      return Math.ceil(wordCount / wordsPerMinute);
    },
    wordCount() {
      if (!this.post?.content) return 0;
      // Remove HTML tags and count words
      const textContent = this.post.content.replace(/<[^>]*>/g, ' ');
      const words = textContent.trim().split(/\s+/).filter(word => word.length > 0);
      return words.length;
    },
  },
  mounted() {
    // Record when skeleton loading started
    this.skeletonStartTime = Date.now();
    
    // Start highlighting immediately for better performance
    this.startHighlighting();
    
    // Initialize progress bar
    this.initProgressBar();
    
    // Fallback for SSR: ensure image becomes visible after a timeout
    this.$nextTick(() => {
      setTimeout(() => {
        if (!this.imageLoaded) {
          this.imageLoaded = true;
        }
      }, 2000); // 2 second fallback
    });
  },
  beforeUnmount() {
    // Clean up scroll listener
    if (process.client) {
      window.removeEventListener('scroll', this.updateProgress);
    }
  },
  updated() {
    // Re-highlight code when content updates
    this.$nextTick(() => {
      if (process.client) {
        setTimeout(() => {
          this.highlightCode();
        }, 500);
      }
    });
  },
  methods: {
    onImageLoad() {
      // Ensure minimum skeleton time for client-side loads
      const elapsed = Date.now() - this.skeletonStartTime;
      const remainingTime = Math.max(0, this.skeletonMinTime - elapsed);
      
      setTimeout(() => {
        this.imageLoaded = true;
      }, remainingTime);
    },
             detectLanguageFromCode(code) {
               const trimmedCode = code.trim();

               // JSX patterns (check for JSX syntax first) - treat as JavaScript for better highlighting
               if (trimmedCode.includes('<') && (trimmedCode.includes('className=') || trimmedCode.includes('return (') || trimmedCode.includes('function ') && trimmedCode.includes('<'))) {
                 return 'javascript';
               }

               // JavaScript/TypeScript patterns
               if (trimmedCode.includes('const ') || trimmedCode.includes('let ') || trimmedCode.includes('var ')) {
                 if (trimmedCode.includes('interface ') || trimmedCode.includes('type ') || trimmedCode.includes(': string') || trimmedCode.includes(': number')) {
                   return 'typescript';
                 }
                 return 'javascript';
               }

               if (trimmedCode.includes('function ') || trimmedCode.includes('=>') || trimmedCode.includes('import ') || trimmedCode.includes('export ')) {
                 if (trimmedCode.includes('interface ') || trimmedCode.includes('type ') || trimmedCode.includes(': string') || trimmedCode.includes(': number')) {
                   return 'typescript';
                 }
                 return 'javascript';
               }

               if (trimmedCode.includes('console.log') || trimmedCode.includes('document.') || trimmedCode.includes('window.')) {
                 return 'javascript';
               }

               // CSS patterns
               if (trimmedCode.includes('{') && (trimmedCode.includes('color:') || trimmedCode.includes('background:') || trimmedCode.includes('margin:') || trimmedCode.includes('padding:'))) {
                 return 'css';
               }

               // HTML patterns
               if (trimmedCode.includes('<div') || trimmedCode.includes('<span') || trimmedCode.includes('<h1') || trimmedCode.includes('<p')) {
                 return 'html';
               }

               // JSON patterns
               if (trimmedCode.startsWith('{') && trimmedCode.endsWith('}') || trimmedCode.startsWith('[') && trimmedCode.endsWith(']')) {
                 return 'json';
               }

               // Bash/Shell patterns
               if (trimmedCode.startsWith('#') || trimmedCode.includes('npm ') || trimmedCode.includes('yarn ') || trimmedCode.includes('git ')) {
                 return 'bash';
               }

               // Python patterns
               if (trimmedCode.includes('def ') || trimmedCode.includes('import ') || trimmedCode.includes('print(') || trimmedCode.includes('if __name__')) {
                 return 'python';
               }

               // SQL patterns
               if (trimmedCode.includes('SELECT ') || trimmedCode.includes('INSERT ') || trimmedCode.includes('UPDATE ') || trimmedCode.includes('DELETE ')) {
                 return 'sql';
               }

               // Default to JavaScript
               return 'javascript';
             },
    initProgressBar() {
      if (!process.client) return;
      
      // Add scroll listener
      window.addEventListener('scroll', this.updateProgress);
    },
    updateProgress() {
      if (!process.client) return;
      
      const article = document.querySelector('.prose');
      if (!article) return;
      
      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Calculate progress based on how much of the article has been scrolled through
      const scrolled = Math.max(0, scrollTop - articleTop);
      const totalScrollable = Math.max(1, articleHeight - windowHeight + articleTop);
      let progress = Math.min(100, Math.max(0, (scrolled / totalScrollable) * 100));
      
      // Ensure it reaches 100% when at the bottom
      if (scrollTop + windowHeight >= document.documentElement.scrollHeight - 10) {
        progress = 100;
      }
      
      this.readProgress = Math.round(progress);
    },
             highlightCode() {
               if (!process.client) {
                 return;
               }

               // Wait for highlight.js to be available with optimized retry
               const checkHljs = () => {
                 const hljs = this.$hljs || window.hljs;
                 if (hljs) {
                   this.performHighlighting(hljs);
                 } else {
                   // Minimal delay for fastest performance
                   setTimeout(checkHljs, 25);
                 }
               };

               checkHljs();
             },

             startHighlighting() {
               if (this.highlightingStarted) return;
               this.highlightingStarted = true;
               
               // Run highlighting immediately for better performance
               if (process.client) {
                 this.highlightCode();
               } else {
                 // For SSR, start highlighting as soon as client hydrates
                 this.$nextTick(() => {
                   this.highlightCode();
                 });
               }
             },

             performHighlighting(hljs) {
               try {
                 // Use highlightAll for better coverage
                 hljs.highlightAll();
                 
                 // Mark highlighting as complete
                 this.isHighlighting = false;
               } catch (error) {
                 console.error('Error in highlightAll():', error);
                 
                 // Fallback to individual highlighting
                 const codeBlocks = document.querySelectorAll('pre code[class*="language-"]');
                 
                 codeBlocks.forEach((block, index) => {
                   try {
                     // Clear any existing highlighting
                     block.innerHTML = block.textContent;
                     
                     // Apply highlighting
                     hljs.highlightElement(block);
                   } catch (error) {
                     console.error(`Error highlighting block ${index}:`, error);
                   }
                 });
                 
                 // Mark highlighting as complete even if there were errors
                 this.isHighlighting = false;
               }
             },
  },
};
</script>

<style scoped>
/* Enhanced prose styling with better spacing */
.prose :deep(h1) {
  color: #ff7a00; /* main-orange */
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.prose :deep(h2) {
  color: #ff7a00; /* main-orange */
  font-size: 2rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  border-bottom: 2px solid #404040;
  padding-bottom: 0.5rem;
}

.prose :deep(h3) {
  color: #ff7a00; /* main-orange */
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.prose :deep(h4) {
  color: #ff7a00; /* main-orange */
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.prose :deep(p) {
  color: #e5e7eb; /* light gray */
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: 1.1rem;
}

.prose :deep(ul),
.prose :deep(ol) {
  color: #d1d5db; /* lighter gray */
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.prose :deep(li) {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.prose :deep(strong) {
  color: #f8f8f2;
  font-weight: 600;
}

.prose :deep(em) {
  color: #d1d5db;
  font-style: italic;
}

.prose :deep(a) {
  color: #ff7a00;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.prose :deep(a:hover) {
  color: #ff9a33;
}

.prose :deep(blockquote) {
  margin: 2rem 0;
  padding: 1.5rem 2rem;
  border-left: 4px solid #ff7a00;
  background: #2d2d2d;
  border-radius: 0 0.5rem 0.5rem 0;
  font-style: italic;
  color: #d1d5db;
}

.prose :deep(blockquote p) {
  margin-bottom: 0;
  color: #d1d5db;
}

.prose :deep(blockquote cite) {
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #9ca3af;
  font-style: normal;
}

/* Code block styling */
.prose :deep(pre) {
  margin: 2rem 0;
  border-radius: 0.75rem;
  overflow-x: auto;
  background: #2d2d2d !important;
  border: 1px solid #404040;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.prose :deep(code) {
  font-family: 'Fira Code', 'Monaco', 'Consolas', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  background: #2d2d2d;
  color: #e6db74;
}

.prose :deep(pre code) {
  background: transparent;
  padding: 0;
  font-size: 0.9em;
  color: #f8f8f2;
}

/* Section spacing */
.prose :deep(section) {
  margin-bottom: 3rem;
}

.prose :deep(section:last-child) {
  margin-bottom: 0;
}

/* Top progress bar styling */
.top-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #374151;
  z-index: 50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff7a00, #ff9a33);
  transition: all 0.3s ease;
  box-shadow: 0 0 8px rgba(255, 122, 0, 0.4);
}

.progress-fill.progress-complete {
  background: linear-gradient(90deg, #10b981, #34d399);
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
}

         /* Sidebar section styling */
         .sidebar-section {
           display: flex;
           flex-direction: column;
           gap: 0.5rem;
         }

         .sidebar-section:last-child {
           margin-bottom: 0;
         }

         .sidebar-section h3 {
           margin-bottom: 0.75rem;
         }

/* Animations for hero and content sections */
.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out;
}
.animate-slide-up {
  animation: slideUp 0.8s ease-in-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Blog image loading states */
img {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

img.loaded {
  opacity: 1;
}

/* Skeleton background effect */
.skeleton-bg {
  background: linear-gradient(90deg, #343334 25%, #4a4a4a 50%, #343334 75%);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
}

/* Skeleton shimmer animation */
@keyframes skeleton-shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
