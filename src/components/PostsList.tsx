import { IPost } from "../types/post";
import Post from "./Post";
import { deletePost } from "../hooks/usePosts";
import { useCallback } from "react";

interface PostsListProps {
  posts: IPost[];
}

export default function PostsList({ posts }: PostsListProps) {
  const removePost = useCallback( async (id: string) => {
    await deletePost(id)
  }, [posts])
  
  if(posts.length === 0) {
    return ( <h2>Loading...</h2> )
  }

  return (
    <section className="">
      <h2>Posts ({posts.length})</h2>
      <div className="posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            removePost={removePost}
          />
        ))}
      </div>
    </section>
  );
}
