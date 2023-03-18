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
        <PreviousArr />
        <div class="flex"><span class="bold">{{ product.category }}</span>
            <span class="bold small">{{ product.brand }}</span>
        </div>
        <p v-if="error">error</p>
        <p v-if="loading">
            <LoadingImg />
        </p>
        <ProductDetails :product="product" v-else />
        <routerLink :to="nestedRoute" class="nes">View other products on Sales!!</routerLink>
        <router-view></router-view>
    </main>

    <FooterBar />
</template>
<style scoped>
.nes {
    color: rgb(71, 126, 148);
    padding: 0.5em;
    margin-bottom: 1em;
    display: inline-block;
    text-transform: capitalize;
    font-weight: 600;
}

.bold {
    font-weight: 600;
    font-size: 1.9em;
    text-transform: capitalize;
}

.small {
    font-size: 1.2em;
    color: rgb(151, 156, 156);
}

.proddesc_wrapper {
    padding: 1em 2em;
}

.flex {
    display: flex;
    align-items: center;
    gap: 1em;
}</style>