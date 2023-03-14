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
                <h3 class="title">{{ props.title }}</h3>
            <div class="price_wrapper">
                <p class="price">${{ props.price }}</p>
            </div>
        </div>
   
</template>
<style scoped>
.price{
    font-size: 14px;
    font-weight: 700;
    color: #000;
}
.img{
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    height: 200px;
}
.title{
    font-size: 12px;
}
.col_two{
    padding: 1em;
}
</style>