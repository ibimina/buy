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
                    <RouterLink to="/products">Product</RouterLink>
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
    position: relative;
}

nav {
    position: fixed;
    max-width: 400px;
    margin: auto;
    top: 6em;
    left: 0;
    right: 0;
    padding: 1em;
    text-align: center;
    border-radius: 8px;
    background-color: #e6e2e2;
    transform: translateX(-1000%);
    width: 90%;
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
    background-position: center;
    background-size: cover;
    cursor: pointer;
}

.mobile_nav[aria-expanded="true"] {
    background-image: url(../assets/icon-close.svg);
    z-index: 100000;
}

.routes {
    border-bottom: 1px solid grey;
    padding-bottom: 1em;
}
.sigin_wrapper{
    margin-top: 1em;
}
.routes li,
.sigin_wrapper li {
    margin-bottom: 0.5em;
}

.routes a,
.sigin_wrapper a {
    color: #000;
    font-weight: 500;
}

.routes a:hover,
.sigin_wrapper a:hover {
    color: #639599;
    border-bottom: 2px solid #639599;
}

.signup {
    background-color: #1B4B66;
    border-radius: 12px;
    cursor: pointer;
    width: 30%;
    margin: auto;
    padding: 0.5em;
    transition: all 0.2s ease-in-out;
    width: max-content;
}

.signup a {
    color: #fff;
    border-bottom: none;
}

.signup:hover {
    background-color: #000;
}

.signup a:hover {
    border-bottom: none;
    color: #fff;
}


@media (min-width:40rem) {
    nav {
        position: relative;
        top: auto;
        left: auto;
        transform: translateX(0);
        height: auto;
        margin: 0;
        max-width: none;
        width: 80%;
        justify-content: space-between;
        padding: 0;
        background-color: transparent;
    }

    nav,
    .routes,
    .sigin_wrapper {
        display: flex;
        align-items: center;
        gap: 1em;
    }
    .signup:hover {
        background-color: #000;
    }

    .routes {
        width: 70%;
        gap: 3em;
        border-bottom: none;
        margin: 0;
        padding: 0;
        justify-content: center;
    }
    .routes li{
        margin-bottom: 0;
    }

    .sigin_wrapper {
        width: 30%;
        justify-content: flex-end;
        gap: 2em;
        margin: 0;
    }

    .mobile_nav {
        display: none;
    }
    .signup,.sigin_wrapper li{
        margin: 0;
    }
}</style>