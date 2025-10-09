<template>
  <div class="social-share-container">
    <!-- Main Share Button -->
    <div class="relative">
      <button
        @click="toggleDropdown"
        class="social-share-btn group"
        :class="{ 'active': dropdownOpen }"
      >
        <svg class="w-4 h-4 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
        </svg>
        <span class="text-sm">Share</span>
      </button>

      <!-- Dropdown Menu -->
      <div
        v-if="dropdownOpen"
        class="social-dropdown"
        @click.stop
      >
        <div class="social-options">
          <!-- Twitter/X -->
          <a
            :href="twitterUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="social-option group"
            @click="trackShare('twitter')"
          >
            <div class="social-icon twitter">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <span>X</span>
          </a>

          <!-- LinkedIn -->
          <a
            :href="linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="social-option group"
            @click="trackShare('linkedin')"
          >
            <div class="social-icon linkedin">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span>LinkedIn</span>
          </a>

          <!-- Facebook -->
          <a
            :href="facebookUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="social-option group"
            @click="trackShare('facebook')"
          >
            <div class="social-icon facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <span>Facebook</span>
          </a>

          <!-- Telegram -->
          <a
            :href="telegramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="social-option group"
            @click="trackShare('telegram')"
          >
            <div class="social-icon telegram">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <span>Telegram</span>
          </a>

               <!-- Copy Link -->
               <button
                 @click="copyToClipboard"
                 class="social-option group"
                 :class="{ 'copied': linkCopied }"
               >
                 <div class="social-icon copy">
                   <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                   </svg>
                 </div>
                 <span>{{ linkCopied ? 'Copied!' : 'Copy Link' }}</span>
               </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialShare',
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dropdownOpen: false,
      linkCopied: false
    }
  },
  computed: {
    encodedTitle() {
      return encodeURIComponent(this.title);
    },
    encodedUrl() {
      return encodeURIComponent(this.url);
    },
    twitterUrl() {
      return `https://x.com/intent/tweet?text=${this.encodedTitle}&url=${this.encodedUrl}`;
    },
    linkedinUrl() {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${this.encodedUrl}`;
    },
    facebookUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.encodedUrl}`;
    },
    telegramUrl() {
      return `https://t.me/share/url?url=${this.encodedUrl}&text=${this.encodedTitle}`;
    }
  },
  mounted() {
    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.dropdownOpen = false;
      }
    },
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.url);
        this.linkCopied = true;
        setTimeout(() => {
          this.linkCopied = false;
        }, 2000);
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = this.url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        this.linkCopied = true;
        setTimeout(() => {
          this.linkCopied = false;
        }, 2000);
      }
    },
    trackShare(platform) {
      // Analytics tracking (you can implement your analytics here)
      console.log(`Shared on ${platform}:`, this.title);
      this.dropdownOpen = false;
    }
  }
}
</script>

<style scoped>
.social-share-container {
  position: relative;
}

.social-share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1rem;
  background-color: rgba(255, 122, 0, 0.1);
  color: #ff7a00;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 122, 0, 0.2);
  transition: all 0.3s ease;
  width: 100%;
  font-weight: 500;
  gap: 0.5rem;
}

.social-share-btn:hover {
  background-color: rgba(255, 122, 0, 0.2);
  border-color: rgba(255, 122, 0, 0.4);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 122, 0, 0.2);
}

.social-share-btn.active {
  background-color: rgba(255, 122, 0, 0.2);
  border-color: rgba(255, 122, 0, 0.4);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 122, 0, 0.2);
}

.social-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: rgba(30, 30, 30, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 122, 0, 0.2);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
  z-index: 50;
  animation: slideDown 0.2s ease-out;
}

.social-options {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.social-option {
  display: flex;
  align-items: center;
  padding: 0.625rem 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
}

.social-option:hover {
  color: white;
  background-color: rgba(255, 122, 0, 0.15);
  transform: translateX(2px);
}

.social-icon {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.625rem;
  transition: all 0.2s ease;
}

.social-icon.twitter {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-icon.linkedin {
  background-color: rgba(0, 119, 181, 0.15);
  color: #0077b5;
  border: 1px solid rgba(0, 119, 181, 0.3);
}

.social-icon.facebook {
  background-color: rgba(24, 119, 242, 0.15);
  color: #1877f2;
  border: 1px solid rgba(24, 119, 242, 0.3);
}

.social-icon.telegram {
  background-color: rgba(0, 136, 204, 0.15);
  color: #0088cc;
  border: 1px solid rgba(0, 136, 204, 0.3);
}

.social-icon.copy {
  background-color: rgba(75, 85, 99, 0.15);
  color: #d1d5db;
  border: 1px solid rgba(75, 85, 99, 0.3);
}

.social-option.copied .social-icon.copy {
  background-color: rgba(34, 197, 94, 0.2);
  color: #4ade80;
  border-color: rgba(34, 197, 94, 0.4);
}

.social-option:hover .social-icon {
  transform: scale(1.1);
}

.social-option:hover .social-icon.twitter {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.3);
}

.social-option:hover .social-icon.linkedin {
  background-color: rgba(0, 119, 181, 0.25);
  color: #0077b5;
  border-color: rgba(0, 119, 181, 0.4);
}

.social-option:hover .social-icon.facebook {
  background-color: rgba(24, 119, 242, 0.25);
  color: #1877f2;
  border-color: rgba(24, 119, 242, 0.4);
}

.social-option:hover .social-icon.telegram {
  background-color: rgba(0, 136, 204, 0.25);
  color: #0088cc;
  border-color: rgba(0, 136, 204, 0.4);
}

.social-option:hover .social-icon.copy {
  background-color: rgba(75, 85, 99, 0.25);
  color: #d1d5db;
  border-color: rgba(75, 85, 99, 0.4);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .social-dropdown {
    width: 10rem;
  }
  
  .social-option {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
  
  .social-icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
}
</style>
