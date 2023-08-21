import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className='flex justify-between absolute items-center w-[1118px] h-[52px] left-[132px] top-[35px]'>
        <ul className='flex justify-around w-[270px] cursor-pointer'>
        <li className='text-[#686C75] uppercase ' >home</li>
        <li className='text-[#686C75] uppercase '>about</li>
        <li className='text-[#686C75] uppercase '>services</li>
        </ul>
        <ul className='flex justify-around w-[270px]  cursor-pointer ' > 
        <li className='text-[#686C75] uppercase '>services</li>
        <li className='text-[#686C75] uppercase'>spaces</li>
        <li className='text-[#686C75] uppercase '>events</li>
         </ul>
   </nav>
    </>
  )
}

export default Nav