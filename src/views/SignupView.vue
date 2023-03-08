<script setup lang="ts">
import { useStore } from 'vuex';
import FooterBar from '@/components/FooterBar.vue';
import LandingNavbar from '@/components/LandingNavbar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const store = useStore()
const form = ref({password:"",email:"",username:""})
const router = useRouter()
const signUpUser= (e:Event) =>{
    e.preventDefault()
    let form = e.target as HTMLFormElement
     store.dispatch('signUp',form.value) 
    form.reset() 
    router.push('/products')
    
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

                <form @submit="signUpUser" >
                    <label class="label_wrap">
                        <span class="label">Username</span>
                        <input type="text" name="username" class="input" v-model="form.username" required autocomplete="nickname">
                    </label>
                    <label class="label_wrap">
                        <span class="label">Email</span>
                        <input type="email" name="email" class="input" v-model="form.email" required autocomplete="email">
                    </label>
                    <label class="label_wrap">
                        <span class="label">Password</span>
                        <input type="password" name="password" v-model="form.password" class="input" required>
                    </label>
                    <input type="submit" value="Get started" class="submit">
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
.text_wrap{
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
.submit {
    padding: 1em 2em;
    border: none;
    border-radius: 8px;
}

.label,
.submit,
.input {
    display: block;
    width: 90%;
    margin: auto;
}

.label {
    margin-bottom: 0.2em;
    color: #fff;
}

.submit {
    background-color: #1B4B66;
    color: #fff;
    margin: 2em auto;
    cursor: pointer;
}
.bold{
    font-weight: 600;
}
.light{
    font-weight: 400;
    line-height: 15px;
}
@media (min-width:60rem) {
    .signup_container {
        padding-inline: 3em;
    }
}</style>