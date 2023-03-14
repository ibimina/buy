<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import getCart from '@/composables/Collections';
import { useStore } from 'vuex';
const store = useStore()
const {cartLength,cartProducts,subTotal}=getCart(store.state.user.uid)

</script>
<template>
    <NavBar />
    <h1 class="my_cart">My Cart</h1>
    <div v-if="cartLength === 0">
        empty cart
    </div>
    <div class="cart_wrapper">
    <div v-for="product in cartProducts" :key="product.id" class="padd product">
            <div class="mar order_details">
                <img :src="product.thumbnail" :alt="product.brand" class="cart_img">
                <div>
                    <p>{{ product.brand }}</p>
                    <p>{{ product.title }}</p>
                    <p>Qty {{ product.quantity }}</p>
                </div>
            </div>

            <div>
                <div class="price_wrapper">
                    <div></div>
                    <p class="mar">Price: ${{ product.price }}</p>
                    <p class="mar">Qty: {{ product.quantity }}</p>
                    <p>Subtotal: ${{ product.price * product.quantity }}</p>

                </div>
                <div class="wishlist_rem">
                    <button>wishlist</button>
                    <button>remove</button>
                </div>
            </div>
        </div>
        <div class="order_summary">
           <h2>Order Summary</h2>
            <p>Subtotal: ${{ subTotal }}</p>
            <p>Delivery Fee: $0</p>
            <p>Grand total: ${{ subTotal }}</p>
            <div class="order_btnwrap">
                <button>place order</button>
                <button>continue shopping</button>
            </div>
        </div>
    </div>
    <FooterBar />
</template>
<style scoped>
.my_cart{
    padding: 0.5em;
}
.cart_wrapper{
    padding: 1em;
}
.mar{
    margin-bottom: 0.2em;
}
.order_summary{
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
.price_wrapper{
    margin-bottom: 1em;
}
.order_btnwrap{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    margin: 1em 0;

}
.order_btnwrap button{
    padding:1em;
    border-radius: 10px;
    border: none;
}
 .wishlist_rem{
        display: flex;
       gap: 1em;
    }
.wishlist_rem button{
    padding:0.5em 1em;
    border-radius: 10px;
    border: none;
}
@media (min-width:40rem) {
    .order_btnwrap{
        width: 50%;
    }
    .cart_wrapper{
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
    .mar{
        margin-bottom: 0;
    }
    .product{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .price_wrapper{
        display: flex;
    }
    .order_btnwrap{
        width: 100%;
    }
   
}
</style>