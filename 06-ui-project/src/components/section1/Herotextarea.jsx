import React from 'react'
import Textareaarrow from './Textareaarrow'

const Herotextarea = () => {
  return (
    <div className="textarea w-[28%] flex flex-col justify-between">
        
        <div className="text">
            <h1 className='text-5xl leading-[1.2] mb-8 font-bold'>Prospective <span className='bg-gray-300 rounded-[20px]' >customer</span> segmentation</h1>
            <p className='text-gray-500 text-2xl'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
        </div>

        <Textareaarrow />

    </div>
  )
}

export default Herotextarea
