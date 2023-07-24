import { produce } from "immer"

const initialState = {
    products: []
} as { products: any }

export const productReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case 'product/get':
                draftState.products = action.payload
                break;
            case 'product/add':
                draftState.products.push(action.payload)
                break;
            case 'product/update':
                const product = action.payload
                draftState.products = state.products.map((item: any) => item.id === product.id ? product : item)
                break;
            case 'product/remove':
                const id = action.payload
                draftState.products = state.products.filter((product: any) => product.id != id)
                break;
            default:
                return state
        }
    })
}