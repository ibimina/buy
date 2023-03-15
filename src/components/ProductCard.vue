<script setup lang="ts">
import OriginalPrice from '@/composables/OriginalPrice';
import { computed } from 'vue';

const props = defineProps<{
    title: string
    thumbnail: string
    price: number
    description: string
    rating: number
    percent: number
}>()

const originPrice = computed(() => {
    return OriginalPrice(props.price, props.percent)
})
const stars = computed(() => {
    let num = Math.floor(props.rating)
    return Array(num).fill("/images/rating.png")
})
</script>
<template>
    <img :src="props.thumbnail" :alt="props.description" class="product_img">
    <div class="padd">
        <h3 class="name">{{ props.title }}</h3>
        <div class="ratings">
            <img v-for="star in stars" :key="star" :src="star" alt="golden star" class="star">
        </div>
        <div class="price_wrapper">
            <p class="price">${{ props.price }}</p> <span class="underline">${{ originPrice }}</span> <span
                class="percent">{{ props.percent }}% OFF </span>
        </div>
    </div>
</template>
<style scoped>
.price_wrapper {
    display: flex;
    align-items: center;
    gap: 1em;
}

.name {
    font-weight: 600;
    color: #474646;
}

.price {
    font-weight: 500;
    color: #000;
}

.product_img {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    height: 200px;
    width: 100%;
}

.ratings {
    display: flex;
    gap: 0.2em;
}

.star {
    width: 20px;
    height: 20px;
}

.padd {
    padding: 1em;
}

.underline {
    text-decoration: line-through;
    color: #b3b3b3;
}

.percent {
    color: #ff0000;
}</style>