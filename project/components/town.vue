<template>
  <div class="town">
      <img class="card-image" :src="image" alt="" />
      <h5 class="cardTitle">{{ name }}</h5>     
  </div>
</template>
<script>
export default {
  name: "Town",
  props: {
    name: String,
    image: String,
    description: String,
  },
};
</script>

<style>
 .cardTitle {
   font-size: var(--h4);
   color: var(--color1)
 }
 .town, .gym {
   background-color: var(--color4);
   padding: 1rem;
   margin: 1rem;
 }
</style>