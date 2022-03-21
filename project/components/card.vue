<template>
  <div class="card">
    <div class="card-front">
      <img class="card-image" :src="image" alt="">
      <h5 class="cardTitle">{{ name }}</h5>
    </div>
    <!-- <div class="card-back">
      <h5 class="cardTitle">{{ name }}</h5>
      <p class="cardText">{{ description }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
    name: "Card",
    props: {
      name: String,
      image: String,
      description: String,
    },
    // data() {
    //   showCard: true;
    //   showCard2: false;
    // },
    // methods: {
    //   flip: function () {
    //     if (this.showCard===true) {
    //       this.showCard2 = true;
    //       this.showCard = false;
    //     }
    //     else {
    //       this.showCard2 = false;
    //       this.showCard = true;
    //     }
    //   }
    // },
}
</script>

<style>
  .card {
    margin: 1rem;
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: var(--darkblue);
  }
  .cardTitle {
    font-size: var(--h4);
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