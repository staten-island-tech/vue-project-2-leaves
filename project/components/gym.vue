<template>
  <div class="card">
    <h5 class="cardTitle">{{ name }}</h5>
    <div class="gymContainer">
      <div class="gymCardLeft">
        <img class="cardImage" :src="image" alt='An image of ${name}, one of the Galarian gyms' />
        <p class="cardText">Location: {{ location }}</p>
        <p class="cardText">Badge: {{ badge }}</p>
        <p class="cardText">Specialty: {{ type }}</p>
      </div>
      <div class="gymCardRight">
        <p class="cardText">Dynamax Pokemon: {{ dynamaxPokemon }}</p>
        <p class="cardText">Pokemon:</p>
        <p class="cardText" v-for="pokemon in pokemon" :key="pokemon">
          {{ pokemon }}
        </p>
        <img class="leaderImage" :src="leaderPic" alt="" />
        <p class="cardText">Gym Leader: {{ leader }}</p>
      </div>
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
.gymContainer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
}
.leaderImage {
  height: 15rem;
  width: 22rem;
  object-fit: cover;
}
.cardImage {
  height: 80%;
  width: 80%;
  object-fit: cover;
}
.gymCardLeft, .gymCardRight {
  margin: 1rem;
}
.cardText {
  color: var(--color1);
  font-size: var(--h5);
}
</style>