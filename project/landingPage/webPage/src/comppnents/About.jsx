import React from 'react'

const About = () => {
  return (
    <div className='flex justify-around'>
        <div className='text-white bg-[#3D3D3D] h-120 w-[680px] p-10 rounded-2xl '>
            <p className='text-[15px]'>ABOUT</p>
            <h1 className='text-5xl uppercase pl-2 mt-7 mb-7'>Where fashion meets freedom</h1>

            <div className='flex pl-2 font-thin mt-20'>
                <p>We believe that fashion should be an expression of individuality. We encourage and originality with every item we offer, presenting customers with exclusive collections from independent designers. With a commitment to fostering community to fostering a community for creativity and innovation.</p>
                <p>believe that fashion should be an expression of individuality. We encourage and originality with every item we offer, presenting customers with exclusive collections from independent designers. With a commitment to fostering community to fostering a community for creativity and innovation.</p>
            </div>
        </div>

        <div className="bg-[url('https://class2-react-task.vercel.app/assets/third-D9GLlF4B.png')] h-120 w-[680px] bg-no-repeat bg-center rounded-2xl "></div>
    </div>
  )
}

export default About