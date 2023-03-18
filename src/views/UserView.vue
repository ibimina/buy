<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import FooterBar from '@/components/FooterBar.vue';
import { ref } from 'vue';
import PreviousArr from '@/components/PreviousArr.vue';

const router = useRouter()
const store = useStore()
const imgPlaceholder = ref('')
const num = ref(0)
const form = ref({ displayName: store.state.user.displayName, phoneNumber: "", email: store.state.user.email, photoFile: {} as File })
const logOut = async (e: Event) => {
    e.preventDefault();
    await store.dispatch("logOut")
    router.push('/')
}

const handleImageFile = (e: Event) => {
    let img = e.target as HTMLInputElement
    form.value.photoFile = img.files![0]
    imgPlaceholder.value = URL.createObjectURL(img.files![0])
}
const update = async (e: Event) => {
    e.preventDefault()
    await store.dispatch('updateUser', form.value)
    imgPlaceholder.value = ''
    remount()
}
const removeImage = () => {
    imgPlaceholder.value = ''
}
const remount = () => {
    num.value += 1
}

</script>
<template>
    <div class="profile" :key="num">
        <PreviousArr />
        <div class="flex">
            <h1>Profile
            </h1>
            <button @click="logOut" class="logout">logout</button>
        </div>
        <div>
            <div>
                <img :src="store?.state?.user?.photoURL" alt="avatar" class="avatar">
            </div>
            <form @submit="update" class="form">
                <div class="file_btnwrap label">
                    <label class="file_label">

                        <span class="upload file_btn">Choose image</span>

                        <div v-if="imgPlaceholder" class="placeholder_wrap">
                            <img :src="imgPlaceholder" alt="" class="placeholder">
                            <p class="name">{{ form.photoFile.name }}</p>
                        </div>
                        <input type="file" @change="handleImageFile" class="custom-file-input">
                    </label>
                    <span @click="removeImage" class="remove file_btn">Delete</span>

                </div>

                <label class="label">
                    <span>Username</span>
                    <input type="text" v-model="form.displayName" class="input">
                </label>
                <label class="label">
                    <span>Email</span>
                    <input type="email" v-model="form.email" class="input">
                </label>
                <input type="submit" value="Save Changes" class="submit">
            </form>
        </div>
    </div>
    <FooterBar />
</template>
<style scoped>
.form {
    max-width: 400px;
}

.placeholder_wrap {
    display: flex;
    align-items: center;
    gap: 1em;
}

.profile {
    padding: 2em;
}

.placeholder {
    width: 100px;
    height: 100px;
    border-radius: 25%;
    border: 2px solid grey;
}

.logout {
    border: 1px solid #1b4b66;
    border-radius: 8px;
    color: #1b4b66;
    background-color: #fff;
    padding: 0.5em 1em;
    cursor: pointer;
}

.name {
    margin: 0.5em 0;
}

span {
    font-weight: 500;
    color: #171520;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em 0;
}

.label,
.input,
span {
    width: 100%;
    display: block;
}

.label {
    margin-bottom: 1em;
}

.input {
    border: none;
    background-color: #f1f1f1;
    padding: 1em 0.5em;
    border-radius: 4px;
    color: #626262;
}

.avatar {
    border-radius: 50%;
    width: 100px;
    border: 2px solid grey;
}

.custom-file-input {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
}

.file_btn {
    padding: 0.5em 1em;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    border: none;
}

.upload {
    background-color: #1b4b66;
    color: #fff;
}

.remove {
    color: #b00020;
    border: 1px solid #b00020;
}

.file_label {
    display: flex;
    flex-direction: column-reverse;
}

.file_btnwrap {
    display: grid;
    max-width: 300px;
    grid-template-columns: 1fr 1fr;
    align-items: flex-end;
    gap: 1em;
    margin-top: 1em;
}

.submit {
    border: none;
    border-radius: 8px;
    background-color: #1b4b66;
    color: #fff;
    display: inline-block;
    padding: 1em;
    margin-top: 1em;
    cursor: pointer;
}

@media (min-width:60rem) {}</style>