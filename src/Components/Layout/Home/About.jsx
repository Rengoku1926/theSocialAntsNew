import React from 'react'

function About() {
  return (
    <div className='bg-zinc-900 flex justify-center items-center flex-col p-1 md:flex md:justify-center md:items-center md:flex-row md:p-10'>
        <div className='flex justify-center items-center flex-col p-1  '>
            <h1 className='text-zinc-200 font-cabin text-5xl py-5 '>ABOUT US</h1>
            <p className='text-zinc-200 font-cabin text-3xl '>The Social Ants is a strategic partner for fast-growing tech businesses that need to sell products, explain complex ides and hire great people.</p>
            
            <button className='w-1/4  mb-5 py-2 px-6 border-2 border-zinc- text-zinc-200 rounded-3xl mt-5'>Read More</button>
        </div>
        <div className='w-full h-full rounded-3xl  bg-[#b0c859]'>
            <img className='w-full h-full rounded-xl   bg-cover' src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg'></img>
        </div>
    </div>
  )
}

export default About