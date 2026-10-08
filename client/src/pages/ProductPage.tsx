import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';

function ProductPage() {
  const currency =import.meta.env.VITE_CURRENCY_SYMBOL || "$";
  const {id}=useParams()
  const navigate =useNavigate()
  const {items,addToCart,updateQuantity,removeFromCart}=useCart();
  const [product,setProduct]=useState<Product  | null >(null)
  const [relatedProducts,setRelatedProducts]=useState<Product[]>([])
  const[loading,setLoading]=useState(true)
  const [localQuantity ,setLocalQuantity]=useState(1)
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage