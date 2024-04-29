import React from 'react'
import {motion} from "framer-motion"

function Marquee() {
  return (
    <div className='w-full py-5 rounded-tl-3xl bg-[#004D43]'>
        <div className='text  border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}} className='text-[13vw] tracking-tighter leading-none text-zinc-200  uppercase py-3 font-semibold'>we are the social ants</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}} className='text-[13vw] tracking-tighter leading-none text-zinc-200  uppercase py-3 font-semibold'>we are the social ants</motion.h1>
        </div>
    </div>
  )
}

export default Marquee