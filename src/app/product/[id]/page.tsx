"use client"
import ProductPage from '@/components/layout/ProductPage/ProductPage'
import { AllProduct } from '@/data/product'
import { useParams } from 'next/navigation'



export default function ProductDetailPage() {
 const params=useParams()
 
const id = params?.id ? Number(params.id) : null;

  const product = AllProduct.find(
    (p) => p.id === id
  )

  if (!product) return <p>product not found</p>

  return <ProductPage product={product} />
}