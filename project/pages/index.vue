<template>
  <div class="site">
    <Header @trigger="navigateTo"></Header>
    <About></About>
    <Towns></Towns>
    <Wild></Wild>
    <Gyms></Gyms>
    <Dynamax></Dynamax>
  </div>
</template>
<script>
import Header from "../sections/header.vue";
import About from "../sections/about.vue";
import Towns from "../sections/towns.vue";
import Wild from "../sections/wild.vue";
import Gyms from "../sections/gyms.vue";
import Dynamax from "../sections/dyna.vue";
export default {
  name: "site",
  components: {
    Header,
    About,
    Towns,
    Wild,
    Gyms,
    Dynamax,
  },
  methods: {
    navigateTo: function (n) {
      document.getElementById(n).scrollIntoView();
    },
  },
};
</script>
<style>
@import "../styles/root.css";
body,
head,
* {
  font-size: 10px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.site {
  scroll-behavior: smooth;
}
.sectionTitle {
  font-size: var(--h2);
}
.text {
  font-size: var(--h4);
}
.source {
  font-size: var(--h5);
}
.sectionsubTitle {
  font-size: var(--h3);
}
.cardTitle {
  font-size: var(--h4);
  color: aliceblue;
}
.cardText {
  font-size: var(--h5);
  color: aliceblue;
}
.card-image {
  height: 250px;
  width: 250px;
  object-fit: cover;
}
.section {
  padding: 1rem;
}
.theme1 {
  background-color: var(--color7);
  color: var(--color6);
}
.theme2 {
  background-color: var(--color5);
  color: var(--color0);
}
</style>
