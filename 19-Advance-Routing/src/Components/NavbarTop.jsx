import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavbarTop = () => {
    let Nav = useNavigate()
  return (
    <div className='flex items-center justify-end bg-amber-700 py-5 font-extrabold px-4'>
        <div className='gap-2 flex '>
            <button className='active:scale-50 active:bg-amber-600' onClick={()=>{
                Nav('/')
            }}>
                Home
            </button>
            <button className='active:scale-50 active:bg-amber-600' onClick={()=>{
                Nav(-1)
            }}>
                Back
            </button>
            <button className='active:scale-50 active:bg-amber-600' onCLick={()=>{
                (+1)
            }}>
                Forward
            </button>
        </div>
    </div>
  )
}

export default NavbarTop
