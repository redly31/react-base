import { IPost } from "../types/post";
import Post from "./Post";
import { deletePost } from "../hooks/usePosts";

interface PostsListProps {
  posts: IPost[];
  search: string;
}

export default function PostsList({ posts, search }: PostsListProps) {
  const removePost = async (id: string) => {
    await deletePost(id)
  };

  if(search !== '') {
    return ( <h2>Posts not found</h2> )
  } if(search === '' && posts.length === 0) {
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
