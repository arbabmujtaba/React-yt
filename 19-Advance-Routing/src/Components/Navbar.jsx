import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-10 bg-gray-200'>
      <h2 className='text-xl font-bold'>Tawakal</h2>
      <div className='flex gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Product'>Product</Link>
        <Link to='/Courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
