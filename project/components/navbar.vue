<template>
  <div class="navbar">
        <div class="directory">
          <button class="button" v-on:click="navigate1" :id="about">
            About
          </button>
          <button class="button" v-on:click="navigate2" :id="towns">
            Towns
          </button>
          <button class="button" v-on:click="navigate3" :id="wild">
            Wild Area
          </button>
          <button class="button" v-on:click="navigate4" :id="gympart">
            Gyms
          </button>
          <button class="button" v-on:click="navigate5" :id="dynamax">
            Dynmax
          </button>
          <div :class="theme === 'theme1' ? 'theme1' : 'theme2'">
            <button class="button" v-on:click="themeswitch" :id="theme">
              Theme
            </button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    navigate: function () {
      console.log(this.id);
      this.$emit('trigger', this.id);
    },
  },
  
}
</script>
<style>
  .navbar {
    z-index: 2;
    left: 88%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    height: 100vh;
    width: 12%;
    position: fixed;
    background-color: thistle;
  }
  .directory {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    height: 100vh;
  }
</style>