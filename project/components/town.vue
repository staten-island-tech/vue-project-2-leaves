<template>
  <div class="card">
    <img class="cardImage" :src="image" alt="" />
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
 }
 .card {
   background-color: var(--color4);
   padding: 1rem;
   margin: 1rem;
 }
</style>