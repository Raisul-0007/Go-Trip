import React from 'react'
import Container from './Container';
import { MdArrowOutward } from "react-icons/md";
import Image  from 'next/image';
const Popular = () => {
  return (
    <div className='py-30'>
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
            <Image src="/newWork.jpg" alt="New Work" width={250} height={200} />
            <Image src="/london.jpg" alt="London" width={250} height={200} />
            <Image src="/barcelona.jpg" alt="Barcelona" width={250} height={200} />
            <Image src="/sydney.jpg" alt="Sydney" width={250} height={200} />
            </div>
      </Container>
    </div>
  )
}

export default Popular
