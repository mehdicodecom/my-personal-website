<template>
  <div>
    <div
      class="fixed top-0 left-0 w-full h-full bg-black/80 cursor-pointer"
      @click="visible = false"
    ></div>

    <div
      :class="[
        'fixed flex flex-col justify-center items-center text-center w-130 left-0 right-0 mx-auto bg-dark-800 rounded-3xl border-t-16 px-12 py-12',
        state === 'success' ? 'border-main-green' : 'border-red-500',
      ]"
    >
      <div>
        <img src="/imgs/success.png" alt="" v-if="state === 'success'" />
        <img src="/imgs/error.png" alt="" v-else />
      </div>

      <p class="text-3xl mt-4 font-bold mb-2">{{ title }}</p>

      <p class="text-lg w-11/12">{{ message }}</p>

      <button
        @click="$emit('done')"
        class="text-white w-full rounded-xl mt-16 h-12 bg-main-green"
        v-if="state === 'success'"
      >
        Done
      </button>
      <button
        @click="$emit('tryagain')"
        class="text-white w-full rounded-xl mt-16 h-12 bg-red-500"
        v-else
      >
        Try Again
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import usePopupStore from "@/stores/popup";
export default {
  emits: ["tryagain", "done"],
  computed: {
    ...mapState(usePopupStore, ["state", "title", "message"]),
    ...mapWritableState(usePopupStore, ["visible"]),
  },
};
</script>

<style scoped></style>
