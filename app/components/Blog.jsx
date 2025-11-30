import React from 'react'
import Container from './Container'
import Image from 'next/image'
const Blog = () => {
  return (
    <div className='py-20'>
      <Container>
        <div className="py-20 text-center">
            <h4 className='font-jost text-3xl'>Get inspiration for your next trip</h4>
            <p className='font-jost text-sm text-[#697488] py-2'> Interdum et malesuada fames</p>
        </div>
        <div className="flex">
            <div className="w-1/3 px-5">
                <Image src="/europe.png" alt='europe' width="420" height="320"/>
                <h6 className='font-jost text-lg py-2'>10 European ski destinations you should visit this winter</h6>
                <p className='font-jost text-sm text-[#697488]'>April 06, 2022</p>
            </div>
            <div className="w-1/3 px-5">
                <Image src="/travel-corona.png" alt='travel' width="420" height="320" />
                <h6 className='font-jost text-lg py-2'>Booking travel during Corona: good advice in an uncertain time</h6>
                <p className='font-jost text-sm text-[#697488] '>April 06, 2022</p>
            </div>
            <div className="w-1/3 px-5">
                <Image src="/amazing-country.png" alt='amazing-country' width="420" height="320"/>
                <h6 className='font-jost text-lg py-2'>Where can I go? 5 amazing countries that are open right now</h6>
                <p className='font-jost text-sm text-[#697488] '>April 06, 2022</p>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Blog
