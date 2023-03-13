<script lang="ts" setup>
import OriginalPrice from '@/composables/OriginalPrice';
import type Product from '@/types/Product';
import { computed, ref } from 'vue';
const index = ref(0)
const props = defineProps<{ product: Product }>();
const originPrice = computed(() => {
    return OriginalPrice(props.product.price, props.product.discountPercentage)
});

const showPrevImg = () => {
    const images = document.querySelectorAll('.img_view');
    images.forEach((image) => {
        let img = image as HTMLImageElement;
        img.style.display = 'none';
    });
    let img = images[index.value] as HTMLImageElement;
    img.style.display = 'block';
    index.value--;
    if (index.value < 0) {
        index.value = images.length - 1;
    }
}
const showNextImg = () => {
    const images = document.querySelectorAll('.img_view');
    images.forEach((image) => {
        let img = image as HTMLImageElement;
        img.style.display = 'none';
    });
    let img = images[index.value] as HTMLImageElement;
    img.style.display = 'block';
    index.value++;
    if (index.value >= images.length) {
        index.value = 0;
    }
}
const showSelectedImg = (e: MouseEvent, src: string, desc: string) => {
    const ImgBox = document.querySelector('.imgbox') as HTMLImageElement;
    ImgBox.setAttribute('src', src);
    ImgBox.setAttribute('alt', desc);

}
</script>
<template>
    <div class="product">
        <img :src="props.product.thumbnail" :alt="props.product.description" class="imgbox">
        <div class="images">
            <img v-for="image in props.product.images" :key="image" :src="image" :alt="props.product.description"
                class="img_view" @click="showSelectedImg($event, image, props.product.description)" />
            <button class="bg left coral" @click="showPrevImg" aria-label="arrow left"></button> <button
                class="bg right coral" @click="showNextImg" aria-label="arrow right"></button>
        </div>
        <p>{{ props.product.brand }}</p>
        <p class="name">{{ props.product.title }}</p>
        <div class="price_wrapper">
            <p class="price">${{ props.product.price }}</p> <span class="underline">${{ originPrice }}</span> <span
                class="percent">{{ props.product.discountPercentage }}% OFF </span>

        </div>
        <div class="flex">
            <span class="rate">{{ props.product.rating }}</span> <img src="/images/rating.png" alt="golden star"
                class="rating">
        </div>
        <div>
            <h3>Product Description</h3>
            <p class="desc">{{ props.product.description }}</p>
        </div>
        <div class="add">
            <button class="bg minus" aria-label="minus"></button>
            <span>0</span>
            <button class="bg plus" aria-label="plus"></button>
        </div>
        <div class="w_ccontainer">
            <div class="wishlist_wrap">
                <span class="wishlist">wishlist</span>
                <button class="bg like"></button>
            </div>
            <div class="add_to_cart">
                <button class="bg cart"></button>
                <span>add to cart</span>
            </div>

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
    cursor: pointer;
}

.product {
    max-width: 350px;
    margin: auto;
}

.rating {
    width: 15px;
}

.flex {
    display: flex;
    align-items: center;
    gap: 0.5em;
    background-color: rgb(228, 227, 227);
    border-radius: 5px;
    width: max-content;
    padding: 0.2em 0.5em;
}

.rate {
    font-weight: 600;
}

.images {
    display: flex;
    justify-content: center;
    gap: 1em;
    position: relative;
}

.img_view {
    display: none;
    height: 300px;
}

.img_view:first-of-type {
    display: block;
}

.coral {
    position: absolute;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    background-color: #b3b3b3;
    background-size: 12px;
    width: 40px;
    height: 40px;
}

.like {
    background-image: url('../assets/categories/icons8-wishlist.png');

}

.left {
    left: 1em;
    background-image: url('../assets/icon-previous.svg');
}

.right {
    right: 1em;
    background-image: url('../assets/icon-next.svg');

}

.add_to_cart {
    display: flex;
    justify-content: center;
    gap: 1em;
    align-items: center;
    gap: 0.5em;
    background-color: #1B4B66;
    border-radius: 5px;
    width: 100%;
    padding: 0.8em 0.5em;
    color: #fff;
}

.cart {
    background-image: url('../assets/icon-cart.svg');
    filter: brightness(1000%);
}

.imgbox,
.wishlist {
    display: none;
}

.price_wrapper,
.w_ccontainer {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin: 1em 0;
}

.wishlist_wrap {
    display: flex;
    padding: 0.8em 0.5em;
    background-color: #b3b3b3;
    border-radius: 8px;
}

.name {
    font-weight: 600;
    color: #474646;
}

.price {
    font-weight: 500;
    color: #000;
}

.underline {
    text-decoration: line-through;
    color: #b3b3b3;
}

.percent {
    color: #ff0000;
}

.add {
    background-color: #b3b3b3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
    border-radius: 8px;
}

.plus {
    background-image: url('../assets/icon-plus.svg');
    background-size: 12px;
}

.minus {
    background-image: url('../assets/icon-minus.svg');
    background-size: 12px;
}

@media (min-width:60rem) {
    .imgbox {
        display: block;
    }

    .coral {
        display: none;
    }

    .img_view {
        display: block;
        width: 30px;
        cursor: pointer;
    }
}</style>