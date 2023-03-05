<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <h1>Buy</h1>
        <nav>
            <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/product">Product</RouterLink></li>
                <li><RouterLink to="/about">About</RouterLink></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
            </ul>
           <ul>
                <li><RouterLink to="/login">Login</RouterLink></li>
                <li><RouterLink to="/register">Register</RouterLink></li>
           </ul>
        </nav>
      <div>
        <button class="mobile_nav"></button>
      </div>
    </header>
</template>

<style>

</style>