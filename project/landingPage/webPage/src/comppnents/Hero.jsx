import React from 'react'

const Hero = () => {
  return (
    <div className="bg-[url('https://class2-react-task.vercel.app/assets/firstImg-U4aVvTaR.png')] h-200 bg-no-repeat">
        <div className='text-white pt-60 text-7xl'>
            <p className='px-30 mb-10'>DESGIN</p>
            <p className='px-45'>& FREEDOM</p>
        </div>
        <div className='text-white'>
            <p className='pl-45 pt-2 font-light'>Explore Independent Style by Embracing <br /> Uniqueness with Our exclusive Designer Apparel</p>
        </div>
        <div className='flex gap-4 pl-45 mt-2'>
            <div className='text-white h-7 w-7 rounded-4xl text-center border-2 bg-[#3D3D3D]'><i class="fa-solid fa-arrow-down"></i></div>
            <button className='text-white'>Learn More</button>
        </div>
    </div>
  )
}

export default Hero