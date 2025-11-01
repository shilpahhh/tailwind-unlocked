import React from 'react'
import { NavLink } from 'react-router-dom'


function Nav() {
  return (
    <div  class="w-full   bg-gray-900 text-yellow-500 
    py-13 shadow-lg fixed  z-50  flex items-center pb-4 justify-center gap-6 text-lg font-medium tracking-wide">
    
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">WHAT ARE WE?</NavLink>
          <NavLink to="/launch">WHEN WE LAUNCH?</NavLink>
          <NavLink to="/footer">SOCIAL LINKS</NavLink>
   
    </div>
  )
}

export default Nav

