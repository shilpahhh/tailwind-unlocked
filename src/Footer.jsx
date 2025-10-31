import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-yellow-500 py-10 text-center flex flex-col justify-center items-center w-full min-h-screen ">
  

  <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold mt-10 mb-8 
text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-blue-600 
animate-pulse  tracking-wide drop-shadow-md">
<span className="text-yellow-500">GetFit</span> & <span className="text-blue-600">ZenAura</span> <br></br> Where Fitness Meets Calm.
</h2>

  <p className="text-gray-400 max-w-xl mx-auto mb-6  mt-28">
    We're building something exciting — a new era of wellness that connects 
    <span className=" font-medium"> body fitness </span> with 
    <span className=" font-medium"> mental calm.</span>  
    Stay tuned for the launch of <span className="font-semibold  text-yellow-600">GetFit</span> and <span className="font-semibold text-blue-600">ZenAura</span>.
  </p>
  
  <div className="flex justify-center gap-8 mb-6 text-3xl">
  <a href="#" className="hover:text-yellow-300 transition">
    <FaFacebookF />
  </a>
  <a href="#" className="hover:text-yellow-300 transition">
    <FaInstagram />
  </a>
  <a href="#" className="hover:text-yellow-300 transition">
    <FaTwitter />
  </a>
</div>

  <p className="text-sm text-gray-500">
    © 2025 GetFit & ZenAura — All Rights Reserved.
  </p>
</footer>
  )
}

export default Footer

