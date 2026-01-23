import React, { createContext, useState } from 'react'

export const UserDataContext = createContext();

const UserContext = (props) => {

  const [UserName, setUserName] = useState('mithliesh');

  // const user = "sumit";

  return (
    <UserDataContext.Provider value={[UserName, setUserName]}>
      {props.children}
    </UserDataContext.Provider>
  )
}

export default UserContext