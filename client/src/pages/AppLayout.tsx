import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner'

function AppLayout() {
  return (
    <>
    <Banner/>
    <p>navbar</p>
    <main className='min-h-screen'>
      <Outlet/>
    </main>
    <p>footer</p>
    <p>cartsidebars</p>
    </>


  )
}

export default AppLayout