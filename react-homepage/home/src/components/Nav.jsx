import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo_name'>
        <h1>Horizan Courts</h1>
      </div>

      <div className='nav_btn'>
        <p>About us</p>
        <p>Service</p>
        <p>Coaches</p>
        <p>Event</p>
        <p>Contacts</p>
      </div>

      <div className='book_btn'>
        <button>
          Book Now
          <i className="ri-arrow-right-up-long-line "></i>
        </button>
        
      </div>
    </div>
  )
}

export default Nav