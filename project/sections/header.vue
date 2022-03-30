<template>
  <div class="header">
    <div class="title">
      <h1 class="g">Galar Region</h1>
    </div>
    <div class="directory">
      <button class="button" v-on:click="navigate" id="about">About</button>
      <button class="button" v-on:click="navigate" id="town">Town</button>
      <button class="button" v-on:click="navigate" id="wild">Wild Area</button>
      <button class="button" v-on:click="navigate" id="gyms">Gyms</button>
      <button class="button" v-on:click="navigate" id="dynamax">Dynmax</button>
      <button class="button">Theme</button>
    </div>
    <div class="map"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    navigate: function () {
      this.$emit('navigate', this.id);
    }
  }
};
</script>

<style>
.title {
  background: #3f0000;
  text-align: center;
}
.g {
  font-size: var(--extraLarge);
  color: var(--lightblue);
}
.directory {
  background-color: var(--lightblue);
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.button {
  flex-basis: 8%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: transparent;
  border: none;
  font-size: var(--h4);
}
.button:hover {
  transform: scaleX(1.2);
}
.map {
  text-align: center;
  height: 100vh;

  background-image: url("https://images.nintendolife.com/0cb4cd2bf797b/1280x720.jpg");
  background-size: cover;
}
</style>