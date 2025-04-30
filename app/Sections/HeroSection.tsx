import React from 'react'

function HeroSection() {
  return (
    <div className='section-padding py-12 grid grid-cols-1 md:grid-cols-2 gap-10'>
      <section className='mt-12'>
        <button className='btn text-white primarybg rounded-md hover:bg-opacity-80 transition'>
        Verted Reviews 
        </button>
        <h1 className='text-4xl mt-2 mb-4 font-bold md:w-[80%]'>
        Turn Conversations into Credible Reviews.
        </h1>
        <p className='text-gray-500 mb-7'>
        No apps to download. No forms to fill. Just send a Message to spark feedback that fuels your brand.
        </p>
        <div className='flex items-center gap-4'>
            <button className='btn text-white primarybg rounded-md hover:bg-opacity-80 transition'>
            Start Scaling
            </button>
            <button className=' bg-gray-100 btn text-black  rounded-md hover:bg-opacity-80 transition'>
            Sign Up
            </button>
        </div>
      </section>
      <section className='h-[500px] bg-gray-100 rounded-md'></section>
    </div>
  )
}

export default HeroSection
