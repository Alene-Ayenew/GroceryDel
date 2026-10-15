import React, { useEffect, useState } from 'react'
import type { Address } from '../types'
import { dummyAddressData } from '../assets/assets'

function Address() {
  const [addresses ,setAddresses]=useState<Address[]>([])
  const[loading,setLoading]=useState(true)
  const[showForm,setShowForm]=useState(false)
  const[editingFId,setEditingId]=useState<string | null>(null)
  const[form,setForm]=useState({label:"",address:"",city:"",state:"",zip:"",isDefault:false})
  const resetForm=()=>{
    setForm({label:"",address:"",city:"",state:"",zip:"",isDefault:false});
    setShowForm(false)
    setEditingId(null)
  }
  const handleSubmit=async (e:React.SubmitEvent)=>{
    e.preventDefault()

  }
  const onEditHandler=(add:Address)=>{
    setForm({label:add.label,address:add.address,city:add.city,state:add.state,zip:add.zip,isDefault:add.isDefault})
    setEditingId(add._id)
    setShowForm(true)
  }
  useEffect(()=>{
    setAddresses(dummyAddressData)
    setTimeout(()=>setLoading(false),1000)
  },[])

  return (
    <div>Address</div>
  )
}

export default Address