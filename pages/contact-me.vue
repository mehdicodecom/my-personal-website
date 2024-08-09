<template>
  <Title>Mehdi Rafiei | Contact Me | Front-end Developer</Title>

  <div
    class="relative flex xl:(pl-24 pr-22) lg:(pl-17 pr-14 w-11/12 mx-auto) md:(mt-24 flex-row) sm:(mt-20 pl-16 pr-14) xs:(flex-col px-8 mt-16 w-full)"
  >
    <div
      class="relative px-8 py-10 bg-black/60 lg:w-4/12 md:w-5/12 xs:(w-full py-8) rounded-lg"
    >
      <div class="loading textLoading inline-block">
        <h2 class="text-3xl font-bold">Let's Get In Touch!</h2>
      </div>

      <span
        class="absolute inline-block sm:(-top-10 -left-10 w-30 h-30) xs:(-top-8 -left-4 w-22 h-22) bg-transparent border border-main-orange/70 rounded-full"
      >
        <span
          class="absolute top-1 left-1 inline-block sm:(w-26 h-26) xs:(w-18 h-18) bg-transparent border border-main-orange/70 rounded-full"
        ></span>
      </span>
      <span
        class="absolute sm:(-bottom-10 -right-10 w-30 h-30) xs:(-bottom-8 -right-6 w-22 h-22) bg-transparent border border-main-orange/70 rounded-full"
      >
        <span
          class="absolute bottom-1 right-1 sm:(w-26 h-26) xs:(w-18 h-18) inline-block w-26 h-26 bg-transparent border border-main-orange/70 rounded-full"
        ></span>
      </span>
      <div
        class="flex md:(flex-col mt-12 mb-16 flex-nowrap) xs:(flex-row mt-6 mb-6 flex-wrap) gap-10 mb-16"
      >
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
      class="relative lg:px-16 md:px-12 sm:px-8 py-10 bg-dark/60 flex-1 rounded-lg"
    >
      <div class="flex lg:gap-10 md:gap-8 sm:gap-6 xs:gap-4">
        <div class="relative flex-1">
          <input
            type="text"
            class="pl-12 pr-4 bg-dark-700 trans3ms w-full h-12 border border-dark rounded-lg focus:border-main-orange hover:border-main-orange"
            v-model="sender.name"
            placeholder="Your name"
          />
          <svg class="absolute top-3 left-4 w-6 h-6 text-main-orange">
            <use :href="`/imgs/icons.svg#user_input`"></use>
          </svg>
          <svg
            v-if="errors.name"
            class="absolute top-2.5 right-4 w-6 h-6 text-red-500"
            title="At least 2 characters"
          >
            <use :href="'/imgs/icons.svg#error'"></use>
          </svg>
        </div>
        <div class="relative flex-1">
          <input
            type="text"
            class="pl-12 pr-4 bg-dark-700 trans3ms w-full h-12 border border-dark rounded-lg focus:border-main-orange hover:border-main-orange"
            v-model="sender.subject"
            placeholder="Subject"
          />
          <svg class="absolute top-3 left-4 w-6 h-6 text-main-orange">
            <use :href="`/imgs/icons.svg#subject`"></use>
          </svg>
          <svg
            v-if="errors.subject"
            class="absolute top-2.5 right-4 w-6 h-6 text-red-500"
            title="At least 3 characters"
          >
            <use :href="'/imgs/icons.svg#error'"></use>
          </svg>
        </div>
      </div>

      <div class="flex lg:gap-10 md:gap-8 sm:gap-6 xs:gap-4 mt-8">
        <div class="relative flex-1">
          <input
            type="email"
            class="pl-12 pr-4 bg-dark-700 trans3ms w-full h-12 border border-dark rounded-lg focus:border-main-orange hover:border-main-orange"
            v-model="sender.mail"
            placeholder="Email"
          />
          <svg class="absolute top-3 left-4 w-6 h-6 text-main-orange">
            <use :href="`/imgs/icons.svg#mail`"></use>
          </svg>
          <svg
            v-if="errors.mail"
            class="absolute top-2.5 right-4 w-6 h-6 text-red-500"
            title="Incorrect email address"
          >
            <use :href="'/imgs/icons.svg#error'"></use>
          </svg>
        </div>
        <div class="relative flex-1">
          <input
            title="Enter with country code (+989300432875)"
            type="tel"
            class="pl-12 pr-4 bg-dark-700 trans3ms w-full h-12 border border-dark rounded-lg focus:border-main-orange hover:border-main-orange"
            v-model="sender.tel"
            @input="updateTel"
            placeholder="Phone Number"
          />
          <svg class="absolute top-3 left-4 w-5 h-5 text-main-orange">
            <use :href="`/imgs/icons.svg#phone`"></use>
          </svg>
          <svg
            v-if="errors.tel"
            class="absolute top-2.5 right-4 w-6 h-6 text-red-500"
            title="Incorrect Phone number"
          >
            <use :href="'/imgs/icons.svg#error'"></use>
          </svg>
        </div>
      </div>

      <div class="relative mt-6">
        <textarea
          v-model="sender.message"
          cols="30"
          rows="7"
          class="p-4 resize-none bg-dark-700 trans3ms w-full border border-dark rounded-lg focus:border-main-orange hover:border-main-orange"
          placeholder="Write your message here"
        ></textarea>

        <svg
          v-if="errors.message"
          class="absolute top-3 right-4 w-6 h-6 text-red-500"
          title="Incorrect Phone number"
        >
          <use :href="'/imgs/icons.svg#error'"></use>
        </svg>
      </div>

      <div class="flex justify-center">
        <a
          @click.prevent="sendMail"
          :class="[
            'inline-flex trans3ms md:mt-8 xs:mt-4 items-center justify-center py-3 h-12 w-50 rounded-lg',
            sending
              ? 'bg-main-orange/60 cursor-not-allowed'
              : 'bg-main-orange hover:(bg-main-orange/80) cursor-pointer',
          ]"
        >
          <svg class="w-5 h-5 text-white-2" v-if="!sending">
            <use :href="'/imgs/icons.svg#send'"></use>
          </svg>

          <svg
            v-if="sending"
            version="1.1"
            class="w-12 h-12"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve"
          >
            <path
              fill="currentColor"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          <span
            :class="[
              'inline-block w-0.25 h-full bg-white/50',
              sending ? 'ml-1 mr-4' : 'mx-4',
            ]"
          ></span>

          <span class="text-white">{{
            sending ? "Sending..." : "Send Message"
          }}</span>
        </a>
        <button type="submit" class="hidden"></button>
      </div>
    </form>

    <transition name="fade">
      <General-PopupBox v-if="visible" @tryagain="tryagain" @done="done" />
    </transition>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import usePopupStore from "@/stores/popup";
import { validatePhoneNumber, validateEmail } from "@/helpers/global";
export default {
  data() {
    return {
      contacts: [
        { type: "mail", value: "info@mehdicode.com" },
        // {
        //   type: "phone",
        //   value: "+989300432875",
        // },
        // {
        //   type: "location",
        //   value: "Iran/Tehran",
        // },
      ],
      sender: {
        name: "",
        subject: "",
        mail: "",
        tel: "",
        message: "",
      },
      errors: {
        name: false,
        subject: false,
        mail: false,
        tel: false,
        message: false,
      },
      sending: false,
    };
  },

  computed: {
    ...mapWritableState(usePopupStore, [
      "visible",
      "state",
      "title",
      "message",
    ]),
  },
  methods: {
    async sendMail() {
      if (this.validateForm()) {
        this.sending = true;
        const formData = new FormData();
        formData.append("name", this.sender.name);
        formData.append("subject", this.sender.subject);
        formData.append("mail", this.sender.mail);
        formData.append("tel", this.sender.tel);
        formData.append("message", this.sender.message);

        try {
          const response = await fetch("https://mehdicode.com/mail/", {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            console.log("yeah", response);
            this.visible = true;
            this.state = "success";
            this.title = "Yeah Hoo!!";
            this.message =
              "Thanks for your message, I've Received it & I'll check it ASP.";
            this.sender = {
              name: "",
              subject: "",
              mail: "",
              tel: "",
              message: "",
            };
          } else {
            this.visible = true;
            this.state = "error";
            this.title = "Oooops!!";
            this.message =
              "Your message did not send correctly. Please try again.";
          }
        } catch (error) {
          this.visible = true;
          this.state = "error";
          this.title = "Oooops!!";
          this.message = "An error occurred while sending the message.";
        }

        this.sending = false;
      } else {
        this.visible = true;
        this.state = "error";
        this.title = "Form Validation Error!!";
        this.message =
          "Check that you have filled in the inputs correctly. Phone number must include the country code (e.g., +989300432875).";
      }
    },
    validateForm() {
      this.errors = {
        name: false,
        subject: false,
        mail: false,
        tel: false,
        message: false,
      };
      if (this.sender.name.length < 2) this.errors.name = true;
      if (this.sender.subject.length < 3) this.errors.subject = true;
      if (!validateEmail(this.sender.mail)) this.errors.mail = true;
      if (!validatePhoneNumber(this.sender.tel)) this.errors.tel = true;
      if (this.sender.message.length < 8) this.errors.message = true;
      let has_error = Object.values(this.errors).every(
        (item) => item === false
      );
      return has_error;
    },
    updateTel(e) {
      let tel = this.sender.tel.replace(/\D/g, "");
      if (e.data === "+" && this.sender.tel.length === 1) this.sender.tel = "+";
      else if (tel) this.sender.tel = "+" + this.sender.tel.replace(/\D/g, "");
      else this.sender.tel = "";
    },
    tryagain() {
      this.visible = false;
    },
    done() {
      this.visible = false;
    },
  },
};
</script>

<style scoped></style>
