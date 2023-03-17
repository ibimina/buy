import { createStore } from 'vuex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateEmail, updateProfile } from "firebase/auth";
import { auth, storage } from '@/firebase/config';
import type Cart from '@/types/Cart';
import type User from '@/types/User';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


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
                context.commit("setAuthError", error.message, error.code)
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
            } catch (error: any) {
                context.commit("setAuthError", error.message, error.code)
            }
        }, async logOut(context) {
            await signOut(auth)
            context.commit("setUser", null)
            context.commit("setAuthIsReady", false)
        }, async updateUser(context, { displayName, photoFile, email }: { displayName: string, photoFile: File, phoneNumber: string, email: string }) {
          let photoURL =''
            if(photoFile.name){
               const uploadpath = `thumbnails/${auth.currentUser?.uid}/${photoFile.name}`
               const storageRef = ref(storage, uploadpath)
               await uploadBytes(storageRef, photoFile)
                photoURL = await getDownloadURL(storageRef)
                await updateProfile(auth.currentUser!, { photoURL})
           }
           if (displayName) {
               await updateProfile(auth.currentUser!, {  displayName })
           }
            if(email){
                await updateEmail(auth.currentUser!, email)
            }
            context.commit("setUser",auth.currentUser )
            console.log(store.state.user)
        }
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

