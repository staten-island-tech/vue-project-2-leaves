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
.town {
  margin: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: var(--darkblue);
}
.cardTitle {
  font-size: var(--h4);
  color: aliceblue;
}
.cardText {
  font-size: var(--h6);
}
.card-image {
  height: 200px;
  width: 200px;
  object-fit: cover;
}
</style>