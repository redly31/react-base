import { useState } from "react";
import { DragEvent } from "react";
import { IPost } from "../types/post";

interface useDragProps {
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

export const useDrag = ({ posts, setPosts }: useDragProps) => {

  const [currentPost, setCurrentPost] = useState<IPost | null>(null);

  function dragStartHandler(post: IPost): void {
    setCurrentPost(post);
  }

  function dragOverHandler(e: DragEvent<HTMLElement>): void {
    e.preventDefault();
  }

  function dropHandler(e: DragEvent<HTMLElement>, post: IPost): void {
    e.preventDefault();
    setPosts(
      posts.map((p) => {
        if (p.id === post.id) {
          return { ...p, order: currentPost ? currentPost.order : p.order };
        } else if (p.id === currentPost?.id) {
          return { ...p, order: post.order };
        }
        return p;
      })
    );
  }

  return { dragStartHandler, dragOverHandler, dropHandler };
};
