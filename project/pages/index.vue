<template>
  <div class="site">
    <Header></Header>
    <About></About>
    <Towns></Towns>
    <Wild></Wild>
    <Gym></Gym>
  </div>
</template>
<script>
import Header from "../sections/header.vue";
import About from "../sections/about.vue";
import Towns from "../sections/towns.vue";
import Wild from "../sections/wild.vue";
import Gym from '../sections/gym.vue';
export default {
  name: "site",
  components: {
    Header,
    About,
    Towns,
    Wild,
    Gym,
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
  font-size: var(--h4);
}
.source {
  font-size: var(--h5);
}
.sectionsubTitle {
  font-size: var(--h3);
}
</style>
