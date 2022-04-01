<template>
  <div class="header">
    <div class="title">
      <h1 class="g">Galar Region</h1>
    </div>
    <div class="directory">
      <button class="button" v-on:click="navigate" :position="sections[0]">
        About
      </button>
      <button class="button" v-on:click="navigate" :position="sections[1]">
        Town
      </button>
      <button class="button" v-on:click="navigate" :position="sections[2]">
        Wild Area
      </button>
      <button class="button" v-on:click="navigate" :position="sections[3]">
        Gyms
      </button>
      <button class="button" v-on:click="navigate" :position="sections[4]">
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
    navigate: function () {
      const n = this.position;
      console.log(n);
      // this.$emit('trigger', n);
    },
  },
  data() {
    return {
      sections: ["about", "town", "wild", "gyms", "dynamax"],
    };
  },
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