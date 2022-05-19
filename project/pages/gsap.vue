<template></template>

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
    tl.from(".card", { size: 0.5, rotation: 360, x: 300, duration: 0.3 });
    gsap.to(".text", { color: "#db7272", duration: 2 });
  },
  methods: {
    boxRotation() {
      const gsap = this.$gsap;
      gsap.to(".map`", { rotation: 27, x: 100, duration: 1 });
    },
  },
};
</script>

<style>
</style>