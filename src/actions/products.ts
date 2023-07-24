import { instance } from "@/axios/config"

export const getAll = () => async (dispatch: any) => {
    try {
        const data = await instance.get('/products')
        dispatch({ type: 'product/get', payload: data })
    } catch (error: any) {
        console.log(error.message);

    }
}

export const addProduct = (product: any) => async (dispatch: any) => {
    try {
        const data = await instance.post('/products', product)
        dispatch({ type: 'product/add', payload: data })
    } catch (error: any) {
        console.log(error.message);

    }
}
export const updateProduct = (product: any) => async (dispatch: any) => {
    try {
        const data = await instance.patch(`/products/${product.id}`, product)
        dispatch({ type: 'product/update', payload: data })
    } catch (error: any) {
        console.log(error.message);

    }
}
export const removeProduct = (id: number) => async (dispatch: any) => {
    try {
        await instance.delete(`/products/${id}`)
        dispatch({ type: 'product/remove', payload: id })
    } catch (error: any) {
        console.log(error.message);

    }
}