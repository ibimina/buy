<script setup lang="ts">
import FooterBar from '@/components/FooterBar.vue';
import LandingNavbar from '@/components/LandingNavbar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter()
const store = useStore()
const form = ref({ email: "", password: "" })

const login = async (e: Event) => {
    e.preventDefault()
    try {
        await store.dispatch("signIn", form.value)
        router.push('/products')
    } catch (error) {
        console.log(error)
    }
}
</script>
<template>
    <main class="login_container">
        <LandingNavbar />
        <section class="login_wrapper">
            <div class="login_con">
                <div class="login_title">
                    <p class="bold">Log in to your Account</p>
                    <p class="light">Welcome back, please enter your details.</p>
                </div>

                <form @submit="login">
                    <label class="label">
                        <span class="label_text">Email Address</span>
                        <input type="email" required class="input" v-model="form.email" autocomplete="email">
                    </label>
                    <label class="label">
                        <span class="label_text">Password</span>
                        <div class="password_wrapper">
                            <input type="password" required class="input" v-model="form.password">
                            <img src="/images/eye.svg" alt="open eye" class="eye">
                        </div>
                    </label>
                    <input type="submit" value="Log in" class="submit">
                </form>
                <p class="signup">Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink>
                </p>

            </div>

        </section>
    </main>

    <FooterBar />
</template>
<style scoped>
.login_container {
    padding: 1em 2em;
}

.login_wrapper {
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login_con {
    background-color: #639599;
    max-width: 450px;
    width: 100%;
    padding: 1em;
    border-radius: 8px;
    color: #e7e7e7;
}

.login_title {
    text-align: center;
    margin-bottom: 1em;
}

.bold {
    font-weight: 600;
}

.light {
    font-weight: 400;
    line-height: 15px;
}

.label {
    margin-bottom: 1em;
}

.label_text,
.input,
.submit,
.label {
    display: block;
    width: 100%;
    border: none;
}

.input,
.submit {
    padding: 1em 0.5em;
    border-radius: 8px;
}

.password_wrapper {
    position: relative;
}

.eye {
    position: absolute;
    top: 0.7em;
    right: 1em;
    width: 20px;
    cursor: pointer;
}

.submit {
    background-color: #1B4B66;
    color: #fff;
    margin: 2em auto;
    cursor: pointer;
}

.signup {
    text-align: center;
}

.signup a {
    color: #1B4B66;
    font-weight: 700;
}

@media (min-width:60rem) {
    .login_container {
        padding-inline: 3em;
    }
}</style>