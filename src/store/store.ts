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
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload
        }

    },
    actions: {
        signUp(context, { password, email, username }: { email: string, password: string, username: string }) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, { displayName: username })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                });
        }
    }

});
