import type Product from "@/types/Product"
import { ref } from "vue"

const FetchProduct = (url: string) => {
    const product = ref<Product>({ id: 0, 
        title: '', price: 0, thumbnail: '', description: '', rating: 0, discountPercentage: 0, brand: '', category: '', stock: 0, images: [] })
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
            product.value = data
            loading.value = false
        } catch (err: any) {
            error.value = err.message
            loading.value = false
        }
    }
    return { product, error, loading, fetchData }
}
export default FetchProduct