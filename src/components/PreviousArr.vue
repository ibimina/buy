<script setup lang="ts">
import { useRouter } from "vue-router"
const router = useRouter()
const handleBack = () => {
    router.go(-1)
}
</script>
<template>
    <button @click="handleBack" aria-label="go back" class="back"></button>
</template>

<style scoped>
.back {
    background: url(../assets/icon-previous.svg);
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
    width: 2em;
    height: 2em;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    filter: brightness(510%);
    margin-top: 1em;
}

.back:hover {
    filter: brightness(0%);
}
</style>