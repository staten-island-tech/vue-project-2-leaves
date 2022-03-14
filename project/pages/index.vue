<template>
  <div class="hi">
    <h1 class="g">hi</h1>
    <NuxtLogo></NuxtLogo>
  </div>
</template>

<script>
export default {
  components: {},
  
}
</script>

<style>
  @import '../styles/root.css';
  body, head {
    background-color: var(--neonblue);
  }
  .hi {
    height: 100vh;
    background-color: var(--lightblue);
  }
</style>