<script setup lang="ts">
import LandingNavbar from '@/components/LandingNavbar.vue';
import FooterBar from '@/components/FooterBar.vue';

window.scrollTo(0, 0);
</script>
<template>
    <div class="about_hero">
        <div class="nav_wrap">
    <LandingNavbar />
        </div>
        
        <h1>GET IN TOUCH</h1>
    </div>

    <p class="text">let's answer your queries</p>
    <div class="contact_wrapper">
        <form>
            <label class="label">
                <span class="span">First name</span>
                <input type="text">
            </label>
            <label class="label">
                <span class="span">Last name</span>
                <input type="text">
            </label>
            <label class="label">
                <span class="span">Email</span>
                <input type="email">
            </label>
            <label class="label">
                <span class="span">Message</span>
                <textarea cols="30" rows="10" placeholder="leave a message"></textarea>
            </label>
            <input type="submit" value="SUBMIT" class="submit">
        </form>
    </div>
    <FooterBar />
</template>
<style scoped>

.text{
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    margin: 2em auto;
}
.about_hero {
    background-image: url('../assets/contacthero.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 20em;
    position: relative;
}
.nav_wrap{
    padding: 1em;
}
h1{
    position: absolute;
    top: 50%;
    color: #fff;
   text-align: center;
   width: 100%;
}
input,
.span,
.label,
textarea {
    width: 100%;
    display: block;
}

form {
    max-width: 500px;
    width: 90%;
    margin: auto;
}

.label {
    margin-bottom: 1em;
}
.span{
    color: rgb(53, 75, 82);
}
input,textarea {
    padding: 1em;
    border-radius: 8px;
    outline: none;
    border: 2px solid rgb(53, 75, 82);
}

input:focus ,textarea{
    border: 2px solid rgb(90, 177, 203);
}
.submit{
    margin: 3em auto;
    background-color: rgb(53, 75, 82);
    color: aliceblue;
    border: none;
    cursor: pointer;
}
.submit:hover{
    background-color: rgb(90, 177, 203);
    color: #fff;
}
</style>