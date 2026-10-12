import React, { useEffect, useState } from 'react'
import type { Order } from '../types';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { dummyDashboardOrdersData } from '../assets/assets';

function MyOrders() {
  const currency=import.meta.env.VITE_CURRENCY_SYMBOL || "$";
  const[orders,setOrders]=useState<Order[]>([])
  const[loading,setLoading]=useState(true);
  const[activeTab,setActiveTab]=useState("all")
  const[searchParams,setSearchParams]=useSearchParams()
  const tabs=["all","Placed","out of Delivery","Delivered" ];
  const {clearCart}=useCart()
  const fetchOrders=async ()=>{
    setOrders(dummyDashboardOrdersData as any)
    setLoading(false)
  }
  useEffect(()=>{
  if(searchParams.get("clearCart")){
    clearCart()
    setSearchParams({});
    setTimeout(()=>{
      fetchOrders()
    },2000)
  }else{
    fetchOrders()
  }
  },[activeTab])
  return (
    <div>Myorders</div>
  )
}

export default MyOrders