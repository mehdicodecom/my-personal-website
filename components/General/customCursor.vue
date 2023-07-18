<template>
  <div id="cursor"></div>
  <div id="cursorFollow"></div>
</template>

<script>
export default {
  mounted() {
    let cursorStyle = document.getElementById("cursor").style;
    let cursorFollowStyle = document.getElementById("cursorFollow").style;
    let hoverables = document.querySelectorAll("a");
    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener("mouseover", this.onMouseHover);
      hoverables[i].addEventListener("mouseleave", this.onMouseHoverOut);
    }
    document.body.addEventListener("mousemove", function (e) {
      (cursorStyle.left = e.clientX + "px"),
        (cursorFollowStyle.left = e.clientX + "px"),
        (cursorStyle.top = e.clientY + "px"),
        (cursorFollowStyle.top = e.clientY + "px");
    });
  },
  methods: {
    onMouseHover() {
      let cursorStyle = document.getElementById("cursor").style;
      cursorStyle.width = "70px";
      cursorStyle.height = "70px";
    },
    onMouseHoverOut() {
      let cursorStyle = document.getElementById("cursor").style;
      cursorStyle.width = "40px";
      cursorStyle.height = "40px";
    },
  },
};
</script>

<style scoped></style>
