<script setup lang="ts">
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import FooterBar from '@/components/FooterBar.vue';
import LandingNavbar from '@/components/LandingNavbar.vue';

const store = useStore()
const form = ref({ password: "", email: "", username: "" })
const router = useRouter()
const errorMsg = ref('')
const disable = ref(false)

const signUpUser = async (e: Event) => {
    e.preventDefault()
    try { 
           disable.value = true
        await store.dispatch('signUp', form.value)
        if(store.state.user) {
          return  router.push('/products')
        }else if(store.state.authError =="Firebase: Error (auth/email-already-in-use).") {
            errorMsg.value = "Email already in use"
        }else if(store.state.authError == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
             errorMsg.value = "Password should be at least 6 characters"
        }
           disable.value = false
    } catch (error) {
        console.log(error)
    }
} 
</script>


<template>
    <main class="signup_container">
        <LandingNavbar />
        <div class="form_con">
            <section class="form_wrapper">
                <div class="text_wrap">
                    <h3 class="center bold">Create an account</h3>
                    <p class="center light">Sign up now to get started with an account</p>
                </div>

                <form @submit="signUpUser">
                    <label class="label_wrap">
                        <span class="label">Username</span>
                        <input type="text" name="username" class="input" v-model="form.username" required
                            autocomplete="nickname">
                    </label>
                    <label class="label_wrap">
                        <div class="flex"><span class="label">Email</span>
                            <span v-if="errorMsg.includes('Email')" class="red">{{ errorMsg }}</span>
                           </div>
                         <input type="email" name="email" class="input" v-model="form.email" required autocomplete="email">
                    </label>
                    <label class="label_wrap">
                        <div class="flex"><span class="label">Password</span>
                            <span v-if="errorMsg.includes('Password')" class="red">{{ errorMsg }}</span>
                           </div>
                        
                        <div class="password_wrapper">
                             <input type="password" name="password" v-model="form.password" class="input" required>
                            <img src="/images/eye.svg" alt="open eye" class="eye">
                        </div>
                    </label>
                    <input type="submit" :disabled="disable" value="Get started" :class="{'dis':disable,'submit':!disable}">
                <p class="signup">Already have an account? <routerLink to="/login">Login</routerLink></p>
                </form>
            </section>
        </div>

    </main>
    <FooterBar />
</template>
<style scoped>
.signup_container {
    padding: 1em 2em;
} 
.red{
    color:red;
    display: block;
    width: 100%;
    text-align: end;
}
.flex{
    display:grid;
    grid-template-columns:1fr 2fr;
    justify-content:space-between;
}
.text_wrap {
    margin-bottom: 1em;
}

.form_con {
    margin: 3em 0;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form_wrapper {
    background-color: #639599;
    max-width: 450px;
    width: 100%;
    padding: 1em;
    border-radius: 8px;
    color: #fff;
}

.center {
    text-align: center;
}

.label_wrap {
    display: block;
    margin-bottom: 1em;
}

.input,
.submit,.dis {
    padding: 1em;
    border: none;
    border-radius: 8px;
}

.label,
.submit,
.input,.dis {
    display: block;
    width: 100%;
    margin: auto;
}

.label {
    margin-bottom: 0.2em;
    color: #fff;
}

.password_wrapper {
    position: relative;
}
.signup {
    text-align: center;
}

.signup a {
    color: #1B4B66;
    font-weight: 700;
}
.eye {
    position: absolute;
    top: 0.7em;
    right: 1em;
    width: 20px;
    cursor: pointer;
}

.submit,.dis {
    background-color: #1B4B66;
    color: #fff;
    margin: 2em auto;
    cursor: pointer;
}
.dis{
    background-color:#afbec7;;
}
.bold {
    font-weight: 600;
}

.light {
    font-weight: 400;
    line-height: 15px;
}

@media (min-width:60rem) {
    .signup_container {
        padding-inline: 3em;
    }
}</style>