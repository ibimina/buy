<script  lang="ts" setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import FooterBar from '@/components/FooterBar.vue';
import Navbar from '@/components/NavBar.vue';
import FetchProduct from '@/composables/FetchProduct';
import ProductDetails from '@/components/ProductDetails.vue';
import LoadingImg from '@/components/LoadingImg.vue';
import PreviousArr from '@/components/PreviousArr.vue';

const route = useRoute()
const { id } = route.params
const { loading, error, fetchData, product } = FetchProduct(`/products/${id}`);
onMounted(() => {
    fetchData();
});
const nestedRoute = `/product/${id}/discounts`
</script>
<template>
    <main class="proddesc_wrapper">
    <Navbar />
       <PreviousArr/>
        <div class="flex"><span class="bold">{{ product.category }}</span> 
            <img src="/images/icon-next.svg" alt="next " class="dir"> 
            <span class="bold">{{ product.brand }}</span></div>
        <p v-if="error">error</p> 
        <p v-if="loading"><LoadingImg/></p>
         <ProductDetails :product="product" v-else/>
         <routerLink :to="nestedRoute">You may also like</routerLink>
         <router-view></router-view>
    </main>
    
    <FooterBar/>
</template>
<style scoped>
.dir{
    width: 2em;
    height: 2em;
}
.bold{
    font-weight: 600;
    font-size: 1.9em;
    text-transform: capitalize;
}
.proddesc_wrapper{
    padding:1em 2em;
}
.flex{
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 0 2em;
}
</style>