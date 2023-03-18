<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import PreviousArr from '@/components/PreviousArr.vue';
import FooterBar from '@/components/FooterBar.vue';
</script>
<template>
    <NavBar/>
    <PreviousArr/>
    <h1>Checkout</h1>
    <p>Add new Address</p>
    <form>
        <label>
            <span>Full Name</span>
            <input type="text" >
        </label>
        <label for="">
            <span>Mobile Number</span>
            <input type="tel">
        </label>
        <label>
            <span>Street Address</span>
            <input type="text">
        </label>
        <label>
            <span>State</span>
            <input type="text">
        </label>
        <label>
            <span>City</span>
        </label>
        <label >
            <span>Postal code</span>
            <input type="number">
        </label>

        <input type="radio" name="payment" id="">
        <input type="radio" name="payment" id="">
        <input type="radio" name="payment" id="">
    </form>
    <FooterBar/>
</template>