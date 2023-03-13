<script  lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import FooterBar from '@/components/FooterBar.vue';
import Navbar from '@/components/NavBar.vue';
import FetchProduct from '@/composables/FetchProduct';
import ProductDetails from '@/components/ProductDetails.vue';

const route = useRoute()
const router = useRouter();
const { id } = route.params

const { loading, error, fetchData, product } = FetchProduct(`/products/${id}`);
onMounted(() => {
    fetchData();
});
const handleback = () => {
    router.go(-1)
}
</script>
<template>

    <Navbar />
    <button @click="handleback">go back</button>
    <h1><span>{{ product.category }}</span> > <span>{{ product.brand }}</span></h1>
     <p v-if="loading">loading</p>
     <p v-if="error">error</p>
     <ProductDetails :product="product"/>
    <FooterBar/>
</template>