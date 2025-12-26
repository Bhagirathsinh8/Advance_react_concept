import Navbar from '@/components/Navbar'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='h-50 flex flex-col items-center justify-center my-5'>
      <h1 className='text-center text-4xl  p-5 font-bold'>Welcome To  E-commerce</h1>
        <p>see our <Link to={'/products'} className='text-blue-400 underline'>Products</Link></p>
      </div>
    </div>
  )
}
