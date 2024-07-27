import { useEffect, useState } from "react";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
import { IPost } from "../types/post";
import Search from "../components/Search";
import { useSearch } from "../hooks/useSearch";
import { getPosts, postPost } from "../hooks/usePosts";

export default function PostsPage() {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [search, setSearch] = useState<string>('')
  const searchedPosts = useSearch(posts, search)

  const createPost = (newPost: IPost) => {
    const newPosts = [...posts, newPost]
    newPosts.forEach((post, index) => (post.order = index + 1));
    postPost(newPost)
  }

  useEffect(() => {
    async function fetchPosts() {
      const data = await getPosts();
      setPosts(data);
    }
    const intervalId = setInterval(fetchPosts, 2000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <>
      <h1>Posts Page</h1>
      <CreatePostForm createPost={createPost} />
      <Search search={search} setSearch={setSearch}/>
      <PostsList posts={searchedPosts} search={search}/>
    </>
  );
}
