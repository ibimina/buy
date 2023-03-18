<script setup lang="ts">
import getCart from '@/composables/Collections';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
const {cartLength}=getCart(store.state.user.uid)
const search = ref('')
const router = useRouter()
const getSeach = (e:Event) => {
    e.preventDefault()
    if(search.value.trim()){  
        return router.push(`/search?search=${search.value.trim()}`)
    }
}
</script>

<template>
    <header>
        <routerLink to="/products">
            <h1 class="buy">Buy</h1>
        </routerLink>
        <form @submit="getSeach" class="search_wrapper">
     <input type="search" name="search" v-model="search" placeholder="I'm shopping for" class="bg search">
      
        </form>
         <nav class="nav">
            <ul class="links">
                <li>
                    <routerLink to="/user">
                        <img src="/images/icons8-user.png" alt="user" class="link">
                    </routerLink>
                </li>
                <li>
                     <span class="length">{{ cartLength }}</span>
                    <routerLink to="/cart">               
                        <img src="/images/icons8-cart.png" alt="cart" class="link">
                    </routerLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
}
.buy{
    font-weight: 700;
color: #000;
}
.length{
    position: absolute;
    top: -1em;
    right: 0;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 0.8em;
    text-align: center;
}
.nav {
    grid-column: 5;
}

.links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1em;
}

.bg {
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.search_wrapper{
 grid-column: 1/6;
     grid-row: 2;
     display: block;
     width: 100%;
}
.search {
    width: 100%;
    height: 100%;
    display: block;
    padding: 1em 1em 1em 3em;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-position: 1em;
    background-size: 18px;
    background-image: url('../assets/categories/search.svg');
    margin-top: 1em;
}

.link {
    width: 25px;
    height: 25px;
}

@media (min-width:60rem) {
    header {
        grid-template-columns: repeat(12, 1fr);
        gap: 2em;
    }

    .search_wrapper {
        grid-column: 8/13;
        grid-row: 1;
    }
.search{
    margin-top: 0;
}
    .nav {
        grid-column: 13;
    }
}
</style>