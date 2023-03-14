<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import FooterBar from '@/components/FooterBar.vue';
import { ref } from 'vue';

const router = useRouter()
const store = useStore()
const form = ref({ username: store.state.user.name, firstname: '', lastname: '', email: store.state.user.email, phone: '', password: '', confirmPassword: '' })
const logOut = async (e: Event) => {
    e.preventDefault();
    await store.dispatch("logOut")
    router.push('/')
}
const goToProducts = () => {
    router.push('/products')
}
</script>
<template>
    <button @click="goToProducts">home</button>
    <div class="flex">
        <h1>Profile
        </h1>
        <button @click="logOut">log out</button>
    </div>
    <p> Username: @{{ store.state.user.displayName }}</p>
    <p>Email: {{ store.state.user.email }}</p>
    <FooterBar />
</template>
<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
}

label,
input,
span {
    width: 100%;
    display: block;
}

@media (min-width:60rem) {}</style>