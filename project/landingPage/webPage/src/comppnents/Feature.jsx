import React from 'react'
import Button from '../ButtonComponet/Button'

const Feature = () => {
  return (

    <div>
    <div className='flex justify-around pt-10'>
        <div className='text-white h-60 w-80 bg-[#3D3D3D] rounded-xl p-7'>
            <h1 className='text-yellow-200 text-xl mb-3'>INDEPENDENCY</h1>
            <p className='font-extralight text-xl'>Explore the creativity of independent design from around the globe.</p>
            <Button  text='Learn More'/>
        </div>
         <div className='text-white h-60 w-80 bg-[#3D3D3D] rounded-xl p-7'>
            <h1 className='text-yellow-200 text-xl mb-3'>UNIQUITY</h1>
            <p className='font-extralight text-xl'>Discover the charm of unique pieces that stand out effortlessly.</p>
            <Button  text='Learn More'/>
        </div>
         <div className='text-white h-60 w-80 bg-[#3D3D3D] rounded-xl p-7'>
            <h1 className='text-yellow-200 text-xl mb-3'>QUALITY</h1>
            <p className='font-extralight text-xl'>Experience unparalleled craftsmanship and attention to detail.</p>
            <Button  text='Learn More'/>
        </div>
         <div className='text-white h-60 w-80 bg-[#3D3D3D] rounded-xl p-7'>
            <h1 className='text-yellow-200 text-xl mb-3'>SUSTAUNABILITY</h1>
            <p className='font-extralight text-xl'>Embrace eco-conscious fashion choices without compromising on style.</p>
            <Button  text='Learn More'/>
        </div>
    </div>

    <div className='flex justify-around text-white bg-black h-40 w-full items-center'>
        <div>
            <p className='font-thin'>DESIGNERS</p>
            <h1 className='text-5xl'>1500+</h1>
        </div>
        <div>
            <p className='font-thin'>CLIENTS</p>
            <h1 className='text-5xl'>500+</h1>
        </div>
        <div>
            <p className='font-thin'>MASTERPIECES</p>
            <h1 className='text-5xl'>20K+</h1>
        </div>
        <div>
            <p className='font-thin'>EVENTS</p>
            <h1 className='text-5xl'>50+</h1>
        </div>
    </div>
    </div>
  )
}

export default Feature