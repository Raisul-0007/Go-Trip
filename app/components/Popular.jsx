import React from 'react'
import Container from './Container';
import { MdArrowOutward } from "react-icons/md";
import Image  from 'next/image';
import Link  from 'next/link';
const Popular = () => {
  return (
    <div className='py-20'>
      <Container>
        <div className="flex justify-between">
        <div className="">
            <h3 className='font-jost text-[30px] font-bold'>Popular Destinations</h3>
            <p className='font-jost text-sm'>These popular destinations have a lot to offer</p>
        </div>
            <div className="bg-[#3554d117] px-3 py-3 h-10 text-[#3554D1] cursor-pointer">
                <h5 className='font-jost text-sm flex items-center'>View All Destinations <MdArrowOutward /></h5>
            </div>
      </div>
      <div className="flex justify-between py-20">
            <div className="relative">
              <Link href="#">
                  <Image src="/newWork.jpg" alt="New Work" width={300} height={200} />
                </Link>
              <div className="absolute left-0 bottom-0  w-full h-full opacity-0 hover:opacity-100 ease-in-out duration-300 hover:bg-[rgba(5,16,54,0.4)]">
                <p className='font-jost text-sm text-white absolute top-10 left-6'>14 Hotel - 22 Cars - 18 Tours - 95 Activity</p>
                <h5 className='font-jost text-4xl absolute bottom-20 left-18 text-white opacity-100'>New Work</h5>
                <Link className='px-25 py-5 absolute bottom-2 left-5 rounded-md hover:text-white bg-white hover:bg-[#3554D1] ease-in-out duration-300' href="#">
                  Discover
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image src="/london.jpg" alt="London" width={300} height={200} />
            <div className="absolute left-0 bottom-0  w-full h-full opacity-0 hover:opacity-100 ease-in-out duration-300 hover:bg-[rgba(5,16,54,0.4)]">
                <p className='font-jost text-sm text-white absolute top-10 left-6'>14 Hotel - 22 Cars - 18 Tours - 95 Activity</p>
                <h5 className='font-jost text-4xl absolute bottom-20 left-23 text-white '>London</h5>
                <Link className='px-25 py-5 absolute bottom-2 left-5 rounded-md hover:text-white bg-white hover:bg-[#3554D1] ease-in-out duration-300' href="#">
                  Discover
                </Link>
              </div>
            </div>
            <div className="relative">
            <Image src="/barcelona.jpg" alt="Barcelona" width={300} height={200} />            
            <div className="absolute left-0 bottom-0  w-full h-full opacity-0 hover:opacity-100 ease-in-out duration-300 hover:bg-[rgba(5,16,54,0.4)]">
                <p className='font-jost text-sm text-white absolute top-10 left-6'>14 Hotel - 22 Cars - 18 Tours - 95 Activity</p>
                <h5 className='font-jost text-4xl absolute bottom-20 left-18 text-white '>Barcelona</h5>
                <Link className='px-25 py-5 absolute bottom-2 left-5 rounded-md hover:text-white bg-white hover:bg-[#3554D1] ease-in-out duration-300' href="#">
                  Discover
                </Link>
              </div>
            </div>
            <div className="relative">
            <Image src="/sydney.jpg" alt="Sydney" width={300} height={200} />
              <Link href="#">
              </Link>
              <div className="absolute left-0 bottom-0  w-full h-full opacity-0 hover:opacity-100 ease-in-out duration-300 hover:bg-[rgba(5,16,54,0.4)]">
                <p className='font-jost text-sm text-white absolute top-10 left-6'>14 Hotel - 22 Cars - 18 Tours - 95 Activity</p>
                <h5 className='font-jost text-4xl absolute bottom-20 left-23 text-white opacity-100'>Sydney</h5>
                <Link className='px-25 py-5 absolute bottom-2 left-5 rounded-md hover:text-white bg-white hover:bg-[#3554D1] ease-in-out duration-300' href="#">
                  Discover
                </Link>
              </div>
            </div>
            </div>
      </Container>
    </div>
  )
}

export default Popular
