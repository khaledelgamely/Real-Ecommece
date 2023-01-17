import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cart.find(item => item.id === action.payload.id)
            if (!existingItem) {
                state.cart.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
            }
            else {
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.totalPrice + action.payload.price
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        removeItemFromCart(state, action) {
            const existingProduct = state.cart.find(item => item.id === action.payload.id)
            if (existingProduct.quantity === 1) {
                state.cart = state.cart.filter(item => item.id !== action.payload.id);

            } else {
                existingProduct.quantity -= 1;
                existingProduct.totalPrice = action.payload.price * existingProduct.quantity;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
    }
})

const store = configureStore({
    reducer: { cart: cartSlice.reducer }
})


export default store;
export const cartActions = cartSlice.actions;