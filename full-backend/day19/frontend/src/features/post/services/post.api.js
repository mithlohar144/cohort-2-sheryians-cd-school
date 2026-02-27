import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function getFeed() {
  const response = await api.get("/api/posts/feed");
  return response.data;
}

export async function createPost(imageFile, caption) {
  const fromData = new FormData();

  fromData.append("image", imageFile);
  fromData.append("caption", caption);

  const response = await api.post("/api/posts", fromData);

  return response.data;
}


export async function likePost(postId) {
    const response = await api.post(`/api/posts/like/${postId}`)
    return response.data
}


export async function unlikePost(postId) {
    const response = await api.post(`/api/posts/unlike/${postId}`)
    return response.data
}