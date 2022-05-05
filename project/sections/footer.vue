<template>
  <div class="footer">
    <div class="footer-img">
      <img
        src="https://theacademy.la/wp-content/uploads/2017/04/facebook-logo-png-transparent-background.png"
        alt=""
        class="logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
        alt=""
        class="logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"
        alt=""
        class="logo"
      />
      <img
        src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png"
        alt=""
        class="logo"
      />
      <img
        src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2"
        alt=""
        class="logo"
      />
    </div>
    <p class="footer-text">Terms of Use</p>
    <p class="footer-text">Privacy Policy</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer-img {
  text-align: center;
}
.logo {
  height: 3rem;
  height: 3rem;
  margin: 1.5rem;
}
.footer-text {
  text-align: center;
  font-size: var(--h4);
}
.footer-text:hover {
  text-decoration: underline;
}
</style>