<template>
  <div class="hi">
    <div class="title">
      <h1 class="g">Galar Region</h1>
    </div>
    <div class="directory">
      <button>About</button>
      <button>Town</button>
      <button>Wild Area</button>
      <button>Gyms</button>
      <button>Dynmax</button>
      <button>Theme</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
.title {
  height: 6vh;
  background: #3f0000;
  text-align: center;
  color: aliceblue;
}
h1 {
  font-size: var(--extraLarge);
}
.directory {
  background-color: var(--lightblue);
  height: 5vh;
  text-align: center;
}
button {
  font-size: var(--h2);
  margin: 1rem;
  background-color: var(--lightblue);
}
</style>