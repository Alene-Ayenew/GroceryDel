import React, { useEffect, useState } from 'react'
import type { Product } from '../types'
import { useSearchParams } from 'react-router-dom'
import { dummyProducts } from '../assets/assets'

function SearchResults() {
  const[products,setProducts]=useState<Product[]>([])
  const[loading,setLoading]=useState(true)
  const [searchParams]=useSearchParams()
  const query=searchParams.get('q') || "";
  useEffect(()=>{
    if(!query) return;
    setLoading(true)
    setProducts(dummyProducts.filter((p:any)=>p.name.toLowerCase().includes(query.toLowerCase())))
    setLoading(false)

  },[query])
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults