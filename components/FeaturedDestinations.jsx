import React from 'react'
import {FeaturedCards} from "@/components/FeaturedCards"

export const FeaturedDestinations = () => {
  return (
    <div className=' bg-white h-screen p-20'>
       <p className="font-semibold text-6xl text-[#205F86]">
        Featured Destinations
       </p>
       <div className='mt-20 flex flex-row items-stretch gap-3 '>
            <FeaturedCards/>
            <FeaturedCards/>
            <FeaturedCards/>
            <FeaturedCards/>
            <FeaturedCards/>
            <FeaturedCards/>

       </div>

    </div>
  )
}

