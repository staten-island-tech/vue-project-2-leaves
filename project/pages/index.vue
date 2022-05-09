<template>
  <div class="site" id="site">
    <div class="header" id="title">
      <h1 class="siteTitle " id="site-title">Galar Region</h1>
      <img
        class="map "
        src="https://images.nintendolife.com/0cb4cd2bf797b/1280x720.jpg"
        alt=""
      />
    </div>
    <div>
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
    gsap,
  },
  gsap() {
    const tl = gsap.timeline({ delay: 0.8 });
    tl.from(".site-title", { opacity: 0, duration: 0.3 });
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
      if (document.body.classList.contains("theme1")) {
        document.body.classList.add("theme2");
        document.body.classList.remove("theme1");
      } else {
        document.body.classList.add("theme1");
        document.body.classList.remove("theme2");
      }
    },
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
  height: 400px;
  width: 600px;
  object-fit: cover;
}
.siteTitle {
  font-size: var(--h1);
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
  width: 88%;
  margin-left: 2%;
  margin-right: 6%;
}
.sectionTitle,
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
  color: var(--color3);
  background-color: var(--color1);
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
</style>