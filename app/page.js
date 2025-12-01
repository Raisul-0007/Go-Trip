import React from 'react'
import Banner from './components/Banner'
import Popular from './components/Popular'
import Add from './components/Add'
import Recommended from './components/Recommended'
import Icons from './components/Icons'
import Review from './components/Review'
import Blog from './components/Blog'
import Love from './components/Love'
import Sletter from './components/Sletter'

const Root = () => {
  return (
    <div>
      <Banner/>
      <Popular/>
      <Add/>
      <Recommended/>
      <Icons/>
      <Review/>
      <Blog/>
      <Love/>
    </div>
  )
}

export default Root
