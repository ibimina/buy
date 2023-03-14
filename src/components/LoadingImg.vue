<template>
    <div class="loading_img">
        <img src="/images/loading.png" alt="loading" class="rotate"/>
    </div>
</template>
<style scoped>
.loading_img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

}
.rotate {
   animation: rotate 1s linear infinite;
    width: 60px;
}
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>