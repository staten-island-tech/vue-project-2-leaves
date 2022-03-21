<template>
  <div class="towns">
    <h4 class="sectionTitle">Towns</h4>
    <Card></Card>
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
          hasGym: true,
          desc: "",
        },
        {
          name: "Hulbury",
          image:
            "https://static.wikia.nocookie.net/pokemon/images/5/5d/Hulbury_Stadium.png/revision/latest?cb=20191127145706",
          hasGym: true,
          desc: "",
        },
        {
          name: "Motostoke",
          image:
            "https://static1-us.millenium.gg/articles/2/89/52/@/95118-1200165-2019110314445300-3c66b776db1aa06323037049facd96d3-full-1-article_m-1.jpg",
          hasGym: true,
          desc: "",
        },
        {
          name: "Stow-on-Side",
          image:
            "https://img.gamewith.net/article/thumbnail/rectangle/14027.png",
          hasGym: true,
          desc: "",
          route: [], //<-num array of routes, should we keep it this way or just write the routes in the description?
        },
        {
          name: "Ballonlea",
          image:
            "https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2019/12/04/all-ballonlea-gym-answers-in-pokemon-sword-and-shield_feature.jpg",
          hasGym: true,
          desc: "",
        },
        {
          name: "Circhester",
          image:
            "https://img.gamewith.net/article/thumbnail/rectangle/14028.png",
          hasGym: true,
          desc: "",
        },
        {
          name: "Spikemuth",
          image:
            "https://img.gamewith.net/article/thumbnail/rectangle/14029.png",
          hasGym: true,
          desc: "",
        },
        {
          name: "Wedgehurst",
          image:
            "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-switch/b/bb/Wedgehurst.png",
          hasGym: true,
          desc: "",
        },
      ],
    };
  },
};
</script>

<style>
</style>