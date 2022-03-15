<template>
  <div class="site">
    <Header></Header>
  </div>
</template>
<script>
import Header from "../components/header.vue"
export default {
  components: {
    Header,
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
