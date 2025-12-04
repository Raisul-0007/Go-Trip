"use client"
import { useState, useEffect} from 'react'
import Logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowDropdown } from "react-icons/io";
const Navber = () => {
  const [scroll,setScroll] = useState(false)
  useEffect(()=>{
    const handleScroll =()=>{
      setScroll(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])
  return (
    <div className={`flex justify-between py-5 transition-all ease-in-out duration-300 fixed w-full top-0 left-0 z-1000 ${scroll? 'bg-[#051036] shadow-md py-3' : 'bg-transparent'}`}>
        <div className="flex gap-5 items-center">
        <div className="">
            <Image src={Logo} alt="logo" />
        </div>
        <div className="">
            <ul className='flex gap-5'>
                <li className='text-sm font-bold flex gap-2 items-center text-[#ffffff]'>Home <IoMdArrowDropdown/></li>
                <li className='text-sm font-bold flex gap-2 items-center text-[#ffffff]'>Categories <IoMdArrowDropdown /></li>
                <li className='text-sm font-bold text-[#ffffff]'>Destination</li>
                <li className='text-sm font-bold flex gap-2 items-center text-[#ffffff]'>Blog <IoMdArrowDropdown /></li>
                <li className='text-sm font-bold flex gap-2 items-center text-[#ffffff]'>Pages <IoMdArrowDropdown /></li>
                <li className='text-sm font-bold flex gap-2 items-center text-[#ffffff]'>Contact</li>
            </ul>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex gap-5 items-center">
            <h5 className='text-sm flex gap-2 items-center text-[#ffffff]'>USD <IoMdArrowDropdown /></h5>
            <div className="h-4 w-px bg-gray-200"></div>
            <div className="">
                <p className='text-sm flex gap-2 items-center text-[#ffffff]'>United Kingdom <IoMdArrowDropdown /></p>
            </div>
        </div>
        <div className="flex gap-5">
            <Link className='text-sm border border-[#FFFFFF] px-3 py-3 bg-[#FFFFFF] text-[#051036] rounded-sm ' href="#">Become An Expert</Link>
            <Link className='text-sm border border-[#FFFFFF] px-3 py-3 hover:bg-[#FFFFFF] hover:text-[#051036] rounded-sm text-[#ffffff]' href="#">Sign In / Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Navber
