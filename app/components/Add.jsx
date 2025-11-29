import React from 'react'
import Container from './Container'
import  Image  from 'next/image';
import Link from 'next/link';

const Add = () => {
  return (
    <div className='py-20'>
      <Container className="flex justify-between">
        <div className="relative">
            <Image src="/trip.jpg" alt='trip' width={630} height={500} />
            <div className="">
                <h3 className='absolute top-15 left-15 w-90 font-jost text-5xl font-bold text-white leading-15'>Things to do on your trip</h3>
                <Link href="#" className='absolute top-45 left-15 px-8 py-4 mt-5 rounded-md hover:text-white bg-white hover:bg-[#3554D1] ease-in-out duration-300'>
                  Experiences
                </Link>
            </div> 
        </div>
        <div className="relative">
            <Image src="/discount.jpg" alt='discount' width={630} height={500} />
            <div className="">
                <p className='absolute top-15 left-15 font-jost text-md text-white'>Enjoy Summer Deals</p>
                <h3 className='absolute top-25 left-15 font-jost text-5xl font-bold text-white leading-15'>Up to 70% Discount!</h3>
                <Link href="#" className='absolute top-42 left-15 px-8 py-4 mt-5 rounded-md hover:text-white bg-white hover:bg-[#3554D1] ease-in-out duration-300'>
                  Experiences
                </Link>
            </div> 
        </div>
      </Container>
    </div>
  )
}

export default Add
