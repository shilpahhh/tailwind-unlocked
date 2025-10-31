import React from 'react'

function About() {

  let image = [
    {
      img: "p1.png",
      trainer: "trainer MARK",
      title: "strength & Conditioning"
    },
    {
      img: "p2.png",
      trainer: "trainer NIA",
      title: "yoga"
    },
    {
      img: "p3.png",
      trainer: "trainer ZANE",
      title: "HIIT & weight loss"
    },
    {
      img: "p4.png",
      trainer: "trainer ANYA",
      title: "fitness & nutrition coach"
    }
  ]
  return (
    <>
      <div class="">
        <h1 class="text-blue-700 font-extrabold text-6xl text-center mt-9 md:text-7xl leading-tight">
          what are we ?
        </h1>
      </div>

      <div class="">
        <p class="text-center text-gray-800 mt-6 mx-auto max-w-6xl">
          At GetFit & ZenAura, we believe true wellness comes from harmony — where physical strength meets emotional peace. Our mission is to help you move, breathe, and grow through personalized experiences that empower both your body and your mind.
          We’re more than just a platform; we’re a growing community that blends physical strength with mental clarity.
          Whether you seek to train, relax, or reflect, our goal is to help you nurture both body and mind in perfect balance. GetFit is an innovative web platform designed to connect fitness enthusiasts with certified personal trainers, providing a seamless solution for achieving fitness goals. The website facilitates efficient communication between clients and trainers, offering a user-friendly experience for both parties. From high-energy training sessions to calming yoga flows, ZenAura helps you find balance in every breath.<br></br>
          We bring together expert trainers, curated plans, and mindful tools so you can feel stronger, calmer, and more centered every day.
        </p>
      </div>

      <div class="flex flex-row justify-between pt-12">
        {image.map((data) => {
          return (
            <>
              <div class="w-60 h-80 bg-gradient-to-b from-cyan-100 to-blue-100 border-2 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition hover:animate-pulse">
                <img src={data.img} class="w-32 h-32 rounded-full object-cover mx-auto shadow-md mt-12 border-4 border-white" />
                <h1 class="font-bold text-center text-blue-600 mt-6 md:text-2xl">{data.trainer}</h1>
                <p class="text-center text-gray-600 mt-4 md:text-lg">{data.title}</p>
              </div>
            </>
          )
        })}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16 text-center ">
        <div className="bg-gradient-to-b from-cyan-100 to-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:animate-pulse">
          <h3 className="font-bold text-xl text-blue-700 mb-3">Workout Plans</h3>
          <p className="text-gray-700">Choose from tailored fitness plans designed for every goal — strength, weight loss, or endurance.</p>
        </div>
        <div className="bg-gradient-to-b from-cyan-100 to-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:animate-pulse">
          <h3 className="font-bold text-xl text-blue-700 mb-3">Mindful Podcasts</h3>
          <p className="text-gray-700">Listen to motivational podcasts that boost focus, reduce stress, and nurture positivity.</p>
        </div>
        <div className="bg-gradient-to-b from-cyan-100 to-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:animate-pulse">
          <h3 className="font-bold text-xl text-blue-700 mb-3">Wellness Books</h3>
          <p className="text-gray-700">Explore our handpicked collection of books on wellness, mindfulness, and personal growth.</p>
        </div>
      </div>

       <div className="text-center mt-20 mx-auto animate-slideUp">
        <h2 className="text-3xl font-extrabold text-blue-600 mx-auto text-center animate-slideUp">Are you a certified trainer??</h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Be part of a movement that celebrates health, mindfulness, and growth. Together, we lift each other higher.
        </p>
        <button className="mt-6 bg-gradient-to-t from-gray-300 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-gray-300 transition shadow-lg animate-bounce">
          JOIN WITH US
        </button>
      </div>
    </>
  )
}

export default About

