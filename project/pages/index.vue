<template>
  <div class="site">
    <div>
      <Header
        @trigger="navigateToabout"
        @trigger2="navigateTotown"
        @trigger3="navigateTowild"
      ></Header>
      <!-- <About></About>
      <Towns></Towns>
      <Wild></Wild>
      <Gyms></Gyms>
      <Dynamax></Dynamax>
      <Footer></Footer> -->
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
    navigateToabout: function (n) {
      document.getElementById("about").scrollIntoView("about");
    },
    navigateTotown: function (n) {
      document.getElementById("towns").scrollIntoView("towns");
    },
    navigateTowild: function (n) {
      document.getElementById("wild").scrollIntoView("wild");
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

</style>