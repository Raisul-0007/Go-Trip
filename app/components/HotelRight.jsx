import Image from 'next/image'
import React from 'react'
const HotelRight = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/4">
            <Image src="/hotelOne.png" alt='One' height="250" width="250"/>
        </div>
        <div className="w-2/4 px-5">
            <h4 className='font-jost text-sm font-bold w-75'>Great Northern Hotel, a Tribute Portfolio Hotel, London</h4>
            <p className='font-jost text-sm py-3 text-[#697488]'>Westminster Borough, London <span className='text-[#3554D1] px-3'>Show on map</span> 2 km to city center</p>
            <div className="py-3">
            <h5 className='font-jost text-[18px] font-bold'>King Room</h5>
            <p className='font-jost text-sm text-[#697488]'>1 extra-large double bed</p>
            </div>
            <div className="">
                <h6 className='font-jost text-sm font-bold text-[#008009]'>Free cancellation</h6>
                <p className='font-jost text-sm text-[#008009]'>You can cancel later, so lock in this great price today.</p>
            </div>
        </div>
        <div className="w-1/4">
            <div className="flex gap-4 items-center">
                <div className="">
                    <h5 className='font-jost text-[15px] font-bold'>Exceptional</h5>
                    <p className='font-jost text-sm text-[#697488]'>3,014 reviews</p>
                </div>
                <div className="font-jost text-sm w-9 h-9 rounded-md flex justify-center items-center text-white bg-[#3554D1]">4.8</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HotelRight
