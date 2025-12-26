import React from 'react'

const Footer = () => {
  return (
    <div className='footer_parent'>
      <div className='first_card card'>
        <button className='about_btn'>About Horizan</button>
        <p>
          Professional hard courts with tournament-grade lighting & climate control - play in perfect conditions, in any season.
        </p>
        <button className='explore_btn'>Explore More <i class="fa-solid fa-arrow-down" id='arrow'> </i></button>
      </div>

      <div className='second_card card'>
        <button className='second_card_btn'>Training Programs</button>
        <div className='second_card_buttom'>
          <p>Programs designed for <br />all ages and abilities.</p>
          <button className='second_arrow_card'><i class="fa-solid fa-arrow-down" id='arrow'></i></button>
        </div>
      </div>

      <div className='thrid_card card'>
        <div className='thrid_top'>
         <button className='thrid_card_btn ' >Training Programs</button>
         <p>Hourly Court Rental</p>
        </div>  
        <div className="third_buttom">
          <p>Step into a space built for <br />players - to grow, compete, <br />and thrive. </p>
          <div className='buttom_arrow'>
            <i class="fa-solid fa-arrow-down" id='left_arrow'></i>
            <i class="fa-solid fa-arrow-down" id='right_arrow'></i>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer