import { defineStore } from "pinia";
export default defineStore("projects", {
  state: () => ({
    portfolios: [
      {
        name: "Metriland",
        title: "Tokenizing Realstates",
        description:
          "MetriLand offers investment on realstates by tokens, even with small budget you can get profit",
        media: [
          {
            type: "img",
            title: "Home Page",
            src: "/projects/metriland/fullpage.png",
            transition: "10s",
            autoScroll: true,
          },
          {
            type: "img",
            title: "Projects Page",
            src: "/projects/metriland/projects.png",
            transition: "4s",
            scroll: true,
          },
          {
            type: "img",
            title: "Signup Page",
            src: "/projects/metriland/signup.png",
          },
          {
            type: "img",
            title: "Login Page",
            src: "/projects/metriland/login.png",
          },
          {
            type: "img",
            title: "OTP Part of Forms",
            src: "/projects/metriland/otp.png",
          },
          {
            type: "img",
            title: "Signup Page Last Part Setting Password",
            src: "/projects/metriland/signup-lastpart.png",
          },
        ],
        mainMedia: 0,
        used: ["html", "css", "js", "nuxt", "vue", "pinia", "unocss"],
        related_experience_id: 2,
      },
      {
        name: "FinnoTex",
        title: "Trading CryptoCurrencies",
        description:
          "This platform (FinnoTex) has many features like advanced trading and OTC trading.",
        media: [
          {
            type: "video",
            src: "/projects/finnotex/finnotex.mp4",
            title: "Video of almost all sections",
          },
          {
            type: "img",
            src: "/projects/finnotex/home.png",
            title: "Home Page Light Version",
            transition: "4s",
            scroll: true,
          },
          {
            type: "img",
            src: "/projects/finnotex/blog.png",
            title: "Blog Light Version",
            transition: "4s",
            scroll: true,
          },
          {
            type: "img",
            src: "/projects/finnotex/home-dark.png",
            title: "Home Page Dark Version",
            transition: "4s",
            scroll: true,
          },
          {
            type: "img",
            src: "/projects/finnotex/otc.png",
            title: "OTC Trading Light Page",
            transition: "3s",
            scroll: true,
          },
          {
            type: "img",
            src: "/projects/finnotex/otc-dark.png",
            title: "OTC Trading Dark Page",
            transition: "3s",
            scroll: true,
          },
          {
            type: "img",
            src: "/projects/finnotex/trade.png",
            title: "Advanced Trading Light Page",
            transition: "3s",
            scroll: true,
          },
          {
            type: "img",
            src: "/projects/finnotex/trade-dark.png",
            title: "Advanced Trading Dark Page",
            transition: "3s",
            scroll: true,
          },
        ],
        mainMedia: 0,
        used: ["html", "css", "js", "nuxt", "vue", "tradingview", "responsive"],
        related_experience_id: 1,
      },
      {
        name: "FinnoBot",
        title: "Automatic Trading",
        description:
          "Buy automatic trading bots and connect to ur trading accounts like binance and get profit with it",
        media: [
          {
            type: "video",
            title: "Video of different sections",
            src: "/projects/finnobot/video.mp4",
          },
          {
            type: "img",
            title: "Header of Home Page",
            src: "/projects/finnobot/home-header.jpg",
          },
        ],
        mainMedia: 0,
        used: ["html", "css", "js", "nuxt", "vue", "tradingview", "responsive"],
        related_experience_id: 1,
      },
      {
        name: "Rotana",
        title: "Bank Tokens Trading System",
        description:
          "This platform was meant to be used on banks for trading special tokens",
        media: [
          {
            type: "video",
            title: "Project video",
            src: "/projects/rotana/video.mp4",
          },
          {
            type: "img",
            title: "Home Page",
            src: "/projects/rotana/home.png",
          },
          {
            type: "img",
            title: "Legal user buying token step one",
            src: "/projects/rotana/legal-buy.png",
          },
          {
            type: "img",
            title: "Legal user buying token step two",
            src: "/projects/rotana/legal-buy-2.png",
          },
          {
            type: "img",
            title: "Legal user buying token step three",
            src: "/projects/rotana/legal-buy-3.png",
          },
          {
            type: "img",
            title:
              "Added section in buying token - online Ayandeh Bank receipt coded",
            src: "/projects/rotana/online-receipt.png",
          },
          {
            type: "img",
            title: "Legal user buying token step five",
            src: "/projects/rotana/legal-buy-5.png",
          },
          {
            type: "img",
            title: "Banker Dashboard",
            src: "/projects/rotana/banker-dashboard.png",
          },
          {
            type: "img",
            title: "Treasurer Dashboard",
            src: "/projects/rotana/treasurer-dashboard.png",
          },
          {
            type: "img",
            title: "Banker orders report page",
            src: "/projects/rotana/banker-order-report.png",
          },
          {
            type: "img",
            title: "Banker order details page",
            src: "/projects/rotana/banker-order-details.png",
          },
          {
            type: "img",
            title: "Assigned order report",
            src: "/projects/rotana/assigned-order-details.png",
          },
        ],
        mainMedia: 0,
        used: ["html", "css", "js", "nuxt", "vue", "tailwind", "responsive"],
        related_experience_id: 1,
      },
      {
        name: "4Sou",
        title: "Job Searching for immigrants",
        description:
          "4sou was a large app with multiple languages support for immigrants to find their dream jobs",
        img: "4sou-English.png",
        media: [
          {
            type: "video",
            title: "Video",
            src: "/projects/4sou/4sou.webm",
          },
          {
            type: "img",
            title: "Home Page in English",
            src: "/projects/4sou/4sou-English.png",
          },
          {
            type: "img",
            title: "Home Page in Germany",
            src: "/projects/4sou/4sou-germany.png",
          },
          {
            type: "img",
            title: "Home Page in Persian",
            src: "/projects/4sou/4sou-persian.png",
          },
          {
            type: "img",
            title: "Home Page in Arabic",
            src: "/projects/4sou/4sou-arabic.png",
          },
          {
            type: "img",
            title: "Admin Panel in english",
            src: "/projects/4sou/dashboard-english.png",
          },
          {
            type: "img",
            title: "Legal user buying token step five",
            src: "/projects/4sou/dashboard-persian.png",
          },
          {
            type: "img",
            title: "Panel home page slider settings",
            src: "/projects/4sou/panel.png",
          },
          {
            type: "img",
            title: "Panel Video",
            src: "/projects/4sou/panel.webm",
          },
        ],
        mainMedia: 0,
        used: ["html", "css", "js", "sass", "nuxt", "vue"],
        related_experience_id: 2,
      },
      {
        name: "Andisheh",
        title: "Online Library",
        description: "Full of different books to read online",
        media: [
          {
            type: "img",
            title: "Home page of the library",
            src: "/projects/library/andishe-library.png",
          },
          {
            type: "img",
            title: "Books page with filters",
            src: "/projects/library/books.png",
          },
          {
            type: "img",
            title: "Single book page",
            src: "/projects/library/book-details.png",
            transition: "4s",
            scroll: true,
          },
          {
            type: "img",
            title: "User Dashboard - Saved Books",
            src: "/projects/library/my books.png",
          },
          {
            type: "img",
            title: "Online reading book",
            src: "/projects/library/read-book.png",
          },
          {
            type: "img",
            title: "List of study courses",
            src: "/projects/library/list-of-study-courses.png",
          },
          {
            type: "img",
            title: "Legal user buying token step five",
            src: "/projects/library/dashboard-persian.png",
          },
          {
            type: "img",
            title: "All Theses",
            src: "/projects/library/all-theses.png",
          },
          {
            type: "video",
            title: "Library video",
            src: "/projects/library/library-video.webm",
          },
        ],
        mainMedia: 0,
        used: ["html", "css", "js", "sass", "responsive"],
        related_experience_id: 2,
      },
      {
        name: "MakanChap",
        title: "Printing services",
        description:
          "Ordering online printing services based on type & format & other customizations of users",
        media: [
          {
            type: "img",
            title: "Header of Home page",
            src: "/projects/makanchap/home.png",
          },
          {
            type: "img",
            title: "Footer of home page",
            src: "/projects/makanchap/footer.png",
          },
          {
            type: "img",
            title: "Finishing order process, selecting shipment way",
            src: "/projects/makanchap/order-process.png",
          },
          {
            type: "img",
            title: "Product page",
            src: "/projects/makanchap/product.png",
          },
        ],
        mainMedia: 0,
        used: ["html", "css", "js", "jquery", "php", "responsive"],
        related_experience_id: 2,
      },
      {
        name: "Delijan",
        title: "Products for baby safety",
        description:
          "Producer of products like Baby Carseat,Baby Stroller,Baby Walker & etc",
        media: [
          {
            type: "img",
            title: "Home page",
            src: "/projects/delijan/home-full.png",
          },
          {
            type: "img",
            title: "Products page",
            src: "/projects/delijan/products-page.jpg",
          },
          {
            type: "img",
            title: "Services page",
            src: "/projects/delijan/services-page.png",
          },
          {
            type: "img",
            title: "Single product page",
            src: "/projects/delijan/single-product.jpg",
          },
          {
            type: "img",
            title: "Showing related insta posts with insta API",
            src: "/projects/delijan/insta-posts.jpg",
          },
          {
            type: "img",
            title: "English version of products page",
            src: "/projects/delijan/products-en.png",
          },
          {
            type: "img",
            title: "Admin Panel - editing gallery section of product",
            src: "/projects/delijan/product-gallery-admin.png",
          },
          {
            type: "img",
            title: "Admin Panel - editing product details",
            src: "/projects/delijan/edit-product-admin.png",
          },
        ],
        mainMedia: 0,
        used: ["html", "css", "js", "jquery", "php", "responsive"],
        related_experience_id: 2,
      },
      {
        name: "SoundsLand",
        title: "Find your favorite music",
        description: "New Music website with powerful search engine for musics",
        media: [
          {
            type: "img",
            title: "Banner",
            src: "/projects/soundsland/banner.jpg",
          },
          {
            type: "img",
            title: "Home page",
            src: "/projects/soundsland/home.png",
          },
          {
            type: "img",
            title: "Single music page",
            src: "/projects/soundsland/music-page.png",
          },
          {
            type: "img",
            title: "Music page + singer info",
            src: "/projects/soundsland/music-page-toggled.png",
          },
          {
            type: "img",
            title: "Music page + comments",
            src: "/projects/soundsland/music-comments.png",
          },
          {
            type: "video",
            title: "Demo",
            src: "/projects/soundsland/demo.webm",
          },
        ],
        mainMedia: 0,
        used: ["html", "css", "js", "jquery"],
        related_experience_id: 3,
      },
      {
        name: "KavanPergas",
        title: "Artificial Ice Cloud Generator",
        description:
          "Artificial Cloud Generator for weddings and ceminars with ice and water",
        media: [
          {
            type: "img",
            title: "Home page",
            src: "/projects/kavanpergas/home.jpg",
          },
          {
            type: "img",
            title: "Home Header",
            src: "/projects/kavanpergas/header.jpg",
          },
          {
            type: "img",
            title: "Home page services slider",
            src: "/projects/kavanpergas/slider.png",
            transition: "4s",
            scroll: true,
          },
          {
            type: "img",
            title: "Letter of commendation for the design",
            src: "/projects/kavanpergas/commendation.jpg",
            transition: "3s",
            scroll: true,
          },
        ],
        mainMedia: 1,
        used: ["html", "css", "js", "jquery", "wordpress"],
        related_experience_id: 3,
      },
      {
        name: "WordPress",
        title: "Projects",
        description:
          "Some of personal or freelance projects developed with WordPress CMS",
        media: [
          {
            type: "img",
            title: "Pro Web 3 - Home Page",
            src: "/projects/wordpress/proweb3.jpg",
          },
          {
            type: "img",
            title: "Creativity & Ideas Website - Home Page",
            src: "/projects/wordpress/creativity.jpg",
          },
        ],
        mainMedia: 1,
        used: ["html", "css", "js", "wordpress", "responsive"],
        related_experience_id: 3,
      },
    ],
  }),
  getters: {
    getPortfolios: (state) => {
      return (howMany, related_experience_id) => {
        let portfolios = [];
        portfolios = state.portfolios.slice(
          0,
          howMany || state.portfolios.length
        );
        if (related_experience_id) {
          portfolios = state.portfolios.filter((portfolio) => {
            return portfolio.related_experience_id === related_experience_id;
          });
        }

        return portfolios;
      };
    },
    getPortfolio: (state) => {
      return (name) => {
        console.log(name);
        return state.portfolios.find(
          (portfolio) => portfolio.name.toLowerCase() === name.toLowerCase()
        );
      };
    },
  },
});
