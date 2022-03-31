<template>
  <div class="site">
    <Header @navigate="navigateTo"></Header>
    <About></About>
    <Towns></Towns>
    <Wild></Wild>
    <Gyms></Gyms>
    <!--<Dynamax></Dynamax>-->
  </div>
</template>
<script>
import Header from "../sections/header.vue";
import About from "../sections/about.vue";
import Towns from "../sections/towns.vue";
import Wild from "../sections/wild.vue";
import Gyms from "../sections/gyms.vue";
//import Dynamax from "../sections/Dynamax.vue";
export default {
  name: "site",
  components: {
    Header,
    About,
    Towns,
    Wild,
    Gyms,
    //Dynamax,
  },
  methods: {
    navigateTo: function (id) {
      document.getElementById(id).scrollIntoView(about);
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
</style>
