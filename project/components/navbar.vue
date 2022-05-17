<template>
  <div class="navbar">
    <div class="directory">
      <button class="button" v-on:click="navigate0">Top</button>
      <button class="button" v-on:click="navigate1">About</button>
      <button class="button" v-on:click="navigate2">Towns</button>
      <button class="button" v-on:click="navigate3">Wild Area</button>
      <button class="button" v-on:click="navigate4">Gyms</button>
      <button class="button" v-on:click="navigate5">Dynmax</button>
      <button class="button" v-on:click="switchtheme">Theme</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    navigate0: function () {
      this.$emit("trigger0");
    },
    navigate1: function () {
      this.$emit("trigger1");
    },
    navigate2: function () {
      this.$emit("trigger2");
    },
    navigate3: function () {
      this.$emit("trigger3");
    },
    navigate4: function () {
      this.$emit("trigger4");
    },
    navigate5: function () {
      this.$emit("trigger5");
    },
    switchtheme: function () {
      this.$emit("trigger6");
    },
  },
};
</script>
<style>
.navbar {
  z-index: 2;
  left: 92%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  height: 100vh;
  width: 8%;
  position: fixed;
  background-color: var(--color2);
  
}
.directory {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  justify-content: center;
}
.button {
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  opacity: 1;
  background-color: transparent;
  border: none;
  color: var(--color1);
  font-size: var(--h4);
  transition-duration: 0.2s;
  text-align: right;
  margin-right: 1rem;
}
.button:hover {
  
  transform: translate(-20px) scale(1.2);
}
</style>