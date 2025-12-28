import React from 'react'
import Button from '../ButtonComponet/Button'

const Advantage = () => {
  return (
    <div>
        <h1 className='h-40 w-full text-white flex items-center pl-20 text-4xl font-extralight'>OUR ADVANTAGES</h1>
        <div className='flex justify-around p-4 '>
            <div className="bg-[url('https://class2-react-task.vercel.app/assets/fourth-DFEX2JlF.png')] h-124 w-[680px] bg-amber-300 rounded-2xl  bg-center"></div>
            <div className='flex flex-col gap-4 text-[#c7c9c0]'>
                <div className=" h-60 w-[680px]  rounded-2xl p-7 bg-[#3D3D3D]  ">
                    <h1 className='text-2xl pl-5  uppercase font-extralight'>Independent Designers</h1>
                    <div className='flex pt-13 justify-around'>
                        <p className='font-thin'> The platform supports emerging and established designers, <br /> offering a range of fashion-forward garments that reflect creativity and innovation.</p>
                        <div className='pt-8'><Button text='Explore'/></div>
                    </div>
                </div>
                <div className="h-60 w-[680px]  rounded-2xl p-7 bg-[#3D3D3D]">
                    <h1 className='text-2xl pl-5  uppercase font-extralight'>Exclusivity & Uniquity</h1>
                    <div className='flex pt-13 justify-around'>
                        <p className='font-thin'>The platform provides one-of-a-kind items, each with its own story <br /> and clients can experience unique fashion pieces.</p>
                        <div className='pt-8'><Button text='Explore'/></div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-around'>
            <div className='flex flex-col gap-4 text-[#c7c9c0]'>
                <div className=" h-60 w-[680px]  rounded-2xl p-7 bg-[#3D3D3D] ">
                    <h1 className='text-2xl pl-5  uppercase font-extralight'>Exclusivity & Uniquity</h1>
                    <div className='flex pt-13 justify-around'>
                        <p className='font-thin'>The platform provides one-of-a-kind items, each with its own story <br /> and clients can experience unique fashion pieces.</p>
                        <div className='pt-8'><Button text='Explore'/></div>
                    </div>
                </div>
                <div className="h-60 w-[680px]  rounded-2xl p-7 bg-[#3D3D3D]">
                    <h1 className='text-2xl pl-5  uppercase font-extralight'>Exclusivity & Uniquity</h1>
                    <div className='flex pt-13 justify-around'>
                        <p className='font-thin'>The platform provides one-of-a-kind items, each with its own story <br /> and clients can experience unique fashion pieces.</p>
                        <div className='pt-8'><Button text='Explore'/></div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('https://class2-react-task.vercel.app/assets/second-7aocmNz5.png')] h-124 w-[680px] bg-amber-300 rounded-2xl"></div>
        </div>
    </div>
  )
}

export default Advantage