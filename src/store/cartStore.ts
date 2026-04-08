import { create } from "zustand";

interface productType{
    id:number
      image: string;
    name: string;
    Price: number;
    seller?: string;
    sku:string
    color:string
    price:number
    size:string
    quantity:number
}

interface createUser{
    cart:productType[];
    addToCart:(product:productType)=>void;
    handleDelete:(id:number,size:string)=>void
}                                                                                                                                                                                                                                                                                                                                         
export const useCartStore=create<createUser>((set)=>({
 cart:[],
 addToCart:(product)=>set((state)=>{
const existing=state.cart.find((p)=>p.id===product.id&&p.size===product.size)
if(existing)
    return{
cart:state.cart.map((p)=>p.id===product.id&&p.size===product.size?
{...p,quantity:p.quantity+product.quantity}:p)
}
else{
    return{
        cart:[...state.cart,product]
    }

}
 }),
 handleDelete:(id:number,size:string)=>set((state)=>({
 cart:state.cart.filter((p)=>!(p.id === id && p.size === size))
 }))
}))