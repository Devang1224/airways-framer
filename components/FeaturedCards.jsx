'use client'

import React, { useState } from 'react'
import airplaneEvening from '@/assets/images/airplaneEvening.webp'
import Image from 'next/image';


export const FeaturedCards = () => {

  const [cardHovered,setCardHovered] = useState(false);

  const toggleCard = (state)=>{
     setCardHovered(state);
  }




  return (
    <div
     className={`relative bg-red-400 min-h-[500px] shadow-lg flex flex-col justify-end rounded-[40px] w-[100px] ${cardHovered && 'w-[400px]' } transition-all duration-500 overflow-clip`}
     onMouseEnter={()=>toggleCard(true)}
     onMouseLeave={()=>toggleCard(false)}
     style={{willChange:'width'}}
    >
           <Image src={airplaneEvening} alt="card image" className='absolute h-full object-cover bg-center'/>
        <div className={`bg-white relative z-10 min-h-[30%] p-2 ${cardHovered ? 'transition-all duration-500 opacity-100' : 'opacity-0 transition-all  duration-200'}  `} >
           <p className='text-lg font-semibold text-[#205F86] whitespace-nowrap'>Paris, France</p>
           <p className='text-black/30 font-semibold mt-2 whitespace-nowra'>20 May 2022 - 30 May 2022</p>
           <p className='text-black/30 font-semibold mt-5 whitespace-nowra'>$1000 - $1500</p>
        </div>
    </div>
  )
}
