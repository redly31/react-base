import { IPost } from "../types/post";
import Post from "./Post";
import { sortPostsByOrder } from "../helpers/sortPostsByOrder";
import { useDrag } from "../hooks/useDrag";

interface PostsListProps {
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

export default function PostsList({ posts, setPosts }: PostsListProps) {
  const deletePost = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id));
  };
  const { dragOverHandler, dragStartHandler, dropHandler } = useDrag({posts, setPosts})

  return (
    <section className="">
      <h2>Posts ({posts.length})</h2>
      <div className="posts">
        {posts.sort(sortPostsByOrder).map((post) => (
          <Post
            key={post.id}
            post={post}
            deletePost={deletePost}
            dragStartHandler={dragStartHandler}
            dragOverHandler={dragOverHandler}
            dropHandler={dropHandler}
          />
        ))}
      </div>
    </section>
  );
}
