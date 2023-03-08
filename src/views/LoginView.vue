<script setup lang="ts">

</script>
<template>
    <main>
        <p>Log in to your Account</p>
        <p>Welcome back, please enter your details.</p>
        <form>
            <label>
                <span>Email Address</span>
                <input type="email" required>
            </label>
            <label>
                <span>Password</span>
                <div class="password_wrapper">
                    <input type="password" required>
                    <img src="" alt="open eye" class="eye">
                </div>
            </label>
            <input type="submit" value="Log in">
        </form>
        <p>Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink></p>

    </main>
</template>