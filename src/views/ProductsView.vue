<script setup lang="ts">
import Navbar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
import PromotionBox from '@/components/PromotionBox.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import FooterBar from '@/components/FooterBar.vue';

const router = useRouter()
const store = useStore()
const logOut = async (e: Event) => {
    e.preventDefault();
    await store.dispatch("logOut")
    router.push('/')
}

</script>
<template>
    <Navbar />
    <section class="wrapper">
        <SideBar />

        <div>
             <PromotionBox url='/products?limit=6' title="Top rating" />
            <PromotionBox url='/products/category/fragrances?limit=8' title="Best Deals" />
           
            <!-- <h1>Products {{ store?.state?.user?.displayName }}</h1>
                        <button @click="logOut">log out</button> -->
        </div>
    </section>
    <FooterBar />
</template>

<style scoped>
.bg {
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
@media (min-width:60rem) {
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 6fr;
      padding: 1em;
    }
}
</style>