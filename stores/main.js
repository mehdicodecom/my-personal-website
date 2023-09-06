import { defineStore } from "pinia";
export default defineStore("main", {
  state: () => ({
    socialNetworks: {
      Github: {
        link: "https://github.com/mehdicodecom",
        groupHover: "group-hover/social:(bg-socials-github text-white)",
      },
      Linkedin: {
        link: "https://www.linkedin.com/in/merafiee/",
        groupHover: "group-hover/social:(bg-socials-linkedin text-white)",
      },
      Telegram: {
        link: "https://t.me/merafiei",
        groupHover: "group-hover/social:(bg-socials-telegram text-white)",
      },
    },
    showupLoadTime: 0,
  }),
  actions: {
    addShowupLoadTime() {
      this.showupLoadTime++;
    },
  },
});
