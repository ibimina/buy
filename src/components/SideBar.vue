<script lang="ts" setup>
import modalControl from '@/composables/modalControl';
import links from '@/constants/links';
import categories from '@/constants/categories';
const { visible, handleModal } = modalControl();
</script>
<template>
    <section class="categories_container">
        <ul class="categories">
            <li class="img_con" @click="handleModal">
                <img src="/images/categories.png" alt="category" class="category">
                <span class="center">All Categories</span>
            </li>
            <li v-for="category in categories" :key="category.category">
                <routerLink :to="category.link" class="img_con">
                    <img :src="category.img" :alt="category.alt" class="category">
                    <span class="center">{{ category.category }}</span>
                </routerLink>
            </li>
        </ul>
    </section>
    <section class="links" :data-visible="visible">
        <button @click="handleModal" class="close">close</button>
        <ul>
            <li v-for="link in links" :key="link.category" class="link_wrap">
                <routerLink :to="link.link"> {{ link.category }}</routerLink>
            </li>
        </ul>
    </section>
</template>
<style scoped>
.categories_container {
    margin-top: 1em;
}
.link_wrap a{
    color: #9fa2a3;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 500;
}
.link_wrap a:hover{
    color: #fff;
}
.categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.img_con {
    display: flex;
    flex-direction: column;
    align-items: center;
}

li {
    margin-bottom: 1em;
}

.category {
    width: 60px;
    background-color: #eaf4f5;
    border-radius: 4px;
    padding: 0.5em;
}

.center {
    text-align: center;
    font-size: 12px;
    color: #000;
}

.links {
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    background-color: #354343;
    z-index: 100;
    padding: 1em;
    border-radius: 8px;
    height: min-content;
}

.links[data-visible="true"] {
    transform: translateX(0);
}

@media (min-width:60rem) {
    .close {
        display: none;
    }
    .categories_container {
        display: none;
    }

    .links {
        position: relative;
        transform: translateX(0);
        width: max-content;
        left: auto;
        height: max-content;

    }
}</style>