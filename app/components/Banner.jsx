import React from 'react'
import Container from './Container';
import Link  from 'next/link';

const Banner = () => {
  return (
    <div className='bg-[url(@/public/banner.jpg)] lg:h-[850px] bg-cover  justify-center '>
      <Container className="relative">
        <div className="absolute left-[280px] top-[350px] text-center">
        <h1 className='font-jost text-6xl text-[#FFFFFF] font-bold'>Find Next Place To Visit</h1>
        <p className='font-jost text-[16px] py-10 text-[#FFFFFF]'>Discover amzaing places at exclusive deals</p>
        <div className="">
          <ul className='flex gap-10 justify-center'>
            <li className="font-jost text-[15px] text-white transition-all duration-300 hover:scale-110 hover:text-[#3554D1]"><Link  href="/Hotel">Hotel</Link></li>
            <li className="font-jost text-[15px] text-white transition-all duration-300 hover:scale-110 hover:text-[#3554D1]"><Link  href="">Tour</Link></li>
            <li className="font-jost text-[15px] text-white transition-all duration-300 hover:scale-110 hover:text-[#3554D1]"><Link  href="">Activity</Link></li>
            <li className="font-jost text-[15px] text-white transition-all duration-300 hover:scale-110 hover:text-[#3554D1]"><Link  href="">Holiday Rentals</Link></li>
            <li className="font-jost text-[15px] text-white transition-all duration-300 hover:scale-110 hover:text-[#3554D1]"><Link  href="">Car</Link></li>
            <li className="font-jost text-[15px] text-white transition-all duration-300 hover:scale-110 hover:text-[#3554D1]"><Link  href="">Cruise</Link></li>
            <li className="font-jost text-[15px] text-white transition-all duration-300 hover:scale-110 hover:text-[#3554D1]"><Link  href="">Flights</Link></li>
          </ul>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Banner
