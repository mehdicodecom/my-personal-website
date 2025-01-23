<template>
  <div
    class="relative md:(overflow-initial w-initial h-initial block) xs:(overflow-hidden w-90 h-94 flex items-center justify-center)"
  >
    <div class="circularSec relative">
      <div class="circleLoading"></div>
      <div class="circularAnimation">
        <img src="/imgs/Mehdi.png" draggable="false" class="mainImg" alt="" />
        <div class="circle">
          <img src="/imgs/sass.png" draggable="false" class="icon" alt="" />

          <div class="circle" style="--data-number: 1"></div>
          <div class="circle" style="--data-number: 2">
            <img src="/imgs/CSS.png" draggable="false" class="icon" alt="" />
            <img src="/imgs/nuxt.png" draggable="false" class="icon" alt="" />
          </div>
          <div class="circle" style="--data-number: 3">
            <img src="/imgs/JS.png" draggable="false" class="icon" alt="" />
            <img
              src="https://mehdicode.com//imgs/html.png"
              draggable="false"
              class="icon"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.circularAnimation {
  user-select: none;
  position: relative;
  transition: 1s all linear;
  --biggerSize: calc(var(--circlesBigger) * 3);
  --subCircleDiameter: calc(var(--circleDiameter) + var(--biggerSize));
  width: var(--subCircleDiameter);
}
.circleLoading {
  position: absolute;
  right: 0;
  left: -1.5rem;
  margin: 0 auto;
  top: 44%;
  z-index: 99;
}
.circleLoading::before {
  content: "";
  position: absolute;
  --biggerSize: calc(var(--circlesBigger) * 3);
  --subCircleDiameter: calc(var(--circleDiameter) + var(--biggerSize) + 3rem);
  width: var(--subCircleDiameter);
  height: var(--subCircleDiameter);
}
@media only screen and (min-width: 300px) {
  .circularSec {
    --circleDiameter: 12rem;
    --icon: 20px;
    --circlesBigger: 2.5rem;
  }
}
@media only screen and (min-width: 768px) {
  .circularSec {
    --circleDiameter: 12rem;
    --icon: 26px;
    --circlesBigger: 2.5rem;
  }
}
@media only screen and (min-width: 1024px) {
  .circularSec {
    --circleDiameter: 11rem;
    --icon: 22px;
    --circlesBigger: 2rem;
  }
}
@media only screen and (min-width: 1280px) {
  .circularSec {
    --circleDiameter: 12rem;
    --icon: 26px;
    --circlesBigger: 2.5rem;
  }
}

@media only screen and (min-width: 1550px) {
  .circularSec {
    --circleDiameter: 10rem;
    --icon: 24px;
    --circlesBigger: 2.5rem;
  }
}
.circle {
  position: relative;
  margin: auto;
  background: transparent;
  border-radius: 100%;
  border: 1px #f47a08 solid;
  width: var(--circleDiameter);
  height: var(--circleDiameter);
  animation: orbit 15s linear infinite;
}
.circularAnimation:hover .circle {
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}

@keyframes orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.mainImg {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  z-index: 5;
  width: calc(var(--circleDiameter) - 20px);
}

.icon {
  position: absolute;
  height: var(--icon);
  width: var(--icon);
}

.circle > .icon {
  right: -12px;
  top: calc(var(--circleDiameter) / 2);
}

.circle .circle {
  position: absolute;
  --biggerSize: calc(var(--circlesBigger) * var(--data-number));
  --subCircleDiameter: calc(var(--circleDiameter) + var(--biggerSize));
  width: var(--subCircleDiameter);
  height: var(--subCircleDiameter);
  right: calc(var(--biggerSize) / 2 * -1);
  top: calc(var(--biggerSize) / 2 * -1);
}

.circle:nth-of-type(2) > .icon:nth-of-type(1) {
  left: -4px;
  top: calc(var(--subCircleDiameter) / 3.5);
}

.circle:nth-of-type(2) > .icon:nth-of-type(2) {
  right: -2px;
  top: calc(var(--subCircleDiameter) / 1.45);
}

.circle:nth-of-type(3) > .icon:nth-of-type(1) {
  left: calc(var(--subCircleDiameter) / 4);
  top: calc(var(--subCircleDiameter) - 30px);
}

.circle:nth-of-type(3) > .icon:nth-of-type(2) {
  right: calc(var(--subCircleDiameter) / 4);
  top: 0;
}
.circle:last-of-type {
  border-width: 2px;
}
</style>
