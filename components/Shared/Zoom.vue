<template>
  <div
    class="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 h-0 w-0 trans3ms bg-black/60 flex items-center justify-center rounded-lg cursor-pointer group-hover:(h-full w-full)"
  >
    <div
      class="absolute left-0 right-0 mx-auto top-[calc(50%-1.25rem)] -translate-y-1/2 trans3ms h-14 w-14 rounded-full bg-white bg-opacity-15 flex items-center justify-center translate-y-20 opacity-0 group-hover:(opacity-100 translate-y-0)"
    >
      <svg class="relative w-7 h-7 text-main-orange">
        <use :href="'/imgs/icons.svg#zoom'"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
