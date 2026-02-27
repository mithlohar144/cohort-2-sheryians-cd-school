import { createContext, useState } from "react";


export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [loading, setloading] = useState(false)
  const [Post, setPost] = useState(null)
  const [Feed, setFeed] = useState()


  return (
    <PostContext.Provider value={{loading, setloading, Post, setPost, Feed, setFeed}}>
      {children}
    </PostContext.Provider>
  )
}