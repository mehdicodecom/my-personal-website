import {defineStore} from "pinia";
import {v4 as uuidv4} from "uuid";

export default defineStore("projects", {
    state: () => ({
        portfolios: [
            {
                id: uuidv4(),
                name: "BitBank",
                title: "Professional Crypto Exchange",
                description: "BitBank offers secure spot, P2P, futures, and fiat trading, including forex and gold, with real-time data, staking, and 24/7 support.",
                media: [
                    {
                        type: "img",
                        title: "Dark English landing page",
                        src: "/projects/bitbank/home-en-dark.png",
                        scroll: true,
                        transition: "12s",
                    },
                    {
                        type: "video",
                        title: "Platform Demo",
                        src: "/projects/bitbank/bitbank.mp4",
                        scroll: true,
                        transition: "2s"
                    },
                    {
                        type: "img",
                        title: "Trade crypto Page",
                        src: "/projects/bitbank/trade.png",
                        scroll: true,
                        transition: "2s"
                    },
                    {
                        type: "img",
                        title: "Persian Blog (academy) page (dark)",
                        src: "/projects/bitbank/academy-dark.png",
                        scroll: true,
                        transition: "8s"
                    },
                    {
                        type: "img",
                        title: "Tutorial Videos (Television section)",
                        src: "/projects/bitbank/tv-dark.png",
                        scroll: true,
                        transition: "8s"
                    },

                    {
                        type: "img",
                        title: "BitCast (podcasts)",
                        src: "/projects/bitbank/bitcast.png",
                        scroll: true,
                        transition: "6s"
                    },
                    {
                        type: "img",
                        title: "Single Post page (academy) persian",
                        src: "/projects/bitbank/academy-post-dark.png",
                        scroll: true,
                        transition: "18s"
                    },
                ],
                mainMedia: 0,
                used: ["nuxt", "pinia", "unocss", "tradingview"],
                related_experience_id: 7
            },
            {
                id: uuidv4(),
                name: "Sarmayex Market",
                title: "Advanced Trading",
                description: "Sarmayex Market offers advanced crypto trading with real-time data, P2P functionality, and user-friendly price analytics.",
                media: [
                    {
                        type: "img",
                        title: "Market Trading",
                        src: "/projects/sarmayex-market/sarmayex-market.png",
                        scroll: true,
                        transition: "2s"
                    },
                    {
                        type: "video",
                        title: "Demo video",
                        src: "/projects/sarmayex-market/market.mp4",
                    },
                    {
                        type: "video",
                        title: "Market mobile version demo",
                        src: "/projects/sarmayex-market/market-mobile.mp4",
                        mobile: true,
                    },
                    {
                        type: "img",
                        title: "Mobile chart and other sections",
                        src: "/projects/sarmayex-market/mobile-chart.png",
                        scroll: true,
                        transition: "2s",
                        mobile: true,
                    },
                    {
                        type: "img",
                        title: "Mobile Sell tab",
                        src: "/projects/sarmayex-market/sell.png",
                        scroll: true,
                        transition: "2s",
                        mobile: true,
                    },
                    {
                        type: "img",
                        title: "Mobile Buy tab",
                        src: "/projects/sarmayex-market/mobile.png",
                        scroll: true,
                        transition: "2s",
                        mobile: true,
                    },
                    {
                        type: "img",
                        title: "Mobile Markets list",
                        src: "/projects/sarmayex-market/markets.png",
                        scroll: true,
                        transition: "2s",
                        mobile: true,
                    },
                ],
                mainMedia: 0,
                used: ["nuxt", "pinia", "unocss", "tradingview"],
                related_experience_id: 6
            },
            {
                id: uuidv4(),
                name: "Sarmayex",
                title: "Cryptocurrency OTC Exchange",
                description:
                    "Sarmayex enables secure OTC trading for 537+ cryptocurrencies with real-time pricing, staking, 24/7 support, and 1.5M+ users.",
                media: [
                    {
                        type: "img",
                        title: "Home Page",
                        src: "/projects/sarmayex/home.png",
                        scroll: true,
                        transition: "24s",
                    },
                    {
                        type: "video",
                        title: "Full demo video",
                        src: "/projects/sarmayex/sarmayex.mp4",
                    },
                    {
                        type: "img",
                        title: "Live cryptocurrencies prices",
                        src: "/projects/sarmayex/currencies.png",
                        scroll: true,
                        transition: "10s",
                    },
                    {
                        type: "img",
                        title: "Interactive prize wheel",
                        src: "/projects/sarmayex/interactive-luck-wheel.png",
                    },
                    {
                        type: "img",
                        title: "User Dashboard",
                        src: "/projects/sarmayex/dashboard.png",
                        scroll: true,
                        transition: "3s",
                    },
                    {
                        type: "img",
                        title: "Deposit rial",
                        src: "/projects/sarmayex/deposit-rial.png",
                        scroll: true,
                        transition: "2s",
                    },
                    {
                        type: "img",
                        title: "Deposit Crypto (USDT)",
                        src: "/projects/sarmayex/deposit-usdt.png",
                        scroll: true,
                        transition: "2s",
                    },
                    {
                        type: "img",
                        title: "OTC Buy page",
                        src: "/projects/sarmayex/otc.png",
                        scroll: true,
                        transition: "2s",
                    },
                    {
                        type: "img",
                        title: "OTC Sell page",
                        src: "/projects/sarmayex/otc-sell.png",
                        scroll: true,
                        transition: "2s",
                    },
                    {
                        type: "img",
                        title: "Login",
                        src: "/projects/sarmayex/login.png",
                    },
                    {
                        type: "img",
                        title: "User Profile",
                        src: "/projects/sarmayex/profile.png",
                        scroll: true,
                        transition: "2s",
                    },
                    {
                        type: "img",
                        title: "User Wallet",
                        src: "/projects/sarmayex/wallet.png",
                        scroll: true,
                        transition: "2s",
                    },
                    {
                        type: "img",
                        title: "User security settings",
                        src: "/projects/sarmayex/security-settings.png",
                        scroll: true,
                        transition: "4s",
                    },
                    {
                        type: "img",
                        title: "User login",
                        src: "/projects/sarmayex/login.png",
                    },
                ],
                mainMedia: 0,
                used: ["nuxt", "pinia", "unocss"],
                related_experience_id: 6,
            },
            {
                id: uuidv4(),
                name: "Iranecar",
                title: "Vehicle Sales & Leasing Platform",
                description:
                    "Mega provides a platform for buying and selling new and used vehicles, along with comprehensive leasing services.",
                media: [
                    {
                        type: "img",
                        title: "Home Page",
                        src: "/projects/iranecar/home.png",
                        scroll: true,
                        transition: "14s",
                    },
                    {
                        type: "video",
                        title: "Full demo video",
                        src: "/projects/iranecar/iranecar.mp4",
                    },
                    {
                        type: "img",
                        title: "Sell vehicles main page",
                        src: "/projects/iranecar/car-sale.png",
                        scroll: true,
                        transition: "6s",
                    },
                    {
                        type: "img",
                        title: "Vehicles List with sales programs",
                        src: "/projects/iranecar/cars.png",
                        scroll: true,
                        transition: "10s",
                    },
                    {
                        type: "img",
                        title: "Compare vehicles page",
                        src: "/projects/iranecar/compare.png",
                        scroll: true,
                        transition: "18s",
                    },
                    {
                        type: "img",
                        title: "Sales programs of specific car",
                        src: "/projects/iranecar/sales-options.png",
                        scroll: true,
                        transition: "6s",
                    },
                    {
                        type: "img",
                        title: "Car details",
                        src: "/projects/iranecar/car-details.png",
                        scroll: true,
                        transition: "10s",
                    },
                    {
                        type: "img",
                        title: "Profile page",
                        src: "/projects/iranecar/profile.png",
                        scroll: true,
                        transition: "4s",
                    },
                    {
                        type: "img",
                        title: "Used cars sales",
                        src: "/projects/iranecar/used-cars.png",
                        scroll: true,
                        transition: "6s",
                    },
                    {
                        type: "img",
                        title: "Login",
                        src: "/projects/iranecar/login.png",
                    },
                    {
                        type: "img",
                        title: "Register",
                        src: "/projects/iranecar/Register.png",
                    },
                ],
                mainMedia: 0,
                used: ["nuxt", "pinia", "unocss"],
                related_experience_id: 4,
            },
            {
                id: uuidv4(),
                name: "Mega",
                title: "Vehicle Sales Information",
                description:
                    "Mega provides a platform for buying and selling new and used vehicles, along with comprehensive leasing services.",
                media: [
                    {
                        type: "img",
                        title: "Home Page",
                        src: "/projects/mega/home.png",
                    },
                    {
                        type: "video",
                        title: "Full demo video",
                        src: "/projects/mega/mega.mp4",
                    },
                    {
                        type: "img",
                        title: "Leasing Page",
                        src: "/projects/mega/leasing.png",
                    },
                    {
                        type: "img",
                        title: "Futures Page",
                        src: "/projects/mega/features.png",
                    },
                    {
                        type: "img",
                        title: "First insight page - services",
                        src: "/projects/mega/first-insight.png",
                    },
                    {
                        type: "img",
                        title: "Used vehicles page",
                        src: "/projects/mega/used-cars.png",
                    },
                    {
                        type: "img",
                        title: "Sell vehicles page",
                        src: "/projects/mega/sell-car.png",
                    },
                    {
                        type: "img",
                        title: "Partners page",
                        src: "/projects/mega/partners.png",
                    },
                    {
                        type: "img",
                        title: "Iranecar platform details",
                        src: "/projects/mega/iranecar.png",
                    },
                    {
                        type: "img",
                        title: "Bahman Partner page",
                        src: "/projects/mega/bahman-bot.png",
                    },
                    {
                        type: "img",
                        title: "Contact Us",
                        src: "/projects/mega/contact-us.png",
                    },
                ],
                mainMedia: 0,
                used: ["nuxt", "pinia", "unocss"],
                related_experience_id: 4,
            },
            {
                id: uuidv4(),
                name: "Metriland",
                title: "Tokenizing Realstates",
                description:
                    "MetriLand offers investment on realstates by tokens, even with small budget you can get profit",
                media: [
                    {
                        type: "img",
                        title: "Home Page",
                        src: "/projects/metriland/fullpage.png",
                        transition: "18s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Projects Page",
                        src: "/projects/metriland/projects.jpg",
                        transition: "2s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Signup Page",
                        src: "/projects/metriland/signup.jpg",
                    },
                    {
                        type: "img",
                        title: "Login Page",
                        src: "/projects/metriland/login.jpg",
                    },
                    {
                        type: "img",
                        title: "OTP Part of Forms",
                        src: "/projects/metriland/otp.jpg",
                    },
                    {
                        type: "img",
                        title: "Signup Page Last Part Setting Password",
                        src: "/projects/metriland/signup-lastpart.jpg",
                    },
                ],
                mainMedia: 0,
                used: ["nuxt", "pinia", "unocss"],
                related_experience_id: 1,
            },
            {
                id: uuidv4(),
                name: "FinnoTex",
                title: "Trading CryptoCurrencies",
                description:
                    "This platform (FinnoTex) has many features like advanced trading and OTC trading.",
                media: [
                    {
                        type: "video",
                        src: "/projects/finnotex/finnotex.mp4",
                        title: "Demo",
                    },
                    {
                        type: "img",
                        src: "/projects/finnotex/otc.jpg",
                        title: "OTC Trading Light Page",
                        transition: "2s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        src: "/projects/finnotex/trade.jpg",
                        title: "Advanced Trading Light Page",
                        transition: "2.5s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        src: "/projects/finnotex/blog.jpg",
                        title: "Blog Light Version",
                        transition: "3s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        src: "/projects/finnotex/home-dark.jpg",
                        title: "Home Page Dark Version",
                        transition: "3s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        src: "/projects/finnotex/otc-dark.jpg",
                        title: "OTC Trading Dark Page",
                        transition: "2s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        src: "/projects/finnotex/trade-dark.jpg",
                        title: "Advanced Trading Dark Page",
                        transition: "2s",
                        scroll: true,
                    },
                ],
                mainMedia: 0,
                used: ["nuxt", "tradingview"],
                related_experience_id: 1,
            },
            {
                id: uuidv4(),
                name: "FinnoBot",
                title: "Automatic Trading",
                description:
                    "Buy automatic trading bots and connect to ur trading accounts like binance and get profit with it",
                media: [
                    {
                        type: "video",
                        title: "Demo",
                        src: "/projects/finnobot/video.mp4",
                    },
                    {
                        type: "img",
                        title: "Light Version",
                        src: "/projects/finnobot/light.jpg",
                    },
                    {
                        type: "img",
                        title: "Create Bot",
                        src: "/projects/finnobot/createbot.jpg",
                    },
                    {
                        type: "img",
                        title: "Dashboard - List of created bots",
                        src: "/projects/finnobot/dashboard.jpg",
                    },
                    {
                        type: "img",
                        title: "Register Page",
                        src: "/projects/finnobot/register.jpg",
                    },
                    {
                        type: "img",
                        title: "Login Page",
                        src: "/projects/finnobot/login.jpg",
                    },
                    {
                        type: "img",
                        title: "OTP - 2 factor authentication code",
                        src: "/projects/finnobot/otp.jpg",
                    },
                    {
                        type: "img",
                        title: "Contact us page",
                        src: "/projects/finnobot/contact.jpg",
                    },
                ],
                mainMedia: 0,
                used: ["nuxt", "tradingview"],
                related_experience_id: 1,
            },
            {
                id: uuidv4(),
                name: "Rotana",
                title: "Bank Tokens Trading System",
                description:
                    "This platform was meant to be used on banks for trading special tokens",
                media: [
                    {
                        type: "video",
                        title: "Demo",
                        src: "/projects/rotana/video.mp4",
                    },
                    {
                        type: "img",
                        title: "Legal user buying token step five",
                        src: "/projects/rotana/legal-buy-5.jpg",
                        transition: ".5s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title:
                            "Added section in buying token - online Ayandeh Bank receipt coded",
                        src: "/projects/rotana/online-receipt.jpg",
                        transition: "2s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Legal user buying token step one",
                        src: "/projects/rotana/legal-buy.jpg",
                    },
                    {
                        type: "img",
                        title: "Legal user buying token step two",
                        src: "/projects/rotana/legal-buy-2.jpg",
                        transition: "1.5s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Legal user buying token step three",
                        src: "/projects/rotana/legal-buy-3.jpg",
                        transition: "1.5s",
                        scroll: true,
                    },

                    {
                        type: "img",
                        title: "Banker Dashboard",
                        src: "/projects/rotana/banker-dashboard.jpg",
                    },
                    {
                        type: "img",
                        title: "Treasurer Dashboard",
                        src: "/projects/rotana/treasurer-dashboard.jpg",
                        transition: "2s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Banker orders report page",
                        src: "/projects/rotana/banker-order-report.jpg",
                        transition: "2s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Assigned order report",
                        src: "/projects/rotana/assigned-order-details.jpg",
                        transition: "2s",
                        scroll: true,
                    },
                ],
                mainMedia: 0,
                used: ["nuxt", "tailwind"],
                related_experience_id: 1,
            },
            {
                id: uuidv4(),
                name: "Simcard",
                title: "Bank Card Issuance & Services",
                description: "Simcard provides seamless bank card issuance, KYC verification, and services like PIN reset, dynamic PIN activation",
                media: [
                    {
                        type: "video",
                        title: "Platform Demo",
                        src: "/projects/simcard/simcard.mp4"
                    },
                    {
                        type: "img",
                        title: "Home Page",
                        src: "/projects/simcard/simcard.png",
                        scroll: true,
                        transition: "2s"
                    },

                    {
                        type: "img",
                        title: "Card Issuance Interface",
                        src: "/projects/simcard/card-issuance.png",
                        scroll: true,
                        transition: "4s"
                    },
                    {
                        type: "img",
                        title: "Card Issuance (select location)",
                        src: "/projects/simcard/card-issuance-location.png",
                        scroll: true,
                        transition: "4s"
                    },
                    {
                        type: "img",
                        title: "Card Issuance (select receive date)",
                        src: "/projects/simcard/card-issuance-time.png",
                        scroll: true,
                        transition: "2s"
                    },
                    {
                        type: "img",
                        title: "Card Issuance (user confirm)",
                        src: "/projects/simcard/card-issuance-confirm.png",
                        scroll: true,
                        transition: "2s"
                    },
                    {
                        type: "img",
                        title: "Card reissue (select reason)",
                        src: "/projects/simcard/card-reissue.png",
                        scroll: true,
                        transition: "2s"
                    },
                    {
                        type: "img",
                        title: "Card reissue (select location)",
                        src: "/projects/simcard/reissue-location.png",
                        scroll: true,
                        transition: "2s"
                    },
                    {
                        type: "img",
                        title: "Card block",
                        src: "/projects/simcard/card-block.png",
                        scroll: true,
                        transition: "2s"
                    }
                ],
                mainMedia: 0,
                used: ["nuxt", "pinia", "unocss"],
                related_experience_id: 7
            },
            {
                id: uuidv4(),
                name: "Andisheh",
                title: "Online Library",
                description: "Full of different books to read online",
                media: [
                    {
                        type: "img",
                        title: "Home page of the library",
                        src: "/projects/library/andishe-library.jpg",
                        transition: ".8s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Books page with filters",
                        src: "/projects/library/books.jpg",
                        transition: "1s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Single book page",
                        src: "/projects/library/book-details.jpg",
                        transition: "4s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "User Dashboard - Saved Books",
                        src: "/projects/library/my-books.jpg",
                        transition: "1s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Online reading book",
                        src: "/projects/library/read-book.jpg",
                        transition: "1s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "List of study courses",
                        src: "/projects/library/list-of-study-courses.jpg",
                        transition: "1s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "All Theses",
                        src: "/projects/library/all-theses.jpg",
                        transition: "1s",
                        scroll: true,
                    },
                    {
                        type: "video",
                        title: "Library video",
                        src: "/projects/library/library-video.mp4",
                    },
                ],
                mainMedia: 0,
                used: ["sass"],
                related_experience_id: 2,
            },
            {
                id: uuidv4(),
                name: "4Sou",
                title: "Job Searching for immigrants",
                description:
                    "4sou was a large app with multiple languages support for immigrants to find their dream jobs",
                img: "4sou-English.jpg",
                media: [
                    {
                        type: "video",
                        title: "Video",
                        src: "/projects/4sou/4sou.mp4",
                    },
                    {
                        type: "img",
                        title: "Admin Panel in english",
                        src: "/projects/4sou/dashboard-english.jpg",
                        transition: ".8s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Panel home page slider settings",
                        src: "/projects/4sou/panel.jpg",
                        transition: ".8s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Home Page in English",
                        src: "/projects/4sou/4sou-English.jpg",
                        transition: ".4s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Home Page in Germany",
                        src: "/projects/4sou/4sou-germany.jpg",
                        transition: ".4s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Home Page in Persian",
                        src: "/projects/4sou/4sou-persian.jpg",
                        transition: ".4s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Home Page in Arabic",
                        src: "/projects/4sou/4sou-arabic.jpg",
                        transition: ".4s",
                        scroll: true,
                    },

                    {
                        type: "img",
                        title: "Legal user buying token step five",
                        src: "/projects/4sou/dashboard-persian.jpg",
                        transition: ".8s",
                        scroll: true,
                    },

                    {
                        type: "img",
                        title: "Panel Video",
                        src: "/projects/4sou/panel.mp4",
                    },
                ],
                mainMedia: 0,
                used: ["sass", "nuxt"],
                related_experience_id: 2,
            },
            {
                id: uuidv4(),
                name: "MakanChap",
                title: "Printing services",
                description:
                    "Ordering online printing services based on type & format & other customizations of users",
                media: [
                    {
                        type: "img",
                        title: "Header of Home page",
                        src: "/projects/makanchap/home.jpg",
                    },
                    {
                        type: "img",
                        title: "Footer of home page",
                        src: "/projects/makanchap/footer.jpg",
                    },
                    {
                        type: "img",
                        title: "Finishing order process, selecting shipment way",
                        src: "/projects/makanchap/order-process.jpg",
                    },
                    {
                        type: "img",
                        title: "Product page",
                        src: "/projects/makanchap/product.jpg",
                    },
                ],
                mainMedia: 0,
                used: ["jquery", "php"],
                related_experience_id: 2,
            },
            {
                id: uuidv4(),
                name: "Delijan",
                title: "Products for baby safety",
                description:
                    "Producer of products like Baby Carseat,Baby Stroller,Baby Walker & etc",
                media: [
                    {
                        type: "img",
                        title: "Home page",
                        src: "/projects/delijan/home-full.jpg",
                        transition: "3.5s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Products page",
                        src: "/projects/delijan/products-page.jpg",
                        transition: "8s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Services page",
                        src: "/projects/delijan/services-page.jpg",
                        transition: "3.5s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Single product page",
                        src: "/projects/delijan/single-product.jpg",
                        transition: "9s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Showing related insta posts with insta API",
                        src: "/projects/delijan/insta-posts.jpg",
                    },
                    {
                        type: "img",
                        title: "English version of products page",
                        src: "/projects/delijan/products-en.jpg",
                    },
                    {
                        type: "img",
                        title: "Admin Panel - editing gallery section of product",
                        src: "/projects/delijan/product-gallery-admin.jpg",
                    },
                    {
                        type: "img",
                        title: "Admin Panel - editing product details",
                        src: "/projects/delijan/edit-product-admin.jpg",
                    },
                ],
                mainMedia: 0,
                used: ["jquery", "php"],
                related_experience_id: 2,
            },
            {
                id: uuidv4(),
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
                        src: "/projects/soundsland/home.jpg",
                        transition: ".7s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Single music page",
                        src: "/projects/soundsland/music-page.jpg",
                        transition: ".7s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Music page + singer info",
                        src: "/projects/soundsland/music-page-toggled.jpg",
                        transition: ".7s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Music page + comments",
                        src: "/projects/soundsland/music-comments.jpg",
                        transition: ".7s",
                        scroll: true,
                    },
                    {
                        type: "video",
                        title: "Demo",
                        src: "/projects/soundsland/demo.mp4",
                    },
                ],
                mainMedia: 0,
                used: ["jquery"],
                related_experience_id: 3,
            },
            {
                id: uuidv4(),
                name: "KavanPergas",
                title: "Artificial Ice Cloud Generator",
                description:
                    "Artificial Cloud Generator for weddings and ceminars with ice and water",
                media: [
                    {
                        type: "img",
                        title: "Home page",
                        src: "/projects/kavanpergas/home.jpg",
                        transition: "7s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Home Header",
                        src: "/projects/kavanpergas/header.jpg",
                    },
                    {
                        type: "img",
                        title: "Home page services slider",
                        src: "/projects/kavanpergas/slider.jpg",
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
                used: ["jquery", "wordpress"],
                related_experience_id: 3,
            },
            {
                id: uuidv4(),
                name: "WordPress",
                title: "Projects",
                description:
                    "Some of personal or freelance projects developed with WordPress CMS",
                media: [
                    {
                        type: "img",
                        title: "Pro Web 3 - Home Page",
                        src: "/projects/wordpress/proweb3.jpg",
                        transition: "7s",
                        scroll: true,
                    },
                    {
                        type: "img",
                        title: "Creativity & Ideas Website - Home Page",
                        src: "/projects/wordpress/creativity.jpg",
                        transition: "7s",
                        scroll: true,
                    },
                ],
                mainMedia: 1,
                used: ["wordpress"],
                related_experience_id: 3,
            },
        ],
        galleryVisible: false,
        activeProjectID: 0,
        activeMediaIndex: 0,
        imgScrollDown: false,
        videoPlaying: false,
    }),
    getters: {
        getPortfolios: (state) => {
            return (howMany, related_experience_id) => {
                let portfolios = [];
                portfolios = state.portfolios.slice(
                    0,
                    howMany || state.portfolios.length,
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
            return (id, name) => {
                if (name) {
                    return state.portfolios.find(
                        (portfolio) => portfolio.name.toLowerCase() === name.toLowerCase(),
                    );
                } else if (id) {
                    return state.portfolios.find((portfolio) => portfolio.id === id);
                }
            };
        },
        portfolioMediaLength(state) {
            return this.getPortfolio(state.activeProjectID).media.length;
        },
    },
    actions: {
        showGallery(projectID, activeMedia) {
            console.log(projectID);
            this.activeProjectID = projectID;
            this.galleryVisible = true;
            if (activeMedia) this.activeMediaIndex = activeMedia;
        },
        hideGallery() {
            this.galleryVisible = false;
            this.activeProjectID = this.portfolios[0].id;
            this.activeMediaIndex = 0;
            this.resetGallery();
        },
        nextMedia() {
            this.resetGallery();
            if (this.activeMediaIndex === this.portfolioMediaLength - 1)
                this.activeMediaIndex = 0;
            else this.activeMediaIndex++;
            this.resetScroll();
        },
        prevMedia() {
            this.resetGallery();
            if (this.activeMediaIndex === 0)
                this.activeMediaIndex = this.portfolioMediaLength - 1;
            else this.activeMediaIndex--;
            this.resetScroll();
        },
        resetGallery() {
            this.imgScrollDown = false;
            this.videoPlaying = false;
        },
        resetScroll() {
            let currentMedia = this.getPortfolio(this.activeProjectID).media[
                this.activeMediaIndex
                ];
            let currentMediaTransition = currentMedia.transition;
            currentMedia.transition = "0s";
            setTimeout(() => {
                currentMedia.transition = currentMediaTransition;
            }, 100);
        },
        toggleImgScroll() {
            this.imgScrollDown = !this.imgScrollDown;
        },
        toggleVideo(video) {
            if (this.videoPlaying) video.pause();
            else video.play();

            this.videoPlaying = !this.videoPlaying;
        },
    },
});
