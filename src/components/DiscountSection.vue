<script setup lang="ts">
import FetchProducts from '@/composables/FetchProducts';
import { computed, onMounted, ref } from 'vue';
import LoadingImg from '@/components/LoadingImg.vue';
import ProductCard from '@/components/ProductCard.vue';
const num = ref(10);
const startIndex = ref(0);
const { loading, error, fetchData, products } = FetchProducts(`/products?limit=100`);

onMounted(() => {
    fetchData();
});
const updateProducts = computed(() => {
    return products.value.slice(startIndex.value, num.value);
})

const prev = () => {
    startIndex.value = startIndex.value > 0 ? startIndex.value + 10 : startIndex.value;
    num.value = num.value > 10 ? num.value - 10 : num.value;
    window.scrollTo(0, 5);
    
}
const next = () => {
    startIndex.value = startIndex.value < 90 ? startIndex.value + 10 : startIndex.value;
    num.value = num.value < 100 ? num.value + 10 : num.value;
    window.scrollTo(0, 200);
}
</script>
<template>
    <div>
        <p v-if="loading">
            <LoadingImg />
        </p>
        <p v-if="error">error</p>
        <ul class="products">
            <li v-for="product in updateProducts" :key="product.id" class="categorycard">
                <routerLink :to="`/product/${product.id}`">
                    <ProductCard :thumbnail="product.thumbnail" :title="product.title" :rating="product.rating"
                        :description="product.description" :price="product.price" :percent="product.discountPercentage" />
                </routerLink>
            </li>
        </ul>
        <div class="flex">
            <button @click="prev" class="btn">prev</button>
            <button @click="next" class="btn">next</button>
        </div>

    </div>
</template>
<style scoped>
.products {
    padding: 1em;
    margin: 1em auto;
}
.btn{
    border-radius: 6px;
    border: none;
    padding: 1em;
}
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
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
}</style>