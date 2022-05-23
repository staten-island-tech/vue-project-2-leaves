<template>
  <div class="map">TEST</div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  name: "Gsap",
  mounted() {
    this.boxRotation();
  },
  gsap() {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ delay: 0.3 });
    tl.from("#site-title", { size: 0.5, rotation: 360, x: 300, duration: 0.3 });
    gsap.from(".text", { color: rgb(51, 255, 143), duration: 2 });
  },
  methods: {
    boxRotation() {
      const gsap = this.$gsap;
      gsap.from(".map", { rotation: 27, x: 100, duration: 1 });
    },
  },
};
</script>

<style>
.map {
  height: 50rem;
  width: 50rem;
  background-color: red;
}
</style>