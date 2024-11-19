import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const NavBar = () => {


  const [showMenu,setShowMenu] = useState(false);

  useEffect(()=>{
    if (showMenu) {
      document.body.style.overflow = 'hidden';
      
    }else{
      document.body.style.overflow = 'auto';
    }

    return()=>{
      document.body.style.overflow = 'auto';
    }

  },[showMenu])




  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img className='w-36' src={assets.logo} alt="" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Home" className='cursor pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonials" className='cursor pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
        <img onClick={()=>setShowMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>


      <div className={`md:hidden ${showMenu? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=>setShowMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Home">Home</a>
          <a onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#About">About</a>
          <a onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Projects">Projects</a>
          <a onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Testimonials">Testimonials</a>



        </ul>
      </div>






    </div>
  )
}

export default NavBar