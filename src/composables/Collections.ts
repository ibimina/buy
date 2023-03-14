import { db } from '@/firebase/config';
import { collection, onSnapshot, query, where, type DocumentData } from '@firebase/firestore';
import { ref } from 'vue';


const getCart = (uid:string) => { 
    const cartLength = ref(0)
    const subTotal = ref(0)
    const cartProducts = ref([] as DocumentData[])

    const q = query(collection(db, "carts"), where("uid", "==", uid));
    onSnapshot(q, (querySnapshot) => {
        const arr: DocumentData[] = []
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
        });
        cartLength.value = arr.reduce((acc, curr) => acc + curr.quantity, 0)
        subTotal.value = arr.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        cartProducts.value = arr
    });
return { cartLength, subTotal, cartProducts}
}
export default getCart