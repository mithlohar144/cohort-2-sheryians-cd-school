import React from 'react'
import Followtrue from './Followtrue'
import Followfalse from './Followfalse'

const Card = (props) => {
     
  
  return (
    <div className='h-95 w-70 bg-white rounded-2xl p-2 m-10 '>
      <div className='image relative'>
        
        <img  className='h-[130px] w-[100%] bg-red-300 object-cover rounded-3xl' src={props.coverImage} alt="" />
      
        <div>
          
        <img className='h-20 w-20 rounded-[50%] mt-[-40px] ml-4' src={props.profileImage} alt="" />
        
      </div>
      </div>
    <div className='flex flex-row gap-15'>
      <div className='pl-6 mt-2 flex-col'>
        <h1 className='text-xl font-bold text-black '>{props.Name}</h1>
        <p className='font-thin text-xl '>{props.title}</p>
      </div>
      <div className=' ' >
          <h1 className='mt-[-35px] mr-2'>{props.followed}</h1>
          </div>
          </div>

      <div className='flex justify-around mt-3 mb-3  bg-[#edeae9] rounded-2xl p-2'>
        <div>
          <p className='font-bold'>{props.likesCount}</p>
          <p className='font-thin'>Likes</p>
        </div>
        <div>
          <p className='font-bold '>{props.postCount}</p>
          <p className='font-thin'>Post</p>
        </div>
        <div>
          <p className='font-bold'>{props.viewCount}</p>
          <p className='font-thin'>Views</p>
        </div>
      </div>

      <div className='flex justify-center gap-20'>
        <p ><i class="fa-brands fa-instagram"></i></p>
        <p><i class="fa-solid fa-x"></i></p>
        <p><i class="fa-brands fa-facebook"></i></p>
      </div>
    </div>
  )
}

export default Card