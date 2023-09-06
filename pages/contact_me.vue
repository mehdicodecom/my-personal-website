<template>
  <div class="relative pl-42 pr-40 mt-26 flex">
    <div class="relative px-8 py-10 bg-black/60 w-4/12 rounded-lg">
      <div class="loading textLoading inline-block">
        <h2 class="text-3xl font-bold">Let's Get In Touch!</h2>
      </div>

      <span
        class="absolute -top-10 -left-10 inline-block w-30 h-30 bg-transparent border border-main-orange/70 rounded-full"
      >
        <span
          class="absolute top-1 left-1 inline-block w-26 h-26 bg-transparent border border-main-orange/70 rounded-full"
        ></span>
      </span>
      <span
        class="absolute -bottom-10 -right-10 inline-block w-30 h-30 bg-transparent border border-main-orange/70 rounded-full"
      >
        <span
          class="absolute bottom-1 right-1 inline-block w-26 h-26 bg-transparent border border-main-orange/70 rounded-full"
        ></span>
      </span>
      <div class="flex flex-col gap-10 mt-12 mb-16">
        <div class="flex items-center gap-4" v-for="contact in contacts">
          <span
            class="inline-flex items-center justify-center w-14 h-14 bg-dark-200 rounded-full"
          >
            <svg class="w-6 h-6 text-white-3 select-none text-main-orange">
              <use :href="`/imgs/icons.svg#${contact.type}`"></use>
            </svg>
          </span>
          <div class="loading textLoading inline-block">
            <p>{{ contact.value }}</p>
          </div>
        </div>
      </div>

      <General-SocialNetworks class="mb-4" />
    </div>

    <form
      @submit.prevent="sendMail"
      class="relative px-16 py-10 bg-dark/60 flex-1 rounded-lg"
    >
      <div class="flex gap-10">
        <div class="relative flex-1">
          <input
            type="text"
            class="px-12 bg-dark-700 trans3ms w-full h-12 border border-dark rounded-lg focus:border-main-orange hover:border-main-orange"
            v-model="sender.name"
            placeholder="Your name"
          />
          <svg class="absolute top-3 left-4 w-6 h-6 text-main-orange">
            <use :href="`/imgs/icons.svg#user_input`"></use>
          </svg>
        </div>
        <div class="relative flex-1">
          <input
            type="text"
            class="px-12 bg-dark-700 trans3ms w-full h-12 border border-dark rounded-lg focus:border-main-orange hover:border-main-orange"
            v-model="sender.subject"
            placeholder="Subject"
          />
          <svg class="absolute top-3 left-4 w-6 h-6 text-main-orange">
            <use :href="`/imgs/icons.svg#subject`"></use>
          </svg>
        </div>
      </div>

      <div class="flex gap-10 mt-8">
        <div class="relative flex-1">
          <input
            type="email"
            class="px-12 bg-dark-700 trans3ms w-full h-12 border border-dark rounded-lg focus:border-main-orange hover:border-main-orange"
            v-model="sender.mail"
            placeholder="Email"
          />
          <svg class="absolute top-3 left-4 w-6 h-6 text-main-orange">
            <use :href="`/imgs/icons.svg#mail`"></use>
          </svg>
        </div>
        <div class="relative flex-1">
          <input
            type="text"
            class="px-12 bg-dark-700 trans3ms w-full h-12 border border-dark rounded-lg focus:border-main-orange hover:border-main-orange"
            v-model="sender.phone"
            placeholder="Phone Number"
          />
          <svg class="absolute top-3 left-4 w-5 h-5 text-main-orange">
            <use :href="`/imgs/icons.svg#phone`"></use>
          </svg>
        </div>
      </div>

      <textarea
        v-model="sender.message"
        cols="30"
        rows="7"
        class="mt-6 p-4 resize-none bg-dark-700 trans3ms w-full border border-dark rounded-lg focus:border-main-orange hover:border-main-orange"
        placeholder="Write your message here"
      ></textarea>

      <div class="flex justify-center">
        <button
          type="submit"
          class="inline-flex trans3ms mt-8 items-center justify-center gap-4 bg-main-orange py-3 h-12 w-50 rounded-lg hover:(bg-main-orange/80)"
        >
          <svg class="w-5 h-5 text-white-2">
            <use :href="'/imgs/icons.svg#send'"></use>
          </svg>

          <span class="inline-block w-0.25 h-full bg-white/50"></span>

          <span class="text-white">Send Message</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { type: "mail", value: "info@mehdicode.com" },
        {
          type: "phone",
          value: "+989300432875",
        },
        {
          type: "location",
          value: "Iran/Tehran",
        },
      ],
      sender: {
        name: "",
        subject: "",
        mail: "",
        tel: "",
        message: "",
      },
    };
  },
  methods: {
    sendMail() {},
  },
};
</script>

<style scoped></style>
