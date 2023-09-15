import { defineStore } from "pinia";
export default defineStore("popup", {
  state: () => ({
    visible: true,
    state: "success",
    title: "Oww Nice !",
    message: "I've received your message : )",
  }),
  getters: {},
  actions: {},
});
