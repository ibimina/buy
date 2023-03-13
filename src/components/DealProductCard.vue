<script setup lang="ts">

const props = defineProps<{
    id: number
    title: string
    thumbnail: string
    price: number
    description: string
}>()


</script>
<template>
  
     <img :src="props.thumbnail" :alt="props.description" class="img">   
        <div class="col_two">
        <div class="flex">
                <h3 class="title">{{ props.title }}</h3>
                <button class="bg like"></button>
            </div>
            <div class="price_wrapper">
                <p class="price">${{ props.price }}</p>
            </div>
        </div>
   
</template>
<style scoped>
.bg {
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: none;
    background-color: transparent;
}
.price{
    font-size: 14px;
    font-weight: 700;
    color: #000;
}
.like {
    background-image: url('../assets/categories/icons8-wishlist.png');
}
.img{
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    height: 200px;
}
.title{
 
    font-size: 12px;
}
.flex{
    display: grid;
    grid-template-columns: 90% 10%;
}
.col_two{
    padding: 1em;
}
</style>