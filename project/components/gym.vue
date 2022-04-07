<template>
  <div class="gym">
    <h5 class="cardTitle">{{ name }}</h5>
    <div class="gymInfo">
      <div class="gymCardLeft">
        <img class="cardImage" :src="image" alt="" />
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
        <img class="leader-image" :src="leaderPic" alt="" />
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
.gym {
  margin: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: var(--darkblue);
  flex-basis: 40%;
}
.leader-image {
  margin-top: 1rem;
  height: 150px;
  width: 200px;
  object-fit: cover;
}
.gymInfo {
  display: flex;
  flex-flow: row nowrap;
}
.gymCardLeft {
  margin-right: 1rem;
}
.gymCardRight {
  margin-left: 1rem;
}
</style>