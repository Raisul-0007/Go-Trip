import React from 'react'
import Banner from './components/Banner'
import Popular from './components/Popular'
import Add from './components/Add'
import Recommended from './components/Recommended'

const Root = () => {
  return (
    <div>
      <Banner/>
      <Popular/>
      <Add/>
      <Recommended/>
    </div>
  )
}

export default Root
