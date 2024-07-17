import { IPost } from "../types/post";
import Post from "./Post";
import { sortPostsByOrder } from "../helpers/sortPostsByOrder";
import { useDrag } from "../hooks/useDrag";
import { deletePost } from "../hooks/usePosts";

interface PostsListProps {
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

export default function PostsList({ posts, setPosts }: PostsListProps) {
  const removePost = async (id: string) => {
    await deletePost(id)
  };
  const { dragOverHandler, dragStartHandler, dropHandler } = useDrag({posts, setPosts})

  if(posts.length === 0) {
    return ( <h2>Loading...</h2> )
  }

  return (
    <section className="">
      <h2>Posts ({posts.length})</h2>
      <div className="posts">
        {posts.sort(sortPostsByOrder).map((post) => (
          <Post
            key={post.id}
            post={post}
            removePost={removePost}
            dragStartHandler={dragStartHandler}
            dragOverHandler={dragOverHandler}
            dropHandler={dropHandler}
          />
        ))}
      </div>
    </section>
  );
}
