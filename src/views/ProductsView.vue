<script setup lang="ts">
import Navbar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
import PromotionBox from '@/components/PromotionBox.vue';
import FooterBar from '@/components/FooterBar.vue';

</script>
<template>
    <Navbar />
    <section class="wrapper">
        <SideBar />
        <div>
             <PromotionBox url='/products?limit=6' title="Top rating" />
            <PromotionBox url='/products/category/fragrances?limit=8' title="Best Deals" />        
            </div>
    </section>
    <FooterBar />
</template>

<style scoped>
@media (min-width:60rem) {
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 6fr;
      padding: 1em;
    }
}
</style>