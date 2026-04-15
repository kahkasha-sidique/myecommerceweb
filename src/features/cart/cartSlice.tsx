import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Product {
  id: number;
  image: string;
  name: string;
  Price: number;
  seller?: string;
  sku: string;
  color: string;
}
interface CartItem extends Product {
  size: string;
  quantity: number;
}
interface cartState {
    cart:CartItem[]
}

const initialState:cartState={
    cart:[]
};

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtoCart:(state,action: PayloadAction<{ product:Product,size:string,quantity:number}>)=>{
            const {product,size,quantity}=action.payload
        
        const exist=state.cart.find(item=>item.id===product.id && item.size===size)
        if(exist){
            exist.quantity+=1
        }
        else{
            state.cart.push({...product,size,quantity:quantity})
        }
        },

        handleDelete:(state,action)=>{
            const {id,size}=action.payload
            state.cart=state.cart.filter(item=>!(item.id===id && item.size===size))
        },

        incrementAdd:(state,action)=>{
          const {quantity,id,size}=action.payload
          const exist=state.cart.find(item=>item.id===id&&item.size===size)
          if(exist){
            exist.quantity+=1
          }
        } ,
        decrementSub:(state,action)=>{
          const {quantity,id,size}=action.payload
          const exist=state.cart.find(item=>item.id===id&&item.size===size)
          if(exist){
            exist.quantity-=1
          }
        }
    }
})

export const {addtoCart,handleDelete,incrementAdd,decrementSub}=cartSlice.actions;
export default cartSlice.reducer;