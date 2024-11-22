import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-900 text-white flex justify-between py-5' >
      <div className="logo">
        <span className='font-bold text-xl mx-9 my-0'>iTask</span>
      </div>
      <ul className='flex gap-8 mx-9 '>
        <li className='cursor-pointer hover:font-extrabold transition-all duration-50ms'>Home</li>
        <li className='cursor-pointer hover:font-extrabold transition-all duration-50ms'>To-do</li>
      </ul>
    </div>
  )
}

export default Navbar
