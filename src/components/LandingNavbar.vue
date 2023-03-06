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
                <li class="signup">
                    <RouterLink to="/signup">Sign up</RouterLink>
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

header a {
    color: #000;
}

nav {
    position: absolute;
    max-width: 400px;
    top: 6em;
    left: 3em;
    right: 3em;
    padding: 1em;
    text-align: center;
    border-radius: 8px;
    background-color: #fff;
    transform: translateX(-1000%);
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

.routes {
    border-bottom: 1px solid grey;
}

.routes li,
.sigin_wrapper li {
    margin-bottom: 0.5em;
}

.signup {
    background-color: hsl(180, 55%, 17%);
    border-radius: 12px;
    cursor: pointer;
    width: 30%;
    margin: auto;
    padding: 0.5em;
}

.signup a {
    color: #fff;
}

@media (min-width:60rem) {
    nav {
        position: relative;
        top: auto;
        left: auto;
        transform: translateX(0);
        height: auto;
        max-width: none;
        width: 70%;
        justify-content: space-between;
        padding: 0;
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
        border-bottom: none;
    }

    .sigin_wrapper {
        width: 30%;
        justify-content: flex-end;
    }

    .mobile_nav {
        display: none;
    }
}</style>