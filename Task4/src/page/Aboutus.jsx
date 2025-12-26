import Navbar from '@/components/Navbar'
import React from 'react'
import logo from '@/assets/logo123.png'
export default function Aboutus() {
  return (
    <div>
      <Navbar/>
      <div className='h-50 flex flex-col items-center justify-center my-5'>
      <h1 className='text-center text-4xl  p-5 font-bold'>Welcome To About Page</h1>

        <img src={logo} alt="logo" className='h-50 w-50 object-contain'  />
        <p>This is an E-commerce website built using React and Redux Toolkit.</p>
        <p>It features a product listing page that fetches data from a public API and displays it in a user-friendly manner.</p>
        <p>Navigate to the Products page to explore our product catalog.</p>
      </div>


    </div>
  )
}
