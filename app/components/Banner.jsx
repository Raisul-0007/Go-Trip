import React from 'react'
import { Image } from 'next/image';
import Container from './Container';

const Banner = () => {
  return (
    <div className='bg-[url(@/public/banner.jpg)] lg:h-[850px] bg-cover  justify-center '>
      <Container className="relative">
        <div className="absolute left-0 top-90 lg:px-70 text-center">
        <h1 className='font-jost text-6xl text-[#FFFFFF] font-bold'>Find Next Place To Visit</h1>
        <p className='font-jost text-[16px] py-10 text-[#FFFFFF]'>Discover amzaing places at exclusive deals</p>
        <div className="">
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Banner
