import { useState, useEffect } from 'react';
import React from 'react'

function Eyes() {
    const[rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e)=>{
            
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            console.log(mouseX)

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRotate(angle-180)
        })
    })
  return (
    <div className='eyes w-100vw h-[50vh] md:w-full md:h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.8" className='w-full h-full relative bg-center bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]'>
            <div className='absolute flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                    <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                    <div className='w-5 h-5 md:w-10 md:h-10 rounded-full bg-zinc-100'></div>
                    </div>
                </div>

                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                    <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                    <div className='w-5 h-5 md:w-10 md:h-10 rounded-full bg-zinc-100'></div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes