<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import ProductCard from '@/components/ProductCard.vue';
import { onMounted, ref } from 'vue';
import FetchProducts from '@/composables/FetchProducts';
import { useRoute } from 'vue-router';


const router = useRoute()
const search = ref(router.query.search)

const { products, loading, error, fetchData } = FetchProducts(`/products/search?q=${search.value}`)

onMounted(() => {
    fetchData()
})

</script>
<template>
    <NavBar />
        <h1 v-if="products.length > 0" class="title">Search Results for "{{ search }}"</h1>
    <p v-if="loading">Searching for "{{ search }}"</p>
    <p v-if="error">error</p>

    <p v-if="products?.length === 0">No items found for "{{ search }}"</p>

    <ul v-if="products.length > 0" class="products">

        <li v-for="product in products" :key="product.id" class="categorycard">
            <routerLink :to="`/product/${product.id}`">
                <ProductCard :percent="product.discountPercentage" :id="product.id" :description="product.description"
                    :title="product.title" :price="product.price" :thumbnail="product.thumbnail" :rating="product.rating" />
            </routerLink>
        </li>
    </ul>
    <FooterBar />
</template>
<style scoped>
h1.title {
    padding: 1em;
    font-weight: 700;
}

.categorycard {
    max-width: 300px;
    margin: 0 auto 2em;
    border-radius: 8px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
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
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
    }
}
</style>