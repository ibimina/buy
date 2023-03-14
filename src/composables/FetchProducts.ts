import { ref } from "vue"

const FetchProducts = (url: string) => {
    type Product ={
        id: number
        title: string
        price: number
        thumbnail: string
        description: string
        rating:number
        discountPercentage :number
    }[]
    const products = ref([] as Product)
    const error = ref(null)
    const loading = ref(false)
    const baseUrl = 'https://dummyjson.com'
    const fetchData = async () => {     
        try {
            loading.value = true
            const res = await fetch(baseUrl + url)
            if (!res.ok) {
                throw new Error('Could not fetch products')
            }
            const data = await res.json()
            products.value = data.products
            loading.value = false
        } catch (err: any) {
            error.value = err.message
            loading.value = false
        }
    }
 
    return { products, error, loading, fetchData }
}
export default FetchProducts