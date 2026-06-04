import React from 'react'
import Herotextarea from './Herotextarea'
import Herocardarea from './Herocardarea'

const Herosection = () => {
  return (
    <div className="herosection flex flex-1 w-full gap-[5%] px-18 py-8">
    
      <Herotextarea />

      <Herocardarea />
      
    </div>
  )
}

export default Herosection
