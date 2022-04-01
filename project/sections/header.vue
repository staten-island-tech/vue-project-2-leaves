<template>
  <div class="header">
    <div class="title">
      <h1 class="g">Galar Region</h1>
    </div>
    <div class="directory">
      <button class="button" v-on:click="navigateAbout">About</button>
      <button class="button" v-on:click="navigateTown">
        Town
      </button>
      <button class="button" v-on:click="navigateWild">
        Wild Area
      </button>
      <button class="button" v-on:click="navigateGyms">
        Gyms
      </button>
      <button class="button" v-on:click="navigateDynamax">
        Dynmax
      </button>
      <button class="button" id="theme">Theme</button>
    </div>
    <div class="map"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    navigateAbout: function () {
      this.$emit('trigger1');
    },
    navigateTown: function () {
      this.$emit('trigger2');
    },
    navigateWild: function () {
      this.$emit('trigger3');
    },
    navigateGyms: function () {
      this.$emit('trigger4');
    },
    navigateDynamax: function () {
      this.$emit('trigger5');
    },
  },
  data() {
    return {
      sections: ["about", "town", "wild", "gyms", "dynamax"],
    }
  },
}
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
  background-color: black;
  color: var(--color6);
}
.map {
  text-align: center;
  height: 100vh;
  background-image: url("https://images.nintendolife.com/0cb4cd2bf797b/1280x720.jpg");
  background-size: cover;
}
</style>