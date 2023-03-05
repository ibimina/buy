<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const handleMenu = () => {

    if (visible.value === false) {
        return visible.value = true;
    }
    return visible.value = false;
}
const visible = ref(false)
</script>

<template>
    <header>
        <h1>Buy</h1>
        <nav :data-visible="visible">
            <ul class="routes">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/product">Product</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact">Contact</RouterLink>
                </li>
            </ul>
            <ul class="sigin_wrapper">
                <li>
                    <RouterLink to="/login">Login</RouterLink>
                </li>
                <li>
                    <RouterLink to="/register">Register</RouterLink>
                </li>
            </ul>
        </nav>
        <button class="mobile_nav" @click="handleMenu" :aria-expanded="visible"></button>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 2em;
    background-color: #fff;
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    transform: translateX(-100%);
    transition: all 0.5s ease;
}
nav[data-visible="true"] {
    transform: translateX(0);
    z-index: 100000;
}

.mobile_nav {
    border: none;
    background-color: transparent;
    width: 16px;
    height: 16px;
    background-image: url(../assets/icon-menu.svg);
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
}
.mobile_nav[aria-expanded="true"] {
    background-image: url(../assets/icon-close.svg);
    z-index: 100000;
}
@media (min-width:60rem) {
    nav {
        position: relative;
        top: auto;
        left: auto;
        transform: translateX(0);
        height: auto;
        width: 70%;
        justify-content: space-between;
    }

    nav,
    .routes,
    .sigin_wrapper {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .routes {
        width: 70%;
        justify-content: center;
        gap: 3em;
    }

    .sigin_wrapper {
        width: 30%;
        justify-content: flex-end;
    }

    .mobile_nav {
        display: none;
    }
}</style>