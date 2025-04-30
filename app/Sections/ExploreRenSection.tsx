import React from 'react'
import Image from 'next/image'
import { images } from '@/public/images'
function ExploreRenSection() {
  return (
    <div className='section-padding w-full flex items-start flex-col py-12'>
      <button className='btn_gray mb-4'>
      Supercharged Reviews 
        </button>
        <h1 className='text-4xl w-[420px] font-bold mb-3'>
        Ren is built for Scaling Businesses
        </h1>
        <p className='text-gray-500 mb-6 w-[370px]'>Ren helps businesses collect, manage, and activate authentic feedback at scale.</p>
        <button className='btn bg-black text-white'>
        Explore the Platfrom
        </button>


        <section className='grid grid-cols-3 gap-5'>
            <div className='border border-gray-200 rounded-md p-4'>
                <Image src={images.explore1} alt="Ren Logo"  />
                <div>
                    <h3 className='text-lg font-bold'>
                    Real Conversations, Real Feedback
                    </h3>
                    <p>Personalized Message review requests Reach customers where they feel most comfortable</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ExploreRenSection
