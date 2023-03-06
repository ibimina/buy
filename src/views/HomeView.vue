<script setup lang="ts">
import LandingNavbar from '@/components/LandingNavbar.vue';
import hero from"../assets/images/Hero Image.png"

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
        <img :src="'src/assets/images/Hero Image.png'" alt="a lady with shopping bags">
      </div>
    </section>
    <section class="brands">
<h2>We Collaborate With 250++ Leading Top
  E Commerce and Brands</h2>
  <div class="brands">

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
.shopping:hover{
  background-color: #000;
}
.image {
  max-width: 600px;
  margin: auto;
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