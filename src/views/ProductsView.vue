<script setup lang="ts">
import Navbar from '@/components/NavBar.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter()
const store = useStore()

const logOut = async(e: Event) => {
    e.preventDefault()
   await store.dispatch("logOut")
    router.push('/')
}
</script>
<template>
    <Navbar/>
    <h1>Products {{ store?.state?.user?.displayName }}</h1>
    <button @click="logOut">log out</button>
</template>