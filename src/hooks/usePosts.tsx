import axios from "axios";
import { IPost } from "../types/post";

export async function getPosts() {
    const response = await axios.get(
      "http://localhost:3000/posts"
    );
    return response.data
}

export async function postPost(post: IPost) {
  await axios.post('http://localhost:3000/posts', post);
}

export async function deletePost(id: string) {
  const postId = String(id)
  await axios.delete(`http://localhost:3000/posts/${postId}`);
}
