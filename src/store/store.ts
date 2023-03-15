import { createStore } from 'vuex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '@/firebase/config';
import type Cart from '@/types/Cart';
import type User from '@/types/User';


export const store = createStore({
    state() {
        return {
            authIsReady: false,
            user: {} as User,
            cart: [] as Cart[],
            authError: null
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload
        },
        setAuthError(state, payload) {
            state.authError = payload
        },
    },
    actions: {
        async signUp(context, { password, email, username }: { email: string, password: string, username: string }) {
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password)
                await updateProfile(res.user, { displayName: username })
                if (res) {
                    context.commit("setAuthIsReady", true)
                    context.commit("setUser", res.user)
                } else {
                    throw new Error("something went wrong");
                }
            } catch (error: any) {
                context.commit("setAuthError", error.message,error.code)
            }
        },
        async signIn(context, { password, email }: { email: string, password: string }) {
            try {
                const res = await signInWithEmailAndPassword(auth, email, password)
                if (res) {
                    context.commit("setUser", res.user)
                    context.commit("setAuthIsReady", true)
                } else {
                    throw new Error("could not complete login");
                }
            } catch (error:any) {
                context.commit("setAuthError", error.message, error.code)
            }
        }, async logOut(context) {
            await signOut(auth)
            context.commit("setUser", null)
            context.commit("setAuthIsReady", false)
        },

    },
});
const unsub = onAuthStateChanged(auth, (user) => {
    if (user) {
        store.commit("setAuthIsReady", true)
        store.commit("setUser", user)
    } else {
        store.commit("setAuthIsReady", false)
        store.commit("setUser", user)
    }
    unsub()
});

