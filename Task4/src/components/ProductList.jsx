import React, { useEffect } from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/store/productSlice';
import Navbar from './Navbar';

export default function ProductList() {

    const dispatch = useDispatch();
  const {product_items, loading, error} = useSelector((store)=>store.product);


  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-lg font-semibold">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full text-red-500 text-xl">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-4 h-full gap-4 m-4 p-5'>
        {
          product_items.map((item)=>{
            return <Product key={item.id} product={item} />
          })
        }
    </div>
        </>
  )
}
