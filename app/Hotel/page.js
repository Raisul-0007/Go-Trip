import React from 'react'
import HotelLeft from '../components/HotelLeft'
import Container from '../components/Container'
import HotelRight from '../components/HotelRight'

const Hotel = () => {
  return (
    <div className='py-[100px]'>
      <Container className='flex'>
        <div className='w-1/4'><HotelLeft/></div>
        <div className='w-3/4'><HotelRight/></div>
      </Container>
    </div>
  )
}

export default Hotel
