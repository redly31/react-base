import { IPost } from "../types/post";

interface PostProps {
  post: IPost;
  removePost: (id: string) => void;
}

export default function Post({
  post,
  removePost,
}: PostProps) {
  return (
    <article
      key={post.id}
      className="post"
    >
      <h3 className="post__title">{post.title}</h3>
      <p className="post__body">{post.body}</p>
      <button
        className="post__delete__button"
        onClick={() => removePost(post.id)}
      >
        Delete Post
      </button>
    </article>
  );
}
