import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const addedItem = action.payload;
            const existingItem = state.items.find(item => item.name === addedItem.name);

            if(existingItem)
                existingItem.quantity++;
            else
                state.items.push({...addedItem, quantity: 1});
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload.name);
        },

        updateQuantity: (state, action) => {
            const itemToUpdate = state.items.find(item => item.name === action.payload.name);
            itemToUpdate.quantity = action.payload.quantity;
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
