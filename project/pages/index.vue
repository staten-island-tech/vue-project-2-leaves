<template>
  <div class="site" id="site">
    <div class="header" id="title">
      <h1 class="siteTitle" id="site-title">Galar Region</h1>
      <img
        class="map"
        src="https://images.nintendolife.com/0cb4cd2bf797b/1280x720.jpg"
        alt=""
      />
    </div>
    <NavBar
      @trigger0="navigateTop"
      @trigger1="navigateAbout"
      @trigger2="navigateTowns"
      @trigger3="navigateWild"
      @trigger4="navigateGyms"
      @trigger5="navigateDynamax"
      @trigger6="changeTheme"
    ></NavBar>
    <About></About>
    <Towns></Towns>
    <Wild></Wild>
    <Gyms></Gyms>
    <Dynamax></Dynamax>
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from "../components/navbar.vue";
import About from "../sections/about.vue";
import Towns from "../sections/towns.vue";
import Wild from "../sections/wild.vue";
import Gyms from "../sections/gyms.vue";
import Dynamax from "../sections/dyna.vue";
import Footer from "../sections/footer.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  name: "site",
  components: {
    NavBar,
    About,
    Towns,
    Wild,
    Gyms,
    Dynamax,
    Footer,
  },

  mounted() {
    this.boxRotation();
    this.faded();
    this.scrollanimationtowns();
    this.scrollanimationgyms();
  },

  methods: {
    navigateTop: function (n) {
      document.body.scrollIntoView();
    },
    navigateAbout: function (n) {
      document.getElementById("about").scrollIntoView("about");
    },
    navigateTowns: function (n) {
      document.getElementById("towns").scrollIntoView("towns");
    },
    navigateWild: function (n) {
      document.getElementById("wild").scrollIntoView("wild");
    },
    navigateGyms: function (n) {
      document.getElementById("gyms").scrollIntoView("gyms");
    },
    navigateDynamax: function (n) {
      document.getElementById("dyna").scrollIntoView("dyna");
    },
    changeTheme: function (n) {
      if (document.body.classList.contains("theme2")) {
        document.body.classList.add("theme1");
        document.body.classList.remove("theme2");
      } else {
        document.body.classList.add("theme2");
        document.body.classList.remove("theme1");
      }
    },
    boxRotation() {
      const gsap = this.$gsap;
      gsap.from(".map", { rotation: 0, x: 740, duration: 1 });
    },
    faded() {
      const gsap = this.$gsap;
      gsap.from(".site", { opacity: 0, duration: 2 });
    },
    scrollanimationtowns() {
      /*const tl = this.$gsap.timeline({
        scrollTrigger: ".about",
        delay: 0.1,
      });
      tl.from(".about-animation", {
        duration: 0.3,
        opacity: 0,
        x: -150,
        ease: "Power1.easeInOut",
        stagger: 0.1,
      });*/
      const gsap = this.$gsap;
      gsap.registerPlugin("ScrollTrigger");
      gsap.from(".card-town", {
        scrollTrigger: {
          trigger: "#town",
          toggleActions: "restart none none none ",
        },
        rotation: 90,
        duration: 1,
        scale: 0.2,
      });
    },
    scrollanimationgyms() {
      const gsap = this.$gsap;
      gsap.registerPlugin("ScrollTrigger");
      gsap.from(".card-gym", {
        scrollTrigger: {
          trigger: "#gyms",
          toggleActions: "restart none none none ",
        },
        rotation: 90,
        duration: 1,
        scale: 0.2,
      });
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
@import "../styles/root.css";
@import url("https://fonts.googleapis.com/css2?family=Eczar:wght@500&family=Iceberg&family=Nova+Flat&display=swap");
body,
head,
* {
  font-size: 10px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: left;
  scroll-behavior: smooth;
}
body,
head {
  background-color: var(--color3);
  color: var(--color1);
}

.map {
  height: 40rem;
  width: 60rem;
  object-fit: cover;
}
.siteTitle {
  font-size: var(--large);
  margin-top: 2rem;
  margin-bottom: 3rem;
  animation-name: glow;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  font-family: "Iceberg", cursive;
  text-decoration: bold;
  text-align: center;
}
.site {
  width: 92%;
}
.sectionTitle,
.cardTitle,
.sectionSubTitle,
.button {
  font-family: "Nova Flat", cursive;
}
.header {
  text-align: center;
  margin-top: 3rem;
  margin-left: 5rem;
}
.sectionTitle {
  font-size: var(--h2);
  font-weight: 400;
  text-align: center;
}
.text,
.cardText,
.source,
.imageCaption {
  font-family: "Eczar", serif;
}
.text {
  font-size: var(--h4);
}
.source {
  font-size: var(--h5);
}
.sectionSubTitle {
  font-size: var(--h3);
}
.imageCaption {
  font-size: var(--h3);
}
.section {
  margin-top: 8.5rem;
  padding-top: 3rem;
  margin-left: 5rem;
}
.theme1 {
  color: var(--color1);
  background-color: var(--color3);
}
.theme2 {
  color: var(--color11);
  background-color: var(--color12);
}
.sectionSubTitle {
  margin-top: 1.5rem;
}
.text {
  margin-top: 0.8rem;
}

@keyframes glow {
  0% {
    color: var(--color10);
  }
  20% {
    color: var(--color6);
  }
  40% {
    color: var(--color9);
  }
  60% {
    color: var(--color8);
  }
  80% {
    color: var(--color7);
  }
  100% {
    color: var(--color6);
  }
}
@media screen and (max-width: 1100px) {
  .button {
    border: 0.2rem solid var(--color12);
  }
  .cardImage {
    width: 20rem;
    height: 20rem;
  }
  .leaderImage {
    height: 14rem;
    width: 19rem;
  }
  .cardText {
    font-size: var(--h3);
  }
  .section {
    margin-right: 5rem;
    margin-left: 5rem;
    padding: 0;
  }
  .navbar {
    z-index: 2;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 95%;
    height: auto;
    width: 100%;
    position: fixed;
    background-color: var(--color13);
  }
  .directory {
    display: flex;
    flex-flow: row wrap;
    height: auto;
    justify-content: space-evenly;
  }
  .button {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    opacity: 1;
    color: var(--color0);
    font-size: var(--h3);
    text-align: center;
    margin-right: 0;
  }
  .wildImage {
    height: 20rem;
    width: 37rem;
  }
  .dynamaxImage {
    height: 19rem;
    width: 32rem;
    object-fit: cover;
    text-align: center;
  }
  .site {
    margin-right: 0;
    margin-left: 0;
    width: 100%;
  }
  .header {
    margin-left: 0;
  }
}
@media screen and (max-width: 900px) {
  .cardImage {
    width: 17rem;
    height: 17rem;
  }
  .leaderImage {
    height: 11rem;
    width: 17rem;
  }
  .cardText {
    font-size: var(--h4);
  }
  .button {
    font-size: var(--h5);
  }
}
@media screen and (max-width: 700px) {
  body,
  head,
  * {
    font-size: 0.5rem;
  }
  .site {
    width: 100%;
  }
  .townsDisplay {
    overflow-x: none;
    overflow-y: auto;
  }
  .header {
    margin-top: 8rem;
  }
  .map {
    height: 25rem;
    width: 30rem;
    object-fit: cover;
  }
  .wildImage {
    height: 16rem;
    width: 29rem;
  }
}
</style>