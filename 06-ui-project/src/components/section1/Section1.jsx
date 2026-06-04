import React from 'react'
import Navbar from './navbar'
import Herosection from './Herosection'


const Section1 = () => {
  return (
    <div className="section1 h-screen w-full flex flex-col bg-[#efefef]" >

      <Navbar />

      <Herosection />
      
    </div>
  )
}

export default Section1
