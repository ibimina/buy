<script lang="ts" setup>
import OriginalPrice from '@/composables/OriginalPrice';
import { db } from '@/firebase/config';
import type Product from '@/types/Product';
import { addDoc, collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const index = ref(0)
const quantity = ref(0)
const store = useStore()
const props = defineProps<{ product: Product }>();

onMounted(() => {
    window.screenTop > 0 && window.scrollTo(0, 0);
})
const originPrice = computed(() => {
    return OriginalPrice(props.product.price, props.product.discountPercentage)
});

const showImg = (e: MouseEvent) => {
    let btn = e.target as HTMLButtonElement;
    const images = document.querySelectorAll('.img_view');
    images.forEach((image) => {
        let img = image as HTMLImageElement;
        img.style.display = 'none';
    });
    let img = images[index.value] as HTMLImageElement;
    img.style.display = 'block';
    if (btn.classList.contains('left')) {
        index.value--;
        if (index.value < 0) {
            index.value = images.length - 1;
        }
    } else {
        index.value++;
        if (index.value >= images.length) {
            index.value = 0;
        }
    }
}
const showSelectedImg = (e: MouseEvent, src: string, desc: string) => {
    const ImgBox = document.querySelector('.imgbox') as HTMLImageElement;
    ImgBox.setAttribute('src', src);
    ImgBox.setAttribute('alt', desc);

}
const handleQuantity = (e: MouseEvent) => {
    let btn = e.target as HTMLButtonElement;
    if (btn.classList.contains('plus')) {
        quantity.value++;
    } else if (quantity.value > 0) {
        quantity.value--;
    }
}
const dis = ref(false)
const addToCart = async () => {  
    const product = {
        id: props.product.id,
        title: props.product.title,
        price: props.product.price,
        discountPercentage: props.product.discountPercentage,
        thumbnail: props.product.thumbnail,
        quantity: quantity.value,
        uid: store.state.user.uid,
        brand: props.product.brand
    }
    if (quantity.value > 0) {
       dis.value = true  
        const carts = await getDocs(query(collection(db, 'carts'), where('uid', '==', store.state.user.uid)));
        if (carts.empty) {
            addDoc(collection(db, 'carts'), product);
            dis.value = false
            return
        }
        else {
            const existingCart = carts.docs.find((docs) => docs.data().id === product.id)
            if (existingCart) {
                await setDoc(doc(db, 'carts', existingCart.id), { ...existingCart.data(), quantity: existingCart.data().quantity + quantity.value });
                dis.value = false
                return
            } else {
                addDoc(collection(db, 'carts'), product);
                dis.value = false
                return
            }
        }

    }
   
}
</script>
<template>
    <div class="product">
        <div>
            <img :src="props.product.thumbnail" :alt="props.product.description" class="imgbox">
            <div class="images">
                <img v-for="image in props.product.images" :key="image" :src="image" :alt="props.product.description"
                    class="img_view" @click="showSelectedImg($event, image, props.product.description)" />
                <button class="bg left coral" @click="showImg" aria-label="arrow left"></button> <button
                    class="bg right coral" @click="showImg" aria-label="arrow right"></button>
            </div>
        </div>
        <div>
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
            <div class=" w_ccontainer">
                <div class="add">
                    <button class="bg minus" aria-label="minus" @click="handleQuantity"></button>
                    <span>{{ quantity }}</span>
                    <button class="bg plus" aria-label="plus" @click="handleQuantity"></button>
                </div>
                <div class="add_to_cart"  @click="addToCart()" :disabled="dis" :class="{ 'greyy': dis}">
                <button class="bg cart"></button>
                <span>add to cart</span>
                <span class="added">added</span>
                </div>
            </div>      
        </div>
    </div>
</template>

<style scoped>
.added{
    display: none;
}

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
.bg:hover{
    fill: #000;
    filter: brightness(1000);
}
.rating {
    width: 15px;
}

.flex {
    display: flex;
    align-items: center;
    gap: 0.5em;
    background-color: rgb(242, 239, 239);
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
    flex-wrap: wrap;
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
    cursor: pointer;
}

.cart {
    background-image: url('../assets/icon-cart.svg');
    filter: brightness(1000%);
}

.imgbox {
    display: none;
}

.price_wrapper {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin: 1em 0;
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
    background-color: hsl(200, 10%, 69%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0.8em 0.5em;
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
.greyy {
    background-color: #9aa0a3;
    color: #000;
}
.greyy .added{
    display: block;
    position: absolute;
    top: -2em;
    background-color: #000;
    color: #fff;
    padding: 0.5em;
    right: 3em;
}
.add_to_cart:hover{
    background-color: #000;
}
@media (min-width:40rem) {
    .imgbox {
        display: block;
        height: 350px;
        border-radius: 8px;
        box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.5);
    }

    .add {
        width: 45%;
        margin: 0;
    }

    .coral {
        display: none;
    }

    .img_view {
        display: block;
        max-width: 100px;
        height: 100px;
        cursor: pointer;
        border-radius: 8px;
        box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.5);
    }

    .product {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2em;
        padding: 1em;
    }

    .images {
        margin: 2em 0;
    }
    .w_ccontainer {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin: 1em 0;
}

}</style>