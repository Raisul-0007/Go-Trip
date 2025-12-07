"use client"
import  {Button}  from 'flowbite-react';
import { useState } from 'react'
import  {CiSearch} from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
const HotelLeft = () => {
  const [colorOne, setColorOne] = useState(false)
  const [colorTwo, setColorTwo] = useState(false)
  const [colorThree, setColorThree] = useState(false)
  const [colorFour, setColorFour] = useState(false)
  const [colorFive, setColorFive] = useState(false)
  const [colorSix, setColorSix] = useState(false)
  const [colorSeven, setColorSeven] = useState(false)
  const [colorEight, setColorEight] = useState(false)
  const [colorNine, setColorNine] = useState(false)
  const [colorTen, setColorTen] = useState(false)
  const [colorEleven, setColorEleven] = useState(false)
  const [colorTwelve, setColorTwelve] = useState(false)
  const [colorThirteen, setColorThirteen] = useState(false)
  const [colorFourteen, setColorFourteen] = useState(false)
  const [colorFifteen, setColorFifteen] = useState(false)
  const [colorSixteen, setColorSixteen] = useState(false)

  
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("Where are you going?");
  const Location = ["London", "New Work", "Paris", "Madrid", "Santorini"];

  return (
    <div className=''>
      <div className="py-5 bg-[#F5F5F5] px-5">
        <h5 className='font-jost text-lg font-bold'>Search Hotel</h5>
        <div className=" w-72 px-4 pt-4 bg-white">
         <div className="">
          Location
          </div> 
      <button
        onClick={() => setOpen(!open)}
        className="w-full pb-3 pt-1.5  rounded-lg bg-white flex justify-between"
      >
        {selected}
      </button>

      {open && (
        <div className="absolute w-72 mt-2 bg-white  rounded-lg shadow p-2 z-20">
          <div className="flex items-center gap-2 border px-3 py-2 rounded-lg mb-2">
            <CiSearch size={20} />
            <input
              className="w-full outline-none"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="max-h-40 overflow-y-auto">
            {Location
              .filter((e) => e.toLowerCase().includes(search.toLowerCase()))
              .map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelected(item);
                    setOpen(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
          <Button className='w-full py-7.5 cursor-pointer bg-[#3554D1]'>Search</Button>
      </div>
      <div className="py-10">
        <form action="">
          <label className='font-jost text-[18px] font-bold'  htmlFor="">
            Search by property name
          </label>
          <div className="relative">
            <input className=' border w-full py-3 pl-10 my-5' type="`text`" placeholder='e.g. Best Western'/>
            <div className="absolute top-8 left-2 text-3xl">
              <IoMdSearch/>
            </div>
          </div>
        </form>
      </div>
      <div className="">
        <h3 className='font-jost text-lg font-bold pb-2'>Deals</h3>
          <div className="flex gap-5 py-1">
            <input onChange={()=>setColorOne(!colorOne)} type="checkbox" />
          <p className={`font-jost text-sm ${colorOne ? "text-[#3554D1]": ""}`}>Free cancellation </p>
          </div>
          <div className="flex gap-5 py-1">
            <input  onChange={()=>setColorTwo(!colorTwo)} type="checkbox" />
            <p className={`font-jost text-sm ${colorTwo ? "text-[#3554D1]": ""}`}>Reserve now, pay at stay  </p>
          </div>
          <div className="flex gap-5 py-1">
            <input onChange={()=>setColorThree(!colorThree)} type="checkbox" />
            <p className={`font-jost text-sm ${colorThree ? "text-[#3554D1]": ""}`}>Properties with special offers</p>
          </div>
      </div>
      <div className="py-20">
        <h3 className='font-jost text-lg font-bold pb-2'>Popular Filters</h3>
          <div className="flex gap-5 py-1">
            <input onChange={()=>setColorFour(!colorFour)} type="checkbox" />
          <p className={`font-jost text-sm ${colorFour ? "text-[#3554D1]": ""}`}>Breakfast Included</p>
          </div>
          <div className="flex gap-5 py-1">
            <input  onChange={()=>setColorFive(!colorFive)} type="checkbox" />
            <p className={`font-jost text-sm ${colorFive ? "text-[#3554D1]": ""}`}>Romantic</p>
          </div>
          <div className="flex gap-5 py-1">
            <input onChange={()=>setColorSix(!colorSix)} type="checkbox" />
            <p className={`font-jost text-sm ${colorSix ? "text-[#3554D1]": ""}`}>Airport Transfer</p>
          </div>
          <div className="flex gap-5 py-1">
            <input  onChange={()=>setColorSeven(!colorSeven)} type="checkbox" />
            <p className={`font-jost text-sm ${colorSeven ? "text-[#3554D1]": ""}`}>WiFi Included </p>
          </div>
          <div className="flex gap-5 py-1">
            <input onChange={()=>setColorEight(!colorEight)} type="checkbox" />
            <p className={`font-jost text-sm ${colorEight ? "text-[#3554D1]": ""}`}>5 Star</p>
          </div>
      </div>
      <div className="">
        <h3 className='font-jost text-lg font-bold pb-2'>Style</h3>
          <div className="flex gap-5 py-1">
            <input onChange={()=>setColorNine(!colorNine)} type="checkbox" />
          <p className={`font-jost text-sm ${colorNine ? "text-[#3554D1]": ""}`}>Budget</p>
          </div>
          <div className="flex gap-5 py-1">
            <input  onChange={()=>setColorTen(!colorTen)} type="checkbox" />
            <p className={`font-jost text-sm ${colorTen ? "text-[#3554D1]": ""}`}>Mid-range</p>
          </div>
          <div className="flex gap-5 py-1">
            <input onChange={()=>setColorEleven(!colorEleven)} type="checkbox" />
            <p className={`font-jost text-sm ${colorEleven ? "text-[#3554D1]": ""}`}>Luxury</p>
          </div>
          <div className="flex gap-5 py-1">
            <input  onChange={()=>setColorTwelve(!colorTwelve)} type="checkbox" />
            <p className={`font-jost text-sm ${colorTwelve ? "text-[#3554D1]": ""}`}>Family-friendly</p>
          </div>
          <div className="flex gap-5 py-1">
            <input onChange={()=>setColorThirteen(!colorThirteen)} type="checkbox" />
            <p className={`font-jost text-sm ${colorThirteen ? "text-[#3554D1]": ""}`}>Business</p>
          </div>
      </div>
    </div>
  )
}

export default HotelLeft
