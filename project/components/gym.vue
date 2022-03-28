<template>
  <div class="gym">
    <img class="card-image" :src="image" alt="" />
    <h5 class="cardTitle">{{ name }}</h5>
    <div class="gym info">
      <p class="cardText">Location: {{ location }}</p>
      <p class="cardText">Badge: {{ badge }}</p>
      <p class="cardText">Specialty: {{ type }}</p>
      <p class="cardText">Leader: {{ leader }}</p>
      <img class="leader-image" :src="leaderPic" alt="" />
      <p class="cardText">Pokemon: {{ pokemon }}</p>
      <p class="cardText">Dynamax Pokemon: {{ dynamaxPokemon }}</p>
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
    leaderPic: String,
  },
};
</script>

<style>
.gym {
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: var(--darkblue);
  flex-basis: 40%;
}
</style>