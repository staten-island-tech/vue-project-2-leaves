<template>
  <div class="towns">
    <h4 class="sectionTitle">Towns</h4>
    <div class="display">
      <Card v-for="town in towns" :key="town" :name="town.name" :image="town.image" :description="town.desc"></Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/card.vue";
export default {
  name: "Towns",
  components: {
    Card,
  },
  data() {
    return {
      towns: [
        {
          name: "Tuffield",
          image:
            "https://static.wikia.nocookie.net/pokemon/images/6/67/Turffield_Stadium.png/revision/latest?cb=20191127144837",
          desc: "wfasdawd",
        },
        {
          name: "Hulbury",
          image:
            "https://static.wikia.nocookie.net/pokemon/images/5/5d/Hulbury_Stadium.png/revision/latest?cb=20191127145706",
          desc: "",
        },
        {
          name: "Motostoke",
          image:
            "https://static1-us.millenium.gg/articles/2/89/52/@/95118-1200165-2019110314445300-3c66b776db1aa06323037049facd96d3-full-1-article_m-1.jpg",
          desc: "",
        },
        {
          name: "Stow-on-Side",
          image:
            "https://img.gamewith.net/article/thumbnail/rectangle/14027.png",
          desc: "",
        },
        {
          name: "Ballonlea",
          image:
            "https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2019/12/04/all-ballonlea-gym-answers-in-pokemon-sword-and-shield_feature.jpg",
          desc: "",
        },
        {
          name: "Circhester",
          image:
            "https://img.gamewith.net/article/thumbnail/rectangle/14028.png",
          desc: "",
        },
        {
          name: "Spikemuth",
          image:
            "https://img.gamewith.net/article/thumbnail/rectangle/14029.png",
          desc: "",
        },
        {
          name: "Wedgehurst",
          image:
            "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-switch/b/bb/Wedgehurst.png",
          desc: "",
        },
      ],
    };
  },
};
</script>

<style>
  .display {
    display: flex;
    flex-flow: row nowrap;
    overflow-x: auto;
    overflow-y: none;
  }
</style>