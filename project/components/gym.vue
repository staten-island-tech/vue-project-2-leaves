<template>
  <div class="gym">
    <img class="card-image" :src="image" alt="" />
    <h5 class="cardTitle">{{ name }}</h5>
  </div>
</template>

<script>
export default {
  name: "Gym",
  props: {
    name: String,
    pokemon: [],
    location: String,
    badge: String,
    image: String,
    type: String,
    badge: String,
    leader: String,
    dynamaxPokemon: String,
    leaderPic: String,
  },
};
</script>

<style>
</style>