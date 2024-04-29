import { motion } from 'framer-motion';
import { FaArrowUp } from "react-icons/fa6";
import React from 'react'

function LandingPage() {
  motion  
  return (
    <div className='w-full h-screen overflow-hidden flex justify-center items-start flex-col  bg-zinc-900 md:flex md:justify-between md:items-center md:flex-row  '>
        <div className=' ml-5 '>
            <h1 className=' text-[9vw] text-zinc-200  font-teko leading-none'>WE CREATE</h1>
            <div className='flex justify-start items-center tracking-tighter leading-none'>
            <motion.div
                initial={{width:0}} 
                animate={{width:"9vw"}} 
                transition={{ease : [0.76, 0, 0.24, 1], duration:2}} 
                className='w-[9vw] h-[5vw] mt-1.5 rounded-md leading-none bg-green-500'>
            </motion.div>
                <h1 className=' text-[9vw] text-zinc-200
                  font-teko leading-none'>EYE OPENING</h1>
            </div>
            <h1 className=' text-[9vw] text-zinc-200  font-teko leading-none'>DIGITAL SERVICES</h1>
        </div>
        
        <div className='start ml-5 mt-5 md:mr-5 flex justify-center items-center gap-5 '>
                <div className=' flex justify-around items-center gap-5 px-6 py-3 rounded-full border-[3px] border-zinc-200 text-zinc-200 '>Talk Now! <span className='rotate-[45deg]'><FaArrowUp /></span></div>
            </div>
        
    </div>
  )
}

export default LandingPage