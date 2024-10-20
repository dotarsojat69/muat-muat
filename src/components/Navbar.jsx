import React from 'react'
import SearchSort from './SearchSort'

const Navbar = () => {

  return (
    <div className='bg-white shadow flex justify-between items-center px-6 py-2'>
        <h2 className='text-sm sm:text-xl font-semibold py-2 text-black'>
        G-Shop
        </h2>
        

        <SearchSort />

    </div>
  )
}

export default Navbar
