import { createStore } from 'vuex';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, type Auth } from "firebase/auth";
import { auth } from '@/firebase/config';

export const store = createStore({
    state() {
        return {
            authIsReady: false,
            user: null
        }
    },
});

