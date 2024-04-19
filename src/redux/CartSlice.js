import { createSlice } from '@reduxjs/toolkit';
const storeInLocalStorage=(data)=>{
localStorage.setProduct("cart",JSON.stringify(data))
}

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        data:[],
        totalItems:0,
        totalAmount: 0
    },
    reducers:{
        addtoCart(state,action){
            const existingItems= state.data.find(
                (product)=>product.id ===action.payload.id
            )
            if(existingItems){
                const tempCart = state.data.map((product)=>{
                    if (product.id===action.payload.id){
                        let newQTY = product.quantity + action.payload.quantity
                        let newTotalPrice = newQTY * product.price
                        return{
                            ...product,
                            quantity: newQTY,
                            price: newTotalPrice
                        }
                    }
                    else{
                        return product
                    }
                })
                state.data = tempCart
                storeInLocalStorage(state.data);
            }else{
                state.data.push(action.payload)
                storeInLocalStorage(state.data);
            }
        }
        
    }

})
export const {addtoCart} = cartSlice.action;
export default cartSlice.reducer