<template>
  <div class="header">
    <section id="home">
      <div class="title">
        <h1 class="g">The Galar Region</h1>
      </div>
      <div class="directory">
        <button class="button" v-on:click="navigate1" :id="about">About</button>
        <button class="button" v-on:click="navigate2" :id="towns">Towns</button>
        <button class="button" v-on:click="navigate3" :id="wild">
          Wild Area
        </button>
        <button class="button" v-on:click="navigate" :id="gyms">Gyms</button>
        <button class="button" v-on:click="navigate" :id="dynamax">
          Dynmax
        </button>
        <button class="button theme" id="theme">Theme</button>
      </div>
      <div class="map"></div>
      <div></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    navigate1: function () {
      this.$emit("trigger", this.id);
    },
    navigate2: function () {
      this.$emit("trigger2", this.id);
    },
    navigate3: function () {
      this.$emit("trigger3", this.id);
    },
  },
};
</script>
<style>
.header {
  width: 100%;
  text-align: center;
}
.title, .directory {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.g {  
  font-size: var(--large);
}
.directory {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}
.button {
  background-color: transparent;
  border: none;

}
</style>