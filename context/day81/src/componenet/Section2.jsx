import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Section2 = () => {
  const UserData =  useContext(UserDataContext)
  return (
    <div>Section2
      <p>{UserData}</p>
    </div>

  )
}

export default Section2