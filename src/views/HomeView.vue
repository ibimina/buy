<script setup lang="ts">
import LandingNavbar from '@/components/LandingNavbar.vue';

</script>

<template>
  <main class="landing">
    <LandingNavbar />
    <section class="hero">
      <div class="intro">
        <h1 class="title">Best Place to Buy <span class="green">Everything</span> </h1>
        <p class="text">At Bachira, you can shop for all your favorite beauty brands, clothes,
          household products and more at a single place.</p>
        <RouterLink to="/products" class="shopping">Shopping now</RouterLink>
      </div>
      <div class="image">
        <img :src="'/Hero Image.png'" alt="a lady with shopping bags">
      </div>
    </section>
    <section class="categories">
      <h2>Browse categories of<span class="store">the store</span> </h2>
      <div class="category">
        <div class="col_one">
          <div class="bg_img fashion">
            <h3 class="bold">fashion</h3>
            <p class="light">30,000 items</p>
          </div>
          <div class="bg_img skincare">
            <h3 class="bold">skincare</h3>
            <p class="light">2,000 items</p>
          </div>
        </div>
        <div class="col_two">
          <div class="bg_img shoe">
            <h3 class="bold">shoes</h3>
            <p class="light">10,000 items</p>
          </div>
          <div class="bg_img electronics">
            <h3 class="bold">electronics</h3>
            <p class="light">10,000 items</p>
          </div>
        </div>
      </div>
    </section>
    <section class="why">
      <h3>Why choose Buy?</h3>
      <div class="delivery">
        <img :src="'/images/delivery.png'" alt="a delivery bus" class=" land_icon">
        <h4>Free Delivery</h4>
        <p class="grey">Free delivery across Nigeria</p>
      </div>
      <div class="trust"><img :src="'/images/trust.png'" alt="shaking hands" class="land_icon">
        <h4>Trusted platform</h4>
        <p class="grey">We are partners with top leading E-commerce and brands</p>
      </div>
      <div class="support"><img :src="'/images/support.png'" alt="24/7" class="land_icon">
        <h4>here for you</h4>
        <p class="grey">24/7 customer support avaliable</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.landing {
  padding: 1em 2em;
}

.text {
  color: #535A56;
}

.hero {
  margin-top: 2em;
}

.title {
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 0.5em;
}

.green {
  color: #1B4B66;
  display: block;
  font-weight: 700;
}

.shopping {
  color: #fff;
  background-color: #1B4B66;
  padding: 1em;
  border-radius: 8px;
  display: inline-block;
  margin: 1em 0;
  transition: all 0.2s ease-in-out;
}

.shopping:hover {
  background-color: #000;
}

.image {
  max-width: 600px;
  margin: auto;
}

.col_one,
.fashion,
.shoe {
  margin-bottom: 1em;
}

.bg_img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 10em;
  border-radius: 10px;
  color: #fff;
  text-align: right;
  padding: 1em 2em;
}

.bg_img {
  text-transform: capitalize;
}

.fashion {
  background-image: url('../assets/fashion.png');
}

.electronics {
  background-image: url('../assets/electronics.png');
}

.skincare {
  background-image: url('../assets/skincare.png');
}

.shoe {
  background-image: url('../assets/shoe.png');
}

.land_icon {
  width: 70px;
  margin: auto;
}
.why{
  text-align: center;
  margin: 1em 0;
}
.grey{
  color: #535A56;
}
.bold {
  font-size: 20px;
  font-weight: 700;
}

.light {
  font-weight: 500;
}

@media (min-width:60rem) {
  .landing {
    padding-inline: 5em;
  }

  .title {
    font-size: 54px;
    line-height: 60px;
    margin-bottom: 0.5em;
  }

  .hero {
    display: grid;
    grid-template-columns: 40% 60%;
  }
}</style>