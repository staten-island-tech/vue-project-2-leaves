<template>
  <div class="gym">
    <img class="card-image" :src="image" alt="" />
    <h5 class="cardTitle">{{ name }}</h5>
    <div class="gym info">
      <h5>{{ location }}</h5>
      <h5>{{ badge }}</h5>
      <h5>{{ type }}</h5>
      <h5>{{ leader }}</h5>
      <img class="leader-image" :src="leaderimg" alt="" />
      <h5>{{ pokemon }}</h5>
      <h5>{{ dynamaxPokemon }}</h5>
    </div>
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
    leaderimg: String,
  },
};
</script>

<style>
</style>