import { createSlice } from "@reduxjs/toolkit";

const totalFunction = (products) => {
    console.log("TOTAL FUNCTION UPDATED");
    let sum = 0;
    products.map(item => {
        sum += item.quantity*item.price;
    })
    return sum;
}

const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total:0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            // state.total -= state.products[action.payload.index].price * state.products[action.payload.index].quantity;
            state.products.splice(action.payload.index, 1);

            state.total = totalFunction(state.products);
        },
        updateQuantity: (state, action) => {
            const index = action.payload.index;
            if (action.payload.operator === "inc") {
                state.products[index].quantity += 1;
            }
            else if (action.payload.operator === "dec") {
                state.products[index].quantity -= 1;
            }
            state.total = totalFunction(state.products);
        },
    },
});

export const { addProduct, removeProduct, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;