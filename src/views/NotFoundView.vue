<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore()
</script>
<template>
    <div class="not_found">
        <div class="not_foundwrap">
          <h1>404</h1>
            <p>Page not found</p>
            <router-link to="/products" v-if="store.state.user" class="back">Go back</router-link>
            <router-link to="/" v-else class="back">Go back home</router-link>
   
        </div>
         </div>
</template>
<style>
.not_found {
    display: grid;
    place-items: center;
    height: 100vh;
    text-align: center;
    color: #fff;
}
.not_foundwrap{
      background-color: #93abb9;
      max-width: 400px;
      width: 95%;
        padding: 1em;
        border-radius: 8px;
}
.back{
    text-decoration: none;
    color: #000;
    font-size: 1em;
    font-weight: 600;
    margin-top:0.2em 0.5em;
    background-color: #fff;
    padding: 1em;
    border-radius: 8px;
    margin-top: 1em;
    display: inline-block;
    }
</style>