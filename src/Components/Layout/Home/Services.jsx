import React from 'react'

function Services() {
  return (
    <>
        <h1 className='text-zinc-200 font-teko uppercase p-10 text-5xl'>Our Services</h1>
        <div className='w-full justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col pb-10'>
            <div className='flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-row md:gap-10'>
                <div className='flex justify-center items-center rounded-3xl mt-7 font-cabin  w-[60vw] h-[50vh] md:w-[25vw] md:h-[25vw] bg-[#76e2d4] hover:scale-95 duration-500'>Branding and Marketing</div>
                <div className='flex justify-center items-center rounded-3xl mt-7 font-cabin w-[60vw] h-[50vh] md:w-[25vw] md:h-[25vw] bg-[#76e2d4] hover:scale-95 duration-500'>Design and Development</div>
            </div>
            <div className='flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-row md:gap-10'>
                <div className='flex justify-center items-center rounded-3xl mt-7 font-cabin w-[60vw] h-[50vh] md:w-[25vw] md:h-[25vw] bg-[#76e2d4] hover:scale-95 duration-500'>Digital Strategy and Planning</div>
                <div className='flex justify-center items-center rounded-3xl mt-7 font-cabin w-[60vw] h-[50vh] md:w-[25vw] md:h-[25vw] bg-[#76e2d4] hover:scale-95 duration-500'>Media buying and AD management</div>
            </div>
        </div>
    </>
  )
}

export default Services