import { createStore } from 'vuex';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
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
const unsub = onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        store.commit("authIsReady", true)
        store.commit("setUser", user)
    } else {
        store.commit("authIsReady", false)
        store.commit("setUser", user)
    }
    unsub()
});

