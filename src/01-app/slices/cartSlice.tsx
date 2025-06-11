import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export type CartItem = {
    photo: string;
    id: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
};

type CartState = {
    items: CartItem[];
  };

const loadCartFromLS = () => {
    try{
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    } catch {
        return []
    
    };
}

const saveCartToLS = (cart: CartItem[]) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch{
        console.error("Failed to save cart to localStorage");
    }
}

const initialState: CartState = {
    items: loadCartFromLS(),
}
const cartSlice = createSlice({
    

    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                item => item.id === action.payload.id && item.size === action.payload.size);

            if (existingItem){
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
            saveCartToLS(state.items);
    },
        increaseQuaintity: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                item => item.id === action.payload.id && item.size === action.payload.size);

            if (existingItem) {
                existingItem.quantity += 1;
            }
            saveCartToLS(state.items);
    },
    decreaseQuantity: (state, action: PayloadAction<CartItem>) => {
        const existingItem = state.items.find(
          (item) => item.id === action.payload.id && item.size === action.payload.size
        );
  
        if (existingItem) {
          existingItem.quantity -= 1;
  
          if (existingItem.quantity < 1) {
            state.items = state.items.filter(
              (item) => !(item.id === action.payload.id && item.size === action.payload.size)
            );
          }
        }
  
        saveCartToLS(state.items);
      },
      removeItem: (state, action: PayloadAction<CartItem>) => {
        state.items = state.items.filter((item) => 
            !(item.id === action.payload.id && item.size === action.payload.size)
        )
        saveCartToLS(state.items);
      }

  


}})

export const { addItem, increaseQuaintity, decreaseQuantity, removeItem} = cartSlice.actions;
export const selectTotalAmount = (state: { cart: CartState }) =>
    state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export default cartSlice.reducer;