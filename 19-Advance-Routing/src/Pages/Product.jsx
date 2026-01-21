import React from 'react'
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <div className='flex gap-5 font-bold justify-center'>
        <Link to='/Product/Women'>Women</Link>
        <Link to='/Product/Men'>Men</Link>
        <Link to='/Product/Kids'>Kids</Link>
      </div>
      <Outlet />
    </div>
  
  )
}

export default Product
