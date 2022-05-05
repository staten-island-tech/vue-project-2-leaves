<template>
  <div class="gyms section" id="gyms">
    <h5 class="sectionTitle">Gyms</h5>
    <div class="gymsDisplay">
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
        :leaderPic="gym.leaderimg"
      >
      </Gym>
    </div>
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
            "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/02/pokemon-sword-shield-gym.jpg",
          badge: "Grass Badge",
          pokemon: ["Gossifleur", "Eldegoss"],
          leader: "Milo",
          leaderimg:
            "https://cdn.vox-cdn.com/thumbor/Qgj_P-3D9j_eSeKu0qAS0TeYHZQ=/0x0:1280x720/1200x800/filters:focal(536x188:740x392)/cdn.vox-cdn.com/uploads/chorus_image/image/65705410/2019110523335000_3C66B776DB1AA06323037049FACD96D3.0.jpg",
          dynmax: "Eldegoss",
          specialty: "Grass-Type",
        },
        {
          gym: "2",
          name: "Hulbury",
          location: "Bow Town",
          image:
            "https://video-game-guide-walkthrough.supersoluce.com/wp-content/uploads/2019/11/21/soluce-pokemon-epee-bouclier-skifford-025.jpg",
          badge: "Water Badge",
          pokemon: ["Goldeen", "Arrokuda", "Drednaw"],
          leader: "Nessa",
          leaderimg:
            "https://cdn.vox-cdn.com/thumbor/Y03QcfvpbCvJW49J1hbFvuiiTG4=/0x0:1920x1080/1200x800/filters:focal(815x249:1121x555)/cdn.vox-cdn.com/uploads/chorus_image/image/65705409/vlcsnap_2019_06_11_12h26m48s436.0.jpg",
          dynmax: "Drednaw",
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
            "https://img.gamewith.net/img/bc6b58cce6c293ab618ebff8d39a1c1a.jpg",
          dynmax: "Centiskorch",
          specialty: "Fire-type",
        },
        {
          gym: "4",
          name: "Stow-on-Side",
          location: "Lateral Town",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviCfSRSW8UGKhiEfpfNvlxvn6Yoca5EStNA&usqp=CAU",
          badge: "Fighting Badge",
          pokemon: ["Hitmontop", "Pangoro", "Sirfetched", "Machamp"],
          leader: "Bea",
          leaderimg:
            "https://cdn.vox-cdn.com/thumbor/AVU-ktOc4io_2v6UPV2Uc5QIkZY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18287550/chrome_2019_07_08_09_18_44.jpg",
          dynmax: "Machamp",
          specialty: "Fighting-Type",
        },
        {
          gym: "4",
          name: "Stow-on-Side",
          location: "Lateral Town",
          image:
            "http://pm1.narvii.com/7463/1eeafaf7bc8ec345e4d3eab5c4465c5cc28d2d95r1-1024-642v2_uhq.jpg",
          badge: "Ghost Badge",
          pokemon: ["Yamask", "Mimikyu", "Cursola", "Gengar"],
          leader: "Allister",
          leaderimg:
            "https://d.newsweek.com/en/full/1510559/pokemon-sword-shield-allister-gym-leader.jpg?w=1600&h=1600&q=88&f=01163c94f56a43a5d87fc32c583b3797",
          dynmax: "Gengar",
          specialty: "Ghost-Type",
        },
        {
          gym: "5",
          name: "Ballonlea",
          location: "Arabesque Town",
          image:
            "https://www.dailyesports.gg/wp-content/uploads/2020/04/Ballonlea-Gym.jpg",
          badge: "Fairy Badge",
          pokemon: ["Weezing", "Mawile", "Togekiss", "Alcremie"],
          leader: " Opal",
          leaderimg:
            "https://static2.gamerantimages.com/wordpress/wp-content/uploads/2020/01/Pokemon-Sword-And-Shield-Fairy-Gym-Leader-Opal.jpg",
          dynmax: "Alcremie",
          specialty: "Fairy-Type",
        },
        {
          gym: "6",
          name: "Circhester",
          location: "Circus Town",
          image:
            "https://oyster.ignimgs.com/wordpress/stg.ign.com/2020/05/Shield_gym_ice.png?fit=bounds&width=1280&height=720",
          badge: "Ice Badge",
          pokemon: ["Frosmoth", "Darmanitan", "Eiscue", "Lapras"],
          leader: "Melony",
          leaderimg:
            "https://cdn.vox-cdn.com/thumbor/Vzs2Ht-XJ4cgsmR7W7C8QEqnPEA=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19373478/2019110522453400_B8FAEF4816CAC2B76D11869B05CA7601.jpg",
          dynmax: "Lapras",
          specialty: "Ice-Type",
        },
        {
          gym: "6",
          name: "Circhester",
          location: "Circus Town",
          image:
            "https://static1-us.millenium.gg/articles/1/91/11/@/101997-part13-article_m-2.png",
          badge: "Rock Badge",
          pokemon: ["Barbaracle", "Shuckle", "Stonjourner", "Coalossal"],
          leader: "Gordie",
          leaderimg:
            "https://poketouch.files.wordpress.com/2019/12/gordie_pokemon_sword_and_shield.jpg?w=504",
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
            "https://cdn.vox-cdn.com/thumbor/5ygG3NhbqXz5UOHzBRM4uuN-peY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19373756/2019111112335300_3C66B776DB1AA06323037049FACD96D3.jpg",
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
            "https://res.cloudinary.com/lmn/image/upload/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/c/h/a/champion-cup-raihan-team-c5cae.png",
          dynmax: "Duraludon",
          specialty: "Dragon-type",
        },
      ],
    };
  },
};
</script>

<style>
.gymsDisplay {
  overflow-x: none;
  overflow-y: auto;
  display: flex;
  justify-content: space between;
  flex-flow: row nowrap;
}
</style>