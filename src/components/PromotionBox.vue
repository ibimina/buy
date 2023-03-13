<script setup lang="ts">
import FetchProducts from '@/composables/FetchProducts';
import { onMounted } from 'vue';
import DealProductCard from './DealProductCard.vue';
const props = defineProps<{
    title: string
    url: string
}>()

const { products, loading, error, fetchData } = FetchProducts(props.url)
onMounted(() => {
    fetchData()
})

</script>
<template>
    <div class="promotions">
        <p class="promo_title">{{ props.title }}</p>
        <p v-if="loading">loading...</p>
        <p v-if="error">error...</p>
        <ul class="promotion_products">
            <li v-for="product in products" :key="product.id" class="card">
                  <routerLink :to="`/product/${product.id}`">
                  <DealProductCard v-if="product.rating >= 4 && props.title === 'Top rating'" 
                        :title="product.title" :thumbnail="product.thumbnail" :description="product.description"
                        :price="product.price" :id="product.id" />
                  <DealProductCard v-if="product.price <= 200 && props.title === 'Best Deals'" 
                        :title="product.title" :thumbnail="product.thumbnail" :description="product.description"
                        :price="product.price" :id="product.id" />
                </routerLink>

                 
            </li>
          
        </ul>
    </div>
</template>
<style scoped>
.promotions {
    overflow-x: scroll;
    padding: 1em;
}

.promo_title {
    font-weight: 700;
    font-size: 2em;
    margin-bottom: 0.5em;
}

.promotion_products {
    display: grid;
    grid-template-columns: repeat(6, 250px);
    gap: 1em;
}

.card {
    width: 100%;
    height: max-content;
    background-color: hsl(155, 26%, 91%);
    border-radius: 8px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
}
@media (min-width:60rem) {
    .promotions{
        padding: 0em 1em;
        overflow-x: hidden;
    }
    .promotion_products{
    grid-template-columns: repeat(4,1fr);
}
}


</style>