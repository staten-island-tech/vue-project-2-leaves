<template>
  <div class="site">
    <div class="title">
      <h1 class="g">Galar Region</h1>
      <img class="map" src="https://images.nintendolife.com/0cb4cd2bf797b/1280x720.jpg" alt="">
    </div>
    <div>
      <NavBar
        @trigger="navigateAbout"
        @trigger2="navigateTowns"
        @trigger3="navigateWild"
        @trigger4="navigateGyms"
        @trigger5="navigateDynamax"
        @themeswitch="changeTheme"
      ></NavBar>
      <About></About>
      <Towns></Towns>
      <Wild></Wild>
      <Gyms></Gyms>
      <Dynamax></Dynamax>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/navbar.vue";
import About from "../sections/about.vue";
import Towns from "../sections/towns.vue";
import Wild from "../sections/wild.vue";
import Gyms from "../sections/gyms.vue";
import Dynamax from "../sections/dyna.vue";
import Footer from "../sections/footer.vue";
export default {
  name: "site",
  components: {
    NavBar,
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
      document.getElementById("dyna").scrollIntoView("dyna");
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
  text-align: center;
}
.site {
  scroll-behavior: smooth;
  background-color: var(--color3);
}
.map {
  height: 400px;
  width: 600px;
  object-fit: cover;
}
/* .theme1 {
  background-color: var(--color7);
  color: var(--color6);
}
.theme2 {
  background-color: var(--color5);
  color: var(--color0);
} */
</style>
