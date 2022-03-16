<template>
  <div class="site">
    <Header></Header>
    <About></About>
    <Towns></Towns>
  </div>
</template>
<script>
import Header from "../components/header.vue"
import About from "../components/about.vue"
import Towns from "../components/towns.vue"
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


</style>
