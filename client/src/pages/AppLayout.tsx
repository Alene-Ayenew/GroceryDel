import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function AppLayout() {
  return (
    <>
    <Banner/>
    <Navbar/>
    <main className='min-h-screen'>
      <Outlet/>
    </main>
    <Footer/>
    <p>cartsidebars</p>
    </>


  )
}

export default AppLayout