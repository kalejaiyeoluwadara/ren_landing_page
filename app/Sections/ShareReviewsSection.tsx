import React from 'react'
import Button from '../components/shared/Button'

function ShareReviewsSection() {
  return (
    <div className='section-padding py-12 grid grid-cols-1 md:grid-cols-2 gap-10'>
      <section className='mt-12'>
        <h2 className=' mt-2 mb-4 md:w-[70%]'>
            Share your Reviews <br /> with one click
        </h2>
        <p className='text-gray-500 md:w-[55%] mb-7'>
             Get notified when you get new reviews and share them to X instantly
        </p>
        <div className='flex items-center gap-4'>
            <button className='btn text-white primarybg rounded-md hover:bg-opacity-80 transition'>
            Start Sharing Reviews
            </button>
           
        </div>
      </section>
      <section className='h-[500px] bg-gray-100 rounded-md flex-center'>
        <Button isPrimary={true} name='Play'/>
      </section>
    </div>
  )
}

export default ShareReviewsSection
