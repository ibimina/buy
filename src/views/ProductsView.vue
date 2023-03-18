<script setup lang="ts">
import Navbar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
import PromotionBox from '@/components/PromotionBox.vue';
import FooterBar from '@/components/FooterBar.vue';

</script>
<template>
    <div class="paddin">
     <Navbar />
        <section class="wrapper">
            <SideBar />
            <div>
                <PromotionBox url='/products?limit=6' title="Top rating" />
                <PromotionBox url='/products/category/fragrances?limit=8' title="Best Deals" />        
                </div>
        </section>
    </div>  
    <FooterBar />
</template>

<style scoped>
.paddin {
    padding: 1.5em 2em;
}
.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    margin: 2em auto;
}
@media (min-width:60rem) {
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 6fr;
    }
}
</style>