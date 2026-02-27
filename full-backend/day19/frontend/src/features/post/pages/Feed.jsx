import React, { useEffect } from 'react'
import '../style/feed.scss'
import Post from '../components/Post'
import { usePost } from '../hook/usePost'
const Feed = () => {

    const { Feed, handleGetFeed, loading } = usePost()

    useEffect(() => {
        handleGetFeed()
    }, [])
    if (loading || !Feed?.posts) {
        return (
            <main>
                <h1>Feed is Loading...</h1>
            </main>
        )
    }
    console.log(Feed)
    return (
        <main className='feed-page'>
            <div className="feed">
                <div className="posts">
                    {
                        Feed.posts.map(post => {
                            return (
                                <Post
                                    key={post._id}
                                    user={post.user}
                                    post={post}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default Feed