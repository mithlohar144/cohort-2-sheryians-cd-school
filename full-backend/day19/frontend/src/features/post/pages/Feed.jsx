import React, { useEffect } from 'react'
import '../style/feed.scss'
import Post from '../components/Post'
import { usePost } from '../hook/usePost'
import Nav from '../../shared/components/Nav'
const Feed = () => {

    const { Feed, handleGetFeed, loading , handleLike, handleUnLike} = usePost()

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
            <Nav />
            <div className="feed">
                <div className="posts">
                    {
                        Feed.posts.map(post => {
                            return (
                                <Post
                                    key={post._id}
                                    user={post.user}
                                    post={post}
                                    loading={loading}
                                    handleLike={handleLike}
                                    handleUnLike={handleUnLike}
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