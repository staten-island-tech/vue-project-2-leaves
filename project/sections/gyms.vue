<template>
  <div class="gyms">
    <Gym v-for="gym in gyms" 
      :key="gym" :name="gym.name" 
      :location="gym.location" 
      :image="gym.image" 
      :pokemon="gym.pokemon" 
      :badge="gym.badge" 
      :leader="gym.leader" 
      :dynamaxPokemon="gym.dynmax" 
      :type="gym.specialty">
    </Gym>
  </div>
</template>

<script>
import Gym from "../components/gym.vue"
export default {
  name: "Gyms",
  components: {
    Gym,
  },
  data() {
    return {
      gyms: [
      {
        name,
        location,
        image,
        badge,
        pokemon: [],
        leader,
        dynmax,
        specialty,
      },
      {
        name,
        location,
        image,
        badge,
        pokemon: [],
        leader,
        dynmax,
        specialty,
      },
    ]
    }
  }
};
</script>

<style>
</style>