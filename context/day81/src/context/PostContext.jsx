import React, { useContext } from 'react'
export const PostDataContext = useContext();
const PostContext = (props) => {
  return (
    <PostDataContext.Provider value={"This is post context"}>
        {props.children}
    </PostDataContext.Provider>
  )
}

export default PostContext