<template>
  <div class="hi">
    <h1 class="g">hi</h1>
    <NuxtLogo></NuxtLogo>
  </div>
</template>

<script>
export default {
<<<<<<< Updated upstream
  components: {},
  
}
=======
  name: "site",
  components: {
    Header,
    About,
    Towns,
    Wild,
    Gyms,
    Dynamax,
    Footer,
  },
  methods: {
    navigateTo: function (n) {
      document.getElementById("about").scrollIntoView();
    },
  },
};
>>>>>>> Stashed changes
</script>

<style>
<<<<<<< Updated upstream
  @import '../styles/root.css';
  body, head {
    background-color: var(--neonblue);
  }
  .hi {
    height: 100vh;
    background-color: var(--lightblue);
  }
</style>
=======
@import "../styles/root.css";
body,
head,
* {
  font-size: 10px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.site {
  background-image: linear-gradient(90deg, var(--color1), var(--color2), var(--color3), var(--color4), var(--color5), var(--color6), var(--color7), var(--color8), var(--color9));
}
.sectionTitle {
  font-size: var(--h2);
}
.text {
  font-size: var(--h4);
}
.source {
  font-size: var(--h5);
}
.sectionsubTitle {
  font-size: var(--h3);
}
.cardTitle {
  font-size: var(--h4);
  color: aliceblue;
}
.cardText {
  font-size: var(--h5);
  color: aliceblue;
}
.card-image {
  height: 250px;
  width: 250px;
  object-fit: cover;
}
.section {
  padding: 1rem;
}
</style>
>>>>>>> Stashed changes
