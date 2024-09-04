import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/data'


function Testimonials() {
  return (
    <div className='mt-5'> 
      <h1 className="w-full mt-5 font-bold text-xl md:text-center">What Clients Say About Me ?</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
      </div>
    
  )
}


export default Testimonials