// import { create } from "zustand";

import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/cart/cartSlice";

// interface productType{
//     id:number
//       image: string;
//     name: string;
//     Price: number;
//     seller?: string;
//     sku:string
//     color:string
//     price:number
//     size:string
//     quantity:number
// }

// interface createUser{
//     cart:productType[];
//     addToCart:(product:productType)=>void;
//     handleDelete:(id:number,size:string)=>void
//     incrementAdd:(quantity:number,id:number,size:string)=>void
//     decrementSub:(quantity:number,id:number,size:string)=>void
// }                                                                                                                                                                                                                                                                                                                                         
// export const useCartStore=create<createUser>((set)=>({
//  cart:[],
//  addToCart:(product)=>set((state)=>{
// const existing=state.cart.find((p)=>p.id===product.id&&p.size===product.size)
// if(existing)
//     return{
// cart:state.cart.map((p)=>p.id===product.id&&p.size===product.size?
// {...p,quantity:p.quantity+product.quantity}:p)
// }
// else{
//     return{
//         cart:[...state.cart,product]
//     }

// }
//  }),
//  handleDelete:(id:number,size:string)=>set((state)=>({
//  cart:state.cart.filter((p)=>!(p.id === id && p.size === size))
//  })),

//  incrementAdd:(quantity:number,id:number,size:string)=>set((state)=>{
    
//     const quantitydata=state.cart.find((p)=>p.id===id&&p.size===size)
// if(quantitydata)
//     return{
// cart:state.cart.map((p)=>p.id===id&&p.size===size?
// {...p,quantity:quantity+1}:p)
// }
// else{
//     return{
//         cart:[...state.cart]
//     }
// }
//  })
//  ,
// decrementSub:(quantity:number,id:number,size:string)=>set((state)=>{

//     const quantitySub=state.cart.find((p)=>p.id===id&&p.size===size)
//     if(quantitySub)
//         return{
//     cart:state.cart.map((p)=>p.id===id&&p.size===size?
//     {...p,quantity:quantity-1}:p
//         )
//     }
//     else{
//         return{
//             cart:[...state.cart]
//         }
//     }
// }) 

// }))


export const cartStore=configureStore({
    reducer:{
        cart:CartReducer
    }
})

export type RootState = ReturnType<typeof cartStore.getState>;