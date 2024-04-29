import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
    <div className='bg-zinc-900 flex justify-center md:justify-between items-center flex-col md:flex-row w-full border-t-[1px] pt-10 border-zinc-200   text-zinc-200'>
    
      <div className='flex justify-center items-start flex-col md:flex md:justify-center md:items-start p-10 md:flex-row '>
        <div className='md:w-1/4 flex justify-center pb-10 items-center:'>At Social Ants we believe in unlocking digital potential with our creative prowess! Elevate your brand through our expert touch in social media marketing, graphic and web design, development, and impactful advertising collaborations. Your success, our innovation.</div>
        <div className='flex justify-center items-start  pb-10  flex-col md:w-1/4'>
          <h1 className='text-2xl'>QUICK LINKS</h1>
          <Link>Home</Link>
          <Link>Services</Link>
          <Link>About Us</Link>
          <Link>Our Products</Link>
          <Link>Contact Us</Link>

        </div>
        <div className='flex justify-center   pb-10 items-start flex-col md:w-1/4'>
          <h1 className='text-2xl'>OUR LOCATION</h1>
          <p>CDA, Sector-9, Cuttack, Odisha</p>
          <p>928347598</p>
          <p>something@email.com</p>
        </div>
        <div className='flex justify-center  pb-10 items-start flex-col md:w-1/4'>
          <h1 className='text-2xl'>SUBSCRIBE US</h1>
          <input placeholder='type your email' className='text-zinc-900'></input>
          <button className='border-2 border-zinc-200 px-3 py-1 mt-2'>SUBMIT</button>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col '></div>
    </div>
   </>
  )
}

export default Footer