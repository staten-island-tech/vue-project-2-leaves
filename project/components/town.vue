<template>
  <div class="town">
      <img class="card-image" :src="image" alt="" />
      <h5 class="cardTitle">{{ name }}</h5>
      <!-- <p class="cardText">{{ description }}</p> -->
      
  </div>
</template>

<script>
export default {
  name: "Town",
  props: {
    name: String,
    image: String,
    description: String,
  },
  // data() {
  //   trigger: false;
  // },
  // methods: {
  //   flip: function () {
  //     if (this.trigger===false) {
  //       this.trigger = true;
  //     }
  //     else {
  //       this.trigger = false;
  //     }
  //   }
  // },
};
</script>

<style>

</style>