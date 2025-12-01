import React from 'react'
import Container from './Container'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='py-20'>
      <Container className="flex items-start">
        <div className="w-1/5">
        <h6 className='font-jost text-16px'>Contact Us</h6>
        <div className="py-8">
            <p className='font-jost text-sm text-[#051036]'>Toll Free Customer Care</p>
            <h5 className='font-jost text-18px text-[#3554D1]'>+(1) 123 456 7890</h5>
        </div>
        <div className="">
            <p className='font-jost text-sm text-[#051036]'>Need live support?</p>
            <h5 className='font-jost text-18px text-[#3554D1]'>hi@gotrip.com</h5>
        </div>
        </div>
        <div className="w-1/5">
        <h5 className='font-jost text-16px pb-8'>Company</h5>
        <ul>
            <li className='font-jost text-md text-[#051036] pb-2'>About Us</li>
            <li className='font-jost text-md text-[#051036] py-2'>Careers</li>
            <li className='font-jost text-md text-[#051036] py-2'>Blog</li>
            <li className='font-jost text-md text-[#051036] py-2'>Press</li>
            <li className='font-jost text-md text-[#051036] py-2'>Gift Cards</li>
            <li className='font-jost text-md text-[#051036] py-2'>Magazine</li>
        </ul>
        </div>
        <div className="w-1/5">
            <h5 className='font-jost text-16px pb-8'>Support</h5>
             <ul>
            <li className='font-jost text-md text-[#051036] pb-2'>Contact</li>
            <li className='font-jost text-md text-[#051036] py-2'>Legal Notice</li>
            <li className='font-jost text-md text-[#051036] py-2'>Privacy Policy</li>
            <li className='font-jost text-md text-[#051036] py-2'>Terms and Conditions</li>
            <li className='font-jost text-md text-[#051036] py-2'>Sitemap</li>        </ul>
        </div>
        <div className="w-1/5">
            <h5 className='font-jost text-16px pb-8'>Other Services</h5>
             <ul>
            <li className='font-jost text-md text-[#051036] py-2'>Car hire</li>
            <li className='font-jost text-md text-[#051036] py-2'>Activity Finder</li>
            <li className='font-jost text-md text-[#051036] py-2'>Tour List</li>
            <li className='font-jost text-md text-[#051036] py-2'>Flight finder</li>
            <li className='font-jost text-md text-[#051036] py-2'>Cruise Ticket</li>
            <li className='font-jost text-md text-[#051036] py-2'>Holiday Rental</li>
            <li className='font-jost text-md text-[#051036] py-2'>Travel Agents</li>
        </ul>
        </div>
        <div className="w-1/5">
        <h5 className='font-jost text-16px pb-8 '>Mobile</h5>
        <div className="h-15 w-48 border-2 flex justify-center items-center gap-2 my-4 border-[#DDDDDD]">
          <div className="text-3xl">
            < FaApple/>
          </div>
          <div className="">
            <p className='font-jost text-15px text-[#697488]'>Download on the</p>
            <h6 className='font-jost text-16px'>Apple Store</h6>
            </div>  
        </div>
        <div className="h-15 w-48 border-2 flex justify-center items-center gap-2 my-4  border-[#DDDDDD]">
          <div className="text-3xl">
            < FaGooglePlay/>
          </div>
          <div className="">
            <p className='font-jost text-15px text-[#697488]'>Get in on</p>
            <h6 className='font-jost text-16px'>Google Play</h6>
            </div>  
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
