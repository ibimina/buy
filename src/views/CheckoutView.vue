<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import PreviousArr from '@/components/PreviousArr.vue';
import FooterBar from '@/components/FooterBar.vue';
import getCart from '@/composables/Collections';
import { useStore } from 'vuex';

const store = useStore()
const {  cartProducts, subTotal } = getCart(store.state.user.uid)
</script>
<template>
    <div class="checkout_wrapper">
        <NavBar />
        <PreviousArr />
        <h1 class="title">Checkout</h1>
        <p class="subtitle">Add new Address</p>
        <div class="checkout_container">
            <form class="form">
                <div>
                    <label class="block label">
                        <span class="block">Full Name</span>
                        <input type="text" class="input block">
                    </label>
                    <label class="block label">
                        <span>Mobile Number</span>
                        <input type="tel" class="input block">
                    </label>
                    <label class="block label">
                        <span class="block">Street Address</span>
                        <input type="text" class="input block">
                    </label>
                </div>
                <div>
                    <label class="block label">
                        <span class="block">State</span>
                        <input type="text" class="input block">
                    </label>
                    <label class="block label">
                        <span class="block">City</span>
                        <input type="text" class="input block">
                    </label>
                    <label class="block label">
                        <span class="block">Postal code</span>
                        <input type="number" class="input block">
                    </label>
                </div>

                <div class="payment">
                    <label>

                        <span class="card">Paypal</span>
                        <input type="radio" name="payment" value="paypal">
                    </label>
                    <label>
                        <span class="card">Visa</span>
                        <input type="radio" name="payment" value="paypal">
                    </label>
                    <label>
                        <span class="card">Mastercard</span>
                        <input type="radio" name="payment" value="paypal">
                    </label>
                </div>

            </form>
            <div>
                <div v-for="product in cartProducts" :key="product.id" class="padd product">
                    <div class="mar order_details">
                        <img :src="product.thumbnail" :alt="product.brand" class="cart_img">
                        <div>
                            <p>{{ product.brand }}</p>
                            <p>{{ product.title }}</p>
                            <p>{{ product.quantity }} pcs</p>
                        </div>
                    </div>
                </div>
                <div class="order_summary">
                    <h2>Order Summary</h2>
                    <p>Subtotal: ${{ subTotal }}</p>
                    <p>Delivery Fee: $0</p>
                    <p>Grand total: ${{ subTotal }}</p>
                </div>
            </div>

        </div>

    </div>
    <FooterBar />
</template>
<style scoped>
.checkout_wrapper {
    padding: 1em;
}

.block {
    display: block;
    width: 100%;
}

.input {
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;

}
.order_details{
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: flex-start;
    gap: 1em;
    margin-bottom: 1em;
}

.cart_img{
    border-radius: 8px;
}
.label,
.subtitle {
    margin-bottom: 1em;
}

.payment {
    display: flex;
    gap: 1em;
    margin-bottom: 1em;
}

.card {
    margin-right: 0.5em;
}
.form{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
}
@media (min-width:60rem) {
    .checkout_container {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 5em;
    }
}
</style>