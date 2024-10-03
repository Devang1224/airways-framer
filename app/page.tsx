'use client'
import {HomePage} from "@/components/HomePage"
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";


export default function Home() {

useEffect(()=>{
  const lenis = new Lenis();

  function raf(time: number){
    lenis.raf(time);
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

},[])

  return (
  <main>
   <HomePage/>
  </main>

  );
}
