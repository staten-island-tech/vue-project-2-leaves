<template>
  <div class="gyms">
    <Gym
      v-for="gym in gyms"
      :key="gym"
      :name="gym.name"
      :location="gym.location"
      :image="gym.image"
      :pokemon="gym.pokemon"
      :badge="gym.badge"
      :leader="gym.leader"
      :dynamaxPokemon="gym.dynmax"
      :type="gym.specialty"
    >
    </Gym>
  </div>
</template>

<script>
import Gym from "../components/gym.vue";
export default {
  name: "Gyms",
  components: {
    Gym,
  },
  data() {
    return {
      gyms: [
        {
          gym: "1",
          name: "Turffield",
          location: "Turf Town",
          image:
            "https://static.wikia.nocookie.net/pokemon/images/6/67/Turffield_Stadium.png/revision/latest?cb=20191127144837",
          badge: "Grass Badge",
          pokemon: ["Gossifleur", "Eldegoss"],
          leader: "Milo",
          leaderimg:
            "https://static.wikia.nocookie.net/pokemon/images/b/bd/Milo_TW.png/revision/latest/scale-to-width-down/250?cb=20200218201330",
          dynmax: "Eldegoss",
          specialty: "Grass-Type",
        },
        {
          gym: "2",
          name: "Hulbury",
          location: "Bow Town",
          image:
            "https://static.wikia.nocookie.net/pokemon/images/5/5d/Hulbury_Stadium.png/revision/latest/top-crop/width/360/height/360?cb=20191127145706",
          badge: "Water Badge",
          pokemon: ["Goldeen", "Arrokuda", "Drednaw"],
          leader: "Nessa",
          leaderimg:
            "https://static.wikia.nocookie.net/pokemon/images/a/a1/Nessa_Masters.png/revision/latest/scale-to-width-down/220?cb=20210426180406",
          dynmax: "Eldegoss",
          specialty: "Water-Type",
        },
        {
          gym: "3",
          name: "Motostoke",
          location: "Engine City",
          image:
            "https://static1-us.millenium.gg/articles/2/89/52/@/95118-1200165-2019110314445300-3c66b776db1aa06323037049facd96d3-full-1-article_m-1.jpg",
          badge: "Fire Badge",
          pokemon: ["Ninetales", "Arcanine", "Centiskorch"],
          leader: "Kabu",
          leaderimg:
            "https://static.wikia.nocookie.net/pokemonlp-utomaikeru/images/3/3e/Sword_Shield_Kabu.png/revision/latest?cb=20191212021037",
          dynmax: "Centiskorch",
          specialty: "Fire-type",
        },
        {
          gym: "4",
          name: "Stow-on-Side",
          location: "Lateral Town",
          image:
            "https://static.wikia.nocookie.net/pokemon/images/5/5c/Stow-on-Side_Ghost_Stadium.png/revision/latest?cb=20191127180056",
          badge: "Fighting Badge",
          pokemon: ["Hitmontop", "Pangoro", "Sirfetched", "Machamp"],
          leader: "Bea",
          leaderimg:
            "https://static.wikia.nocookie.net/pokemon/images/a/a8/Bea_Masters.png/revision/latest/scale-to-width-down/188?cb=20210426180417",
          dynmax: "Machamp",
          specialty: "Fighting-Type",
        },
        {
          gym: "4",
          name: "Stow-on-Side",
          location: "Lateral Town",
          image:
            "https://static.wikia.nocookie.net/pokemon/images/5/5c/Stow-on-Side_Ghost_Stadium.png/revision/latest?cb=20191127180056",
          badge: "Ghost Badge",
          pokemon: ["Yamask", "Mimikyu", "Cursola", "Gengar"],
          leader: "Allister",
          leaderimg:
            "https://static.wikia.nocookie.net/pokemon/images/9/9a/Allister_TW.png/revision/latest/scale-to-width-down/243?cb=20200218201658",
          dynmax: "Gengar",
          specialty: "Ghost-Type",
        },
        {
          gym: "5",
          name: "Ballonlea",
          location: "Arabesque Town",
          image:
            "https://static.wikia.nocookie.net/pokemon/images/4/48/Ballonlea_Stadium.png/revision/latest?cb=20191127152611",
          badge: "Fairy Badge",
          pokemon: ["Weezing", "Mawile", "Togekiss", "Alcremie"],
          leader: " Opal",
          leaderimg:
            "https://archives.bulbagarden.net/media/upload/3/37/VSOpal.png",
          dynmax: "Alcremie",
          specialty: "Fairy-Type",
        },
        {
          gym: "6",
          name: "Circhester",
          location: "Circus Town",
          image:
            "https://static.wikia.nocookie.net/pokemon/images/a/a4/Circhester_Stadium_Sword.png/revision/latest?cb=20201110050126",
          badge: "Ice Badge",
          pokemon: ["Frosmoth", "Darmanitan", "Eiscue", "Lapras"],
          leader: "Melony",
          leaderimg:
            "https://archives.bulbagarden.net/media/upload/7/7e/VSMelony.png",
          dynmax: "Lapras",
          specialty: "Ice-Type",
        },
        {
          gym: "6",
          name: "Circhester",
          location: "Circus Town",
          image:
            "https://static.wikia.nocookie.net/pokemon/images/a/a4/Circhester_Stadium_Sword.png/revision/latest?cb=20201110050126",
          badge: "Rock Badge",
          pokemon: ["Barbaracle", "Shuckle", "Stonjourner", "Coalossal"],
          leader: "Gordie",
          leaderimg:
            "https://archives.bulbagarden.net/media/upload/6/6d/VSGordie.png",
          dynmax: "Coalossal",
          specialty: "Rock-Type",
        },
        {
          gym: "7",
          name: "Spikemuth",
          location: "Spike Town",
          image:
            "https://img.gamewith.net/article/thumbnail/rectangle/14029.png",
          badge: "Dark Badge",
          pokemon: ["Scrafty", "Malamar", "Skuntank", "Obstagoon"],
          leader: "Piers",
          leaderimg:
            "https://archives.bulbagarden.net/media/upload/7/77/VSPiers.png",
          dynmax: "Obstagoon",
          specialty: "Dark-Type",
        },
        {
          gym: "8",
          name: "Hammerlocke",
          location: "Knuckle City",
          image:
            "http://pm1.narvii.com/7525/4356ce5eed484c23052777a79e805c34382bdf19r1-845-481v2_uhq.jpg",
          badge: "Dragon Badge",
          pokemon: ["Gigalith", "Flygon", "Sandaconda", "Duraludon"],
          leader: "Raihan",
          leaderimg:
            "https://archives.bulbagarden.net/media/upload/7/70/VSRaihan.png",
          dynmax: "Duraludon",
          specialty: "Dragon-type",
        },
      ],
    };
  },
};
</script>

<style>
</style>