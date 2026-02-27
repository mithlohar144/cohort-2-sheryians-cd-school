import {
  getFeed,
  createPost,
  likePost,
  unlikePost,
} from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../post.context.jsx";
export const usePost = () => {
  const context = useContext(PostContext);

  const { loading, setloading, Post, setPost, Feed, setFeed } = context;

  const handleGetFeed = async () => {
    setloading(true);
    const data = await getFeed();
    setFeed(data);
    setloading(false);
  };

  const handleCreatePost = async (imageFile, caption) => {
    setloading(true);
    const data = await createPost(imageFile, caption);
    setFeed([data.Post, ...Feed]);
    setloading(false);
  };

  const handleLike = async (post) => {

        const data = await likePost(post)
        await handleGetFeed()

    }
    const handleUnLike = async (post) => {

        const data = await unlikePost(post)
        await handleGetFeed()

    }

  useEffect(() => {
    handleGetFeed();
  }, []);

  return {
    loading,
    Feed,
    Post,
    handleGetFeed,
    handleCreatePost,
    handleLike,
    handleUnLike,
  };
};
