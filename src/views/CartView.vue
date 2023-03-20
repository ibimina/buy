<script setup lang="ts">
import FooterBar from '@/components/FooterBar.vue';
import PreviousArr from '@/components/PreviousArr.vue';
import getCart from '@/composables/Collections';
import { db } from '@/firebase/config';
import { collection, deleteDoc, doc, getDocs, query, updateDoc, where, type DocumentData } from '@firebase/firestore';
import { useStore } from 'vuex';
const store = useStore()
const { cartLength, cartProducts, subTotal } = getCart(store.state.user.uid)


const updateQuantity = async (e: Event, item:DocumentData) => {
    const q = await getDocs(query(collection(db, "carts"), where("uid", "==", store.state.user.uid)));
    e.preventDefault(); 
    let btn = e.target as HTMLButtonElement;
    if (btn.classList.contains('plus')) {
        q.forEach(async (docs) => {
            if (docs.data().id === item.id) {
                await updateDoc(doc(db, 'carts', docs.id), { ...docs.data(), quantity: docs.data().quantity + 1 });
            }
        });
    } else if (item.quantity > 1) {
        q.forEach(async (docs) => {
            if (docs.data().id === item.id) {
                await updateDoc(doc(db, 'carts', docs.id), { ...docs.data(), quantity: docs.data().quantity - 1 });
            }
        });
    } else {
        // removeItem(item)
    }

}
const removeItem = async(item: DocumentData)=>{
    const q = await getDocs(query(collection(db, "carts"), where("uid", "==", store.state.user.uid)));
     q.forEach(async (docs) => {
        if (docs.data().id === item.id) {
            await deleteDoc(doc(db, 'carts', docs.id));
        }
    });
}
</script>
<template>
    <div class="cart_container">
     <div class="flex">
            <PreviousArr />
            <h1 class="my_cart">My Bag</h1>
        </div>
        <div v-if="cartLength === 0" class="emty_wrapper">
            <div class="empty_msg">
                <img src="/images/art.png" alt="empty cart" class="empty_cart">
                <p>You haven't added any item. Start shopping to make your bag bloom
                </p>
            </div>
            <routerLink to="/products" class="shopping">Continue Shopping</routerLink>
        </div>
        <div class="cart_wrapper" v-if="cartLength > 0">
            <div>
                <div v-for="product in cartProducts" :key="product.id" class="padd product">
                    <div class="mar order_details">
                        <img :src="product.thumbnail" :alt="product.brand" class="cart_img">
                        <div>
                            <p>{{ product.brand }}</p>
                            <p>{{ product.title }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="price_wrapper">
                            <p class="mar">Price: ${{ product.price }}</p>
                            <div class="mar btn_con"> <button @click="updateQuantity($event, product)"
                                    class="sub update">-</button> {{ product.quantity }}
                                <button @click="updateQuantity($event, product)" class="plus update">+</button>
                            </div>
                            <p>Subtotal: ${{ product.price * product.quantity }}</p>
                        </div>
                        <div class="wishlist_rem">
                            <button class="remove" @click="removeItem(product)">remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order_summary">
                <h2>Order Summary</h2>
                <p>Subtotal: ${{ subTotal }}</p>
                <p>Delivery Fee: $0</p>
                <p>Grand total: ${{ subTotal }}</p>
                <div class="order_btnwrap">
                    <routerLink to="/checkout" class="cart_link checkout">Place Order</routerLink>
                </div>
            </div>
        </div>
    </div>
    <FooterBar />
</template>
<style scoped>
.cart_container{
    padding: 1em;
}
.emty_wrapper {
    display: grid;
    place-items: center;
    text-align: center;
    gap: 1em;
    padding: 1em;
}

.update {
    padding: 0.5em 1em;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}

.update:hover {
    background-color: #2f6786;
    color: white;
}

.empty_msg {
    max-width: 350px;
}

.flex {
    display: flex;
    align-items: center;
    gap: 1.5em;
    margin-bottom: 2em;
}


.shopping {
    padding: 1em;
    background-color: #2f6786;
    border-radius: 10px;
    text-align: center;
    width: 200px;
    margin: 1em auto;
    color: white;
}

.mar {
    margin-bottom: 0.2em;
}

.order_summary {
    border-radius: 10px;
}

.order_details {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1em;
}

.cart_img {
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
}

.price_wrapper {
    margin-bottom: 1em;
}

.order_btnwrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    margin: 1em 0;

}

.order_btnwrap button {
    padding: 1em;
    border-radius: 10px;
    border: none;
}

.wishlist_rem {
    display: flex;
    gap: 1em;
}

.wishlist_rem button {
    padding: 0.5em 1em;
    border-radius: 10px;
    border: none;
}

.btn_con {
    display: flex;
    gap: 1em;
    align-items: center;
}

.empty_cart {
    max-width: 250px;
    margin: 1em auto;
}

.product {
    margin-bottom: 2em;
}
.cart_link {
    padding:0.5em 1em;
    background-color: #2f6786;
    border-radius: 10px;
    text-align: center;
    color: white;
}
.checkout{
    background-color: #2f6786;
    color: #fff;
    border: 1px solid #2f6786;
}
.checkout:hover{
    background-color: #213745;
    color: #f7f7f8;
 
}
@media (min-width:40rem) {
    .order_btnwrap {
        width: 50%;
    }

    .cart_wrapper {
        display: grid;
        grid-template-columns: 60% 40%;
    }

    .mar {
        margin-bottom: 1em;
    }

    .product {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .order_btnwrap {
        width: 100%;
    }
    .cart_container{
    padding: 3em;
}
}
@media (min-width: 60rem) {
    .cart_container{
    padding: 3em;
}
}
</style>