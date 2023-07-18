<template>
  <div class="flex flex-col gap-2">
    <div class="mac">
      <div class="display">
        <div class="screen">
          <img
            src="_nuxt/assets/imgs/projects/metriland/home.png"
            alt=""
            class="w-full h-full rounded-lg"
          />
        </div>
        <span class="label">MacBook Pro</span>
      </div>
      <div class="keys">
        <div class="board"></div>
        <div class="touchpad"></div>
      </div>
      <div class="comp">
        <div class="notch"></div>
      </div>
      <div class="compBottom"></div>
    </div>

    <section class="flex mt-2 flex-wrap">
      <p class="flex gap-2">
        <span class="block font-semibold text-codeColor-orange"> Title </span>
        <span class="text-white/60">Metriland - Tokenizing RealState</span>
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.display {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 1rem;
  background: #2a2a2a;
  animation: shine2 12s infinite;
}

.screen {
  position: relative;
  padding: 12px 10px 18px;
}
.label {
  position: absolute;
  color: #696969;
  font-size: 8px;
  font-family: "Signika Negative", sans-serif;
  z-index: 4;
  bottom: 5px;
}
.keys {
  position: relative;
  width: calc(100% + 5.8rem);
  top: -6px;
  left: -2.8rem;
  height: 0;
  border-left: 3rem solid transparent;
  border-right: 3rem solid transparent;
  border-bottom: 2rem solid #4e4e4e;
  display: flex;
  justify-content: center;
}
.board {
  position: relative;
  width: 100%;
  height: 0;
  top: 2px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 15px solid #141414ce;
}
.touchpad {
  position: absolute;
  width: 160px;
  height: 0;
  top: 20px;
  border-radius: 20px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 8px solid #3f3f3f96;
}

.comp {
  position: relative;
  display: flex;
  justify-content: center;
  top: -8px;
  left: -2.8rem;
  width: calc(100% + 5.8rem);
  height: 12px;
  background: #393a42;
  animation: shine1 10s infinite;
}
.notch {
  position: relative;
  width: 120px;
  height: 10px;
  background: #4e4f58;
  border-radius: 0 0 20px 20px;
}
.compBottom {
  position: relative;
  top: -9px;
  width: 100%;
  height: 3px;
  background: #35353d;
  border-radius: 0 0 50% 50%;
}
</style>
