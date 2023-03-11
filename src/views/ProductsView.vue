<script setup lang="ts">
import Navbar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter()
const store = useStore()
const logOut = async (e: Event) => {
    e.preventDefault();
    await store.dispatch("logOut")
    router.push('/')
}


</script>
<template>
    <Navbar />

    <section class="wrapper">  
        <SideBar />
        <div>
         <h1>Products {{ store?.state?.user?.displayName }}</h1>
            <button @click="logOut">log out</button>
        </div>   
    </section>
</template>

<style scoped>

@media (min-width:60rem) { 
    .wrapper{
        display: flex;
    }
}
</style>