'use client'

import React from 'react'
import Image from "next/image";
import {FeaturedDestinations} from "@/components/FeaturedDestinations"
import {motion, useMotionTemplate, useScroll, useTransform} from 'framer-motion'
import { useRef } from "react";
import Logo from "@/assets/images/airlineLogo.png"


export const HomePage = () => {



    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
      {
        target:ref,
        offset:['start start','end end']
      }
    )
    
    const scale = useTransform(scrollYProgress,[0,1],[1,12]);
    const shiftX = useTransform(scrollYProgress,[0,0.9],[50,0])
    const shiftXCalc = useMotionTemplate`max(0px, calc(${shiftX}% + calc(${shiftX}vw - 300px)))`;
    const shiftY = useTransform(scrollYProgress,[0,1],["34%","110%"])
    const textOpacity = useTransform(scrollYProgress,[0.2,0.8],[0,1]);

  return (
    <>
 <div className="min-h-[200vh] relative z-10 overflow-clip" ref={ref} > 
            <motion.div 
            className=" window-mask h-screen bg-white sticky z-10 p-10  origin-[90%_40%] "
            style={{
              scale
            }}
            >
              <div className="flex h-full items-center relative">
              <div className="max-w-[60%] flex flex-col gap-10 justify-center ">
                  <p className="text-7xl  font-bold text-[#235F87]">
                    The World is Wide, So Go Out & Explore!
                   </p>
                   <p className="text-lg font-semibold text-black/50">
                   Wherever your dreams take you, we'll get you there.
                   Experience the world, one destination at a time.
                   </p>
              </div>
              <div className="flex items-center justify-center absolute right-10 ">
                   <div className=" w-[300px] aspect-[5/8] rounded-full border-[4px] border-gray-300 shadow-lg"/>
              </div>
              </div>

            </motion.div>
    </div>
     
    <div className="h-[200vh] p-10 mt-[-200vh] relative overflow-clip hero-background " >
     <motion.div className="sticky mx-auto block aspect-video w-[1600px] max-w-[90%] rounded-[60px] bg-white shadow-2xl overflow-clip "
      style={{
        x:shiftXCalc,
        y:shiftY
      }}
     >
      <div className="h-full page-background p-10">

        <div>
          <Image alt="logo" src={Logo} width={100} height={100}/>
        </div>

        <div className="max-w-[60%] mt-[10%] flex flex-col gap-5">

          <motion.p className="text-8xl text-[#225E86] font-semibold"
           style={{
            opacity: textOpacity
           }}
          >
            Take Off With Confidence
          </motion.p>
          <motion.p
          className="text-lg font-semibold text-black/50 max-w-[90%]"
           style={{
            opacity: textOpacity
           }}
          >
          From cityscapes to natural wonders, discover it all.
          Your next adventure is just a flight away.
          </motion.p>
        </div>

      </div>

     </motion.div>
    </div>

    <FeaturedDestinations/>
    </>
  )
}

