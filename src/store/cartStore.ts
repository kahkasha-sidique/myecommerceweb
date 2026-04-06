import { create } from "zustand";

interface productType{
    id:number
      image: string;
    name: string;
    Price: string;
    seller?: string;
    sku:string
    color:string
    price:number
}

interface createUser{
    cart:productType[];
    addToCart:(product:productType)=>void;
}                                                                                                                                                                                                                                                                                                                                         
export const useCartStore=create<createUser>((set)=>({
 cart:[],
 addToCart:(product)=>set((state)=>({
    cart:[...state.cart,product]
 }))
}))