<script  lang="ts" setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import FooterBar from '@/components/FooterBar.vue';
import Navbar from '@/components/NavBar.vue';
import FetchProducts from '@/composables/FetchProducts';
import ProductCard from '@/components/ProductCard.vue';
import LoadingImg from '@/components/LoadingImg.vue';
import PreviousArr from '@/components/PreviousArr.vue';

const route = useRoute()
const { category } = route.params

const { loading, error, fetchData, products } = FetchProducts(`/products/category/${category}`);
onMounted(() => {
    fetchData();
});
</script>

<template>
    <Navbar />

    <div>
        <div class="flex">
                <PreviousArr/>
            <h1 class="cat">{{ category }}</h1>
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
    <FooterBar />
</template>
<style scoped>
.cat {
    text-transform: capitalize;
    padding: 1em;
}
.flex{
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 0 2em;
}
.products {
    padding: 1em;
    margin: 1em auto;                         
}

.categorycard {
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
        grid-template-columns: repeat(4, 1fr);
        gap: 1em;
    }

    .category_wrapper {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 1em;
    }
}</style>