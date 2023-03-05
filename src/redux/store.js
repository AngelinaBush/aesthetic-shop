import catalog from './catalogSlice'
import cart from './cartSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        catalog: catalog,
        cart: cart
    },
})