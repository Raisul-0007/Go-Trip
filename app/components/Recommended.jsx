"use client"
import { useEffect, useRef, useState } from 'react'
import Container from './Container';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Image from 'next/image';
const Recommended = () => {
    let cateRef = useRef()
     let [show, setShow] = useState(false)
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (!cateRef.current) return;            
            if (cateRef.current.contains(e.target)) {
                setShow((prev) => !prev);
            } else {
                setShow(false);
            }
        })
    }, [])
  return (
    <div>
      <Container>
        <div className="flex justify-between">
            <div className="">
            <h3 className='font-jost text-3xl font-bold '>Recommended</h3>
        <p className='font-jost lg:text-md text-sm text-[#697488] py-2'>Interdum et malesuada fames ac ante ipsum</p>
        </div>
        <div className="w-50 relative">
                <div ref={cateRef} className="flex justify-center items-center lg:gap-2 cursor-pointer w-30 py-2 border border-">
                    <h3 className='font-dm lg:text-lg font-bold text-sm'>Hotel</h3>
                    {show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </div>
                { show && (
                <div className="bg-white lg:py-2 py-1 absolute left-0 lg:top-15 top-[30px] lg:w-[70%] z-999">
                    <ul className='cursor-pointer'>
                        <li className='font-dm lg:text-[16px] text-[13px] flex items-center justify-between  duration-300 ease-in-out lg:pl-[20px] lg:hover:pl-[30px] lg:py-2 py-1 border-b-[1px] border-[#D8D8D8]'>
                            Animation    
                        </li >
                        <li className='font-dm lg:text-[16px] text-[13px] flex items-center justify-between  duration-300 ease-in-out lg:pl-[20px] lg:hover:pl-[30px] lg:py-3 py-1 border-b-[1px] border-[#D8D8D8]'>
                            Design
                        </li>
                        <li className='font-dm lg:text-[16px] text-[13px] flex items-center justify-between  duration-300 ease-in-out lg:pl-[20px] lg:hover:pl-[30px] lg:py-3 py-1 border-b-[1px] border-[#D8D8D8]'>
                            Illustration
                        </li>
                        <li className='font-dm lg:text-[16px] text-[13px] flex items-center justify-between  duration-300 ease-in-out lg:pl-[20px] lg:hover:pl-[30px] lg:py-3 py-1 border-b-[1px] border-[#D8D8D8]'>
                             Lifestyle
                        </li>
                        <li className='font-dm lg:text-[16px] text-[13px] flex items-center justify-between  duration-300 ease-in-out lg:pl-[20px] lg:hover:pl-[30px] lg:py-3 py-1 border-b-[1px] border-[#D8D8D8]'>
                            Business 
                        </li>
                    </ul>
                </div>
                )
                }
        </div>
        </div>
        <div className="flex py-10">
            <div className="w-1/4">
                <Image src="/montcalm.png" width="300" height="300" alt="montcalm"/> 
                <h4 className='font-jost text-lg pr-10'>The Montcalm At Brewery London City</h4>
                <p className='font-jost text-sm text-[#697488] '>Westminster Borough, London</p>
                <div className="py-3 flex gap-3 items-center">
                    <div className="font-jost text-sm w-7.5 h-7.5 flex justify-center items-center text-white bg-[#3554D1]">
                        4.0
                    </div>
                    <h5 className='font-jost text-md'>Exceptional</h5>
                    <p className='font-jost text-sm text-[#697488]'>3,014 reviews</p>
                </div>
                <h4 className='font-jost text-md '>Starting from <span className='text-[#3554D1]'>US$72</span></h4>
            </div>
            <div className="w-1/4">
                <Image src="/staycity.png" width="300" height="300" alt="staycity"/>
                <h4 className='font-jost text-lg pr-10'>Staycity Aparthotels Deptford Bridge Station</h4>
                <p className='font-jost text-sm'>Ciutat Vella, Barcelona</p>
                 <div className="py-3 flex gap-3 items-center">
                    <div className="font-jost text-sm w-7.5 h-7.5 flex justify-center items-center text-white bg-[#3554D1]">
                        4.0
                    </div>
                    <h5 className='font-jost text-md'>Exceptional</h5>
                    <p className='font-jost text-sm text-[#697488]'>3,014 reviews</p>
                </div>
                <h4 className='font-jost text-md '>Starting from <span className='text-[#3554D1]'>US$72</span></h4>
            </div>
            <div className="w-1/4">
                <Image src="/westin.png" width="300" height="300" alt="westin"/>
                <h4 className='font-jost text-lg pr-10'>The Westin New York at Times Square</h4>
                <p className='font-jost text-sm'>Manhattan, New York</p>
                 <div className="py-3 flex gap-3 items-center">
                    <div className="font-jost text-sm w-7.5 h-7.5 flex justify-center items-center text-white bg-[#3554D1]">
                        4.0
                    </div>
                    <h5 className='font-jost text-md'>Exceptional</h5>
                    <p className='font-jost text-sm text-[#697488]'>3,014 reviews</p>
                </div>
                <h4 className='font-jost text-md '>Starting from <span className='text-[#3554D1]'>US$72</span></h4>
            </div>  
            <div className="w-1/4">
                <Image src="/hilton.png" width="300" height="300" alt="hilton"/>
                <h4 className='font-jost text-lg'>DoubleTree by Hilton Hotel New York Times Square West</h4>
                <p className='font-jost text-sm'>Vaticano Prati, Rome</p>
                 <div className="py-3 flex gap-3 items-center">
                    <div className="font-jost text-sm w-7.5 h-7.5 flex justify-center items-center text-white bg-[#3554D1]">
                        4.0
                    </div>
                    <h5 className='font-jost text-md'>Exceptional</h5>
                    <p className='font-jost text-sm text-[#697488]'>3,014 reviews</p>
                </div>
                <h4 className='font-jost text-md '>Starting from <span className='text-[#3554D1]'>US$72</span></h4>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Recommended
