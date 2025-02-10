import React from 'react'
import Search from './Search'

function Hero() {
  return (
        <div className='fixed top-20 left-0 flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]'>
            <h2 className='text-lg font-bold'>Your Ultimate Solution For Car Rentals</h2>
            <h2 className='text-[60px] font-bold'>Find Your Dream Car</h2>
            <Search/>
        </div>
  )
}

export default Hero
