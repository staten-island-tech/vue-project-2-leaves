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
        </div>
        <!-- <div :class="theme === 'theme1' ? 'theme1' : 'theme2'">
          <button class="button" v-on:click="themeswitch" :id="theme">
            Theme
          </button>
        </div> -->
    </div>
</template>

<script>
export default {
  name: "NavBar",
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
    navigate4: function () {
      this.$emit("trigger4", this.id);
    },
    navigate5: function () {
      this.$emit("trigger5", this.id);
    },
  },
  
}
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
    color: var(--color0);
    background-color: transparent;
    border: none;
    font-size: var(--h4);
    transition-duration: 0.2s;
    text-align: right;
    margin-right: 1rem;
  }
  .button:hover {
    color: var(--color1);
    transform: translate(-20px) scale(1.2);
  }
</style>