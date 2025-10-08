import hljs from 'highlight.js'
import 'highlight.js/lib/languages/javascript'
import 'highlight.js/lib/languages/xml' // For HTML
import 'highlight.js/lib/languages/bash'
import 'highlight.js/lib/languages/css'
import 'highlight.js/lib/languages/json'

// Configure highlight.js to handle JSX properly
hljs.configure({
  // Enable JSX highlighting within JavaScript
  languages: ['javascript', 'html', 'bash', 'css', 'json'],
  // Configure JSX to be treated as JavaScript with HTML-like syntax
  classPrefix: 'hljs-'
})

export default defineNuxtPlugin(() => {
  // Make highlight.js available globally
  if (process.client) {
    window.hljs = hljs
  }
  
  return {
    provide: {
      hljs
    }
  }
})
