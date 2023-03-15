<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import ProductCard from '@/components/ProductCard.vue';
import LoadingImg from '@/components/LoadingImg.vue';

import FetchProducts from '@/composables/FetchProducts';
import PreviousArr from '@/components/PreviousArr.vue';

const route = useRoute()
const search = ref(route.query.search)

const { products, loading, error, fetchData } = FetchProducts(`/products/search?q=${search.value}`)

onMounted(() => {
    fetchData()
})

</script>
<template>
    <div class="search_wrap">
        <NavBar />
        <PreviousArr/>
              <p v-if="error">error</p>
        <h1 v-if="loading" class="title">Searching for <span class="search">"{{ search }}"</span> </h1>
        <LoadingImg v-if="loading" />
        <h1 class="title" v-else>Search Results for <span class="search">"{{ search }}"</span></h1>
        <div v-if="products?.length === 0 && !loading" class="nosearch">
            <div class="search_wrapper">
                <img src="/images/art (1).png" alt="search mirror">
                <p class="whoop">Whoops!</p>
                <p class="semi">We couldn't find what you're looking for</p>
                <p class="semi">Try something else</p>
            </div>
        </div>

        <ul v-if="products.length > 0" class="products">
            <li v-for="product in products" :key="product.id" class="categorycard">
                <routerLink :to="`/product/${product.id}`" class="productlink">
                    <ProductCard :percent="product.discountPercentage" :id="product.id" :description="product.description"
                        :title="product.title" :price="product.price" :thumbnail="product.thumbnail"
                        :rating="product.rating" />
                </routerLink>
            </li>
        </ul>
    </div>
    <FooterBar />
</template>
<style scoped>
h1.title {
    padding: 1em;
    font-weight: 700;
}

.search_wrap {
    padding: 0 2em;
}

.products {
    margin-bottom: 2em;
    padding: 2em;
}

.nosearch {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    margin-bottom: 3em;
}

.search {
    color: #40a0ba;
    font-weight: 600;
}

.semi {
    font-weight: 500;
}

.search_wrapper {
    max-width: 350px;
    text-align: center;
}

.categorycard {
    margin: 0 auto 2em;
    border-radius: 8px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
}

.whoop {
    font-size: 2em;
    font-weight: 700;
    margin: 0;
}

@media (min-width: 40rem) {
    .products {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1em;
    }

    .categorycard {
        margin: 0;
    }
}

@media (min-width: 60rem) {
    .products {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
    }
}</style>