<template>
  <div class="site">
    <div>
      <Header
        @trigger="navigateAbout"
        @trigger2="navigateTowns"
        @trigger3="navigateWild"
        @trigger4="navigateGyms"
        @trigger5="navigateDynamax"
        @themeswitch="changetheme"
      ></Header>
      <About></About>
      <Towns></Towns>
      <Wild></Wild>
      <Gyms></Gyms>
      <Dynamax></Dynamax>
    </div>
  </div>
</template>
<script>
import Header from "../sections/header.vue";
import About from "../sections/about.vue";
import Towns from "../sections/towns.vue";
import Wild from "../sections/wild.vue";
import Gyms from "../sections/gyms.vue";
import Dynamax from "../sections/dyna.vue";
import Footer from "../sections/footer.vue";
export default {
  name: "site",
  components: {
    Header,
    About,
    Towns,
    Wild,
    Gyms,
    Dynamax,
    Footer,
  },
  methods: {
    navigateAbout: function (n) {
      document.getElementById("about").scrollIntoView("about");
    },
    navigateTowns: function (n) {
      document.getElementById("towns").scrollIntoView("towns");
    },
    navigateWild: function (n) {
      document.getElementById("wild").scrollIntoView("wild");
    },
    navigateGyms: function (n) {
      document.getElementById("gyms").scrollIntoView("gyms");
    },
    navigateDynamax: function (n) {
      document.getElementById("dynamax").scrollIntoView("dynamax");
    },
    changetheme() {
      this.theme = this.theme === "theme1" ? "theme2" : "theme1";
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
.text,
.cardTitle {
  font-size: var(--h4);
}
.source,
.cardText {
  font-size: var(--h5);
}
.sectionsubTitle {
  font-size: var(--h3);
}
.cardImage {
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
