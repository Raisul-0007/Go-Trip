"use client"
import  {Button}  from 'flowbite-react';
import { useState } from 'react'
const HotelLeft = () => {
  const [value, setValue] = useState()
  const Location =[
    {id:"1", value:"London"},
    {id:"2", value:"New Work"},
    {id:"3", value:"Paris"},
    {id:"4", value:"Madrid"},
    {id:"5", value:"Santorini"}
  ]
  function handleLocation(e){
    setValue(e.target.value)
  }
  return (
    <div className=''>
      <div className="py-5 bg-[#F5F5F5] px-5">
        <h5 className='font-jost text-lg font-bold'>Search Hotel</h5>
        <div className="py-5">
          <form className='bg-white py-2' action="">
            <label className='font-jost font-bold text-[15px] pl-3 ' htmlFor="">Location</label>
            <select className='w-full pl-3 py-2 font-jost text-[15px] rounded-lg text-gray-700 font-medium cursor-pointer' onChange={handleLocation} value={value}>
            {Location.map(item=>(
            <option className='' key={item.id}>
              {item.value}
            </option>
            ))}
          </select>
          </form>
        </div>
          <Button className='w-full py-7.5 cursor-pointer bg-[#3554D1]'>Search</Button>
      </div>
    </div>
  )
}

export default HotelLeft
