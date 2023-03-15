<script setup lang="ts">import FetchProducts from '@/composables/FetchProducts';
import { onMounted } from 'vue';
import LoadingImg from '@/components/LoadingImg.vue';
import ProductCard from '@/components/ProductCard.vue';

const {loading,error,fetchData,products} = FetchProducts(`/products?limit=100`);
onMounted(() => {
    fetchData();
});


</script>
<template>
    <div>
        <div class="flex">
        </div>
        <p v-if="loading"><LoadingImg/></p>
        <p v-if="error">error</p>
        <ul class="products">
            <li v-for="product in products" :key="product.id" class="categorycard">
                <routerLink :to="`/product/${product.id}`">
                    <ProductCard :thumbnail="product.thumbnail" :title="product.title" :rating="product.rating"
                        :description="product.description" :price="product.price" :percent="product.discountPercentage" />
                </routerLink>
            </li>
        </ul>
      
    </div>
</template>
<style scoped>
.products {
    padding: 1em;
    margin: 1em auto;                         
}
@media (min-width: 40rem) {
    .products {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1em;
    }
}

@media (min-width: 60rem) {
    .products {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1em;
    }
}
</style>