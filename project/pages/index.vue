<template>
  <div class="site">
    <Header></Header>
    <About></About>
    <Towns></Towns>
  </div>
</template>
<script>
import Header from "../sections/header.vue"
import About from "../sections/about.vue"
import Towns from "../sections/towns.vue"
export default {
  name: "site",
  components: {
    Header,
    About,
    Towns,
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
.sectionTitle {
  font-size: var(--h2);
}
.text {
  font-size: var(--h5);
}


</style>
