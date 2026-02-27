import { getFeed } from "../services/post.api";
import { useContext } from "react";
import { PostContext } from "../post.context.jsx";
export const usePost = () => {
    const context = useContext(PostContext)

    const {loading, setloading, Post, setPost, Feed, setFeed} = context

    const handleGetFeed = async() => {
        setloading(true)
        const data = await getFeed()
        setFeed(data)
        setloading(false)
    }
    return { loading, Feed, Post, handleGetFeed}
}