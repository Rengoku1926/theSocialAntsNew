import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";


function Header() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(true)
  return (
    <>
        <div className='w-full h-[5rem] md:h-[8rem] sticky  flex justify-around items-center bg-zinc-900'>
            <div className='logo w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] mb-9 mt-6   ' >
                <img src='https://thesocialants.com/wp-content/uploads/2023/11/socialants_glow.png'></img>
            </div>
            <div className='routers text-zinc-600 '>
                <ul className='hidden  md:flex justify-center items-center gap-6 '>
                    <li className=' flex justify-around gap-[5vw] items-center'>
                        <NavLink
                        to="/"
                        className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-400" : "text-zinc-200"} border-b text-zinc-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-400 lg:p-0`
                                    }
                        >
                            Home
                        </NavLink>
                        <NavLink
                        to="/about"
                        className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-400" : "text-zinc-200"} border-b text-zinc-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  hover:text-green-400 lg:p-0`
                                    }
                        >
                            AboutUs
                        </NavLink>                        
                        <NavLink
                        to="/services"
                        className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-400" : "text-zinc-200"} border-b text-zinc-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  hover:text-green-400 lg:p-0`
                                    }
                        >
                            OurServices
                        </NavLink>                        
                        <NavLink
                        to="/ourWork"
                        className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-400" : "text-zinc-200"} border-b text-zinc-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  hover:text-green-400 lg:p-0`
                                    }
                        >
                            OurWork
                        </NavLink>
                    </li>
                </ul>
                <div className='md:hidden z-10' onClick={handleClick}>
                    {nav ? <IoMdClose size={40} color='white'/> : <TbMenuDeep size={40} color='white'/>}
                </div>
                <ul
                className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}>
                
        <li className=''>
                        <NavLink
                        to="/"
                        className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-400" : "text-green-400"} border-b border-green-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-400 lg:p-0`
                                    }
                        >
                            Home
                        </NavLink>
                        <NavLink
                        to="/about"
                        className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-zinc-200" : "text-green-400"} border-b border-gray-100 hover:bg-green-400 lg:hover:bg-transparent lg:border-0 hover:text-green-400 lg:p-0`
                                    }
                        >
                            AboutUs
                        </NavLink>                        
                        <NavLink
                        to="/services"
                        className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-zinc-200" : "text-green-400"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-400 lg:p-0`
                                    }
                        >
                            OurServices
                        </NavLink>                        
                        <NavLink
                        to="/ourWork"
                        className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-zinc-200" : "text-green-400"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-400 lg:p-0`
                                    }
                        >
                            OurWork
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='contact hidden md:block'>
            <Link 
            to="/contactUs">
                <button className='border-2 border-zinc-200 text-zinc-200 px-5 py-2 uppercase font-cabi hover:bg-zinc-200 hover:text-zinc-900 transition-ease duration-300'>Contact Us</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Header