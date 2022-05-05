<template>
  <div class="site" :class="mode" id="website">
    <div class="title" id="title">
      <h1 class="g">Galar Region</h1>
      <img
        class="map"
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
        @themeswitch="modeswitch"
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
export default {
  name: "site",
  data() {
    return {
      mode: "theme2",
    };
  },
  components: {
    NavBar,
    About,
    Towns,
    Wild,
    Gyms,
    Dynamax,
    Footer,
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
    modeswitch: function () {
      if (this.mode === "theme1") {
        this.mode === "theme2";
      } else {
        this.mode === "theme1";
      }
    },
  },
};
</script>
<style>
@import "../styles/root.css";
body,
head,
* {
  font-size: 10px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
  scroll-behavior: smooth;
}
body,
head {
  background-color: var(--color3);
}
.map {
  height: 400px;
  width: 600px;
  object-fit: cover;
}
.g {
  font-size: var(--h1);
  margin: 2rem;
  animation-name: glow;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
.site {
  width: 88%;
  margin-left: 6%;
  margin-right: 6%;
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
.sectionSubTitle {
  font-size: var(--h3);
}
.imageCaption {
  font-size: var(--h4);
  color: var(--color1);
}
.section {
  margin-top: 10rem;
  padding-top: 3rem;
}
.theme1 {
  background-color: var(--color1);
  color: var(--color3);
}
.theme2 {
  background-color: var(--color2);
  color: var(--color0);
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