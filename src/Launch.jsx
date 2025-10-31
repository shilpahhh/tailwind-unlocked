import React from 'react'
import { FaCalendarAlt, FaBell } from "react-icons/fa";

function Launch() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-center text-yellow-500 px-6">
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 ">
        When We Launch ?
      </h1>

      <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10  animate-slideUp">
        The wait is almost over! <span className="text-yellow-600 font-semibold">GetFit</span> and 
        <span className="text-blue-600 font-semibold"> ZenAura</span> are getting ready to redefine how you connect your body and mind.
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8">
        Official Launch — Coming Soon
      </h2>

      <div className="flex flex-col sm:flex-row gap-6">
        <button className="flex items-center gap-2 bg-yellow-600 text-black px-8 py-3 rounded-full hover:bg-blue-600 transition">
          <FaBell /> Notify Me
        </button>
        <button className="flex items-center gap-2 border-2 border-yellow-600 px-8 py-3 rounded-full hover:bg-yellow-700 hover:text-black transition">
          <FaCalendarAlt /> Add to Calendar
        </button>
      </div>

      <p className="text-gray-500 text-sm mt-12 animate-slideUp [animation-delay:0.4s]">
        Stay tuned — the transformation begins soon.
      </p>
    </div>
  
  )
}

export default Launch
