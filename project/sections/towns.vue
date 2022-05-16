<template>
  <div class="towns section" id="towns">
    <h4 class="sectionTitle">Towns</h4>
    <div class="townsDisplay">
      <Town
        v-for="town in towns"
        :key="town.name"
        :name="town.name"
        :image="town.image"
        :description="town.desc"
      ></Town>
    </div>
  </div>
</template>

<script>
import Town from "../components/town.vue";
export default {
  name: "Towns",
  components: {
    Town,
  },
  data() {
    return {
      towns: [
        {
          name: "Tuffield",
          image:
            "https://images.gnwcdn.com/2019/articles/2019-11-21-16-42/pokemon_sword_shield_turffield_gym_milo_1.jpg/EG11/resize/375x-1/quality/75/format/jpg",
          desc: "image of tuffield, a town in the galar region",
        },
        {
          name: "Hulbury",
          image:
            "https://img.gamewith.net/article/thumbnail/rectangle/14025.png",
          desc: "image of hulbury, a town in the galar region",
        },
        {
          name: "Motostoke",
          image:
            "https://static1-us.millenium.gg/articles/2/89/52/@/95118-1200165-2019110314445300-3c66b776db1aa06323037049facd96d3-full-1-article_m-1.jpg",
          desc: "image of motostoke, a town in the galar region",
        },
        {
          name: "Stow-on-Side",
          image:
            "https://img.gamewith.net/article/thumbnail/rectangle/14027.png",
          desc: "image of stow-on-side, a town in the galar region",
        },
        {
          name: "Ballonlea",
          image:
            "https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2019/12/04/all-ballonlea-gym-answers-in-pokemon-sword-and-shield_feature.jpg",
          desc: "image of ballonlea, a town in the galar region",
        },
        {
          name: "Circhester",
          image:
            "https://img.gamewith.net/article/thumbnail/rectangle/14028.png",
          desc: "image of circhester, a town in the galar region",
        },
        {
          name: "Spikemuth",
          image:
            "https://img.gamewith.net/article/thumbnail/rectangle/14029.png",
          desc: "image of spikemuth, a town in the galar region",
        },
        {
          name: "Wedgehurst",
          image:
            "https://images.nintendolife.com/84d99dc944dce/wedgehurst.900x.jpg",
          desc: "image of wedgehurst, a town in the galar region",
        },
      ],
    };
  },
};
</script>

<style>
.townsDisplay {
  overflow-x: auto;
  overflow-y: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
</style>