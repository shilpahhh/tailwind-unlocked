import React from 'react'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen mx-auto bg-gradient-to-b from-gray-900 via-black to-gray-800 px-6">
      
     
      <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-300 leading-tight">
        <span className="text-yellow-500 font-extrabold text-6xl sm:text-7xl md:text-8xl">Train</span> smart.<br />
        Live <span className="text-blue-600 font-extrabold text-6xl sm:text-7xl md:text-8xl">Calm.</span>
      </h1>

    
      <h3 className="mt-10 text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-300 font-medium tracking-wide">with </h3>

   
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-8 animate-pulse">
        <h1 className="text-yellow-500 font-extrabold text-5xl sm:text-6xl md:text-8xl ml-10">
          GetFit
          <span className="text-gray-300 font-extrabold ml-9 ">&</span>
        </h1>
        <h1 className="text-blue-600 font-extrabold text-5xl sm:text-6xl md:text-8xl">
          ZenAura
        </h1>
      </div>

      <p class=" mt-20 text-white font-bold md:text-1xl mx-auto animate-bounce">we will launch soon !</p>

    </div>
  )
}

export default Home
