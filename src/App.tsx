import { useCallback, useState } from "react";
import CreatePostForm from "./components/CreatePostForm";
import PostsList from "./components/PostsList";
import { IPost } from "./types/post";
import "./App.css";
import Search from "./components/Search";
import { usePosts } from "./hooks/usePosts";
import { memo } from 'react';

const initialPosts: IPost[] = [
  {
    title: "Hello World 1",
    body: "Body 1",
    id: 1720859539675,
    order: 1,
  },
  {
    title: "Hello World 2",
    body: "Body 2",
    id: 1720859541498,
    order: 2,
  },
  {
    title: "Hello World 3",
    body: "Body 3",
    id: 1720859543931,
    order: 3,
  },
];

export default function App() {

  const [posts, setPosts] = useState<IPost[]>(initialPosts);
  const [search, setSearch] = useState<string>('')
  const searchedPosts = usePosts(posts, search)
  const PostsListMemo = memo(PostsList);

  const createPost = useCallback((newPost: IPost) => {
    const newPosts = [...posts, newPost]
    newPosts.forEach((post, index) => (post.order = index + 1));
    setPosts(newPosts);
  }, [posts, setPosts])

  return (
    <>
      <h1>Posts Page</h1>
      <CreatePostForm createPost={createPost} />
      <Search search={search} setSearch={setSearch}/>
      <PostsListMemo posts={searchedPosts} setPosts={setPosts} />
    </>
  );
}
