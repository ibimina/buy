<script  lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import FooterBar from '@/components/FooterBar.vue';
import Navbar from '@/components/NavBar.vue';
import FetchProducts from '@/composables/FetchProducts';
import ProductCard from '@/components/ProductCard.vue';

const route=useRoute()
const router = useRouter();
const {category}=route.params

const { loading, error, fetchData,products } = FetchProducts(`/products/category/${category}`);
onMounted(() => {
    fetchData();
});
const handleback=()=>{
    router.go(-1)
}
</script>

<template>
    <Navbar/>
<button @click="handleback">go back</button>
        <div>
           <h1 class="cat">{{ category }}</h1>
            <p v-if="loading">loading</p>
            <p v-if="error">error</p>
            <ul class="products">
                <li v-for="product in products" :key="product.id" class="categorycard">
                    <routerLink :to="`/product/${product.id}`">
                        <ProductCard :thumbnail="product.thumbnail" :title="product.title" :rating="product.rating" :description="product.description" :price="product.price" :percent="product.discountPercentage"/>
                    </routerLink>
                </li>
            </ul>
        </div>
    <FooterBar/>
</template>
<style scoped>
.cat{
    text-transform: capitalize;
    padding: 1em;
}
.products{
    padding: 1em;
}
.categorycard{
    max-width: 300px;
    margin:0  auto 2em;
    border-radius: 8px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.2);
}
@media (min-width: 40rem) {
    .products{
   display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;     
}
}
@media (min-width: 60rem) {
    .products{
   display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;  
} 
.category_wrapper{
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1em;
}
}
</style>