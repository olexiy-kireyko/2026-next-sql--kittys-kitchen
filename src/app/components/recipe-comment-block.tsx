import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaRegComments } from "react-icons/fa";
import { CommentProps } from "./recipe";
import Comment from "./recipe-comment";
import Button from "./button";

export interface CommentsBlockProps {
  comments: CommentProps[];
}

export default function RecipeCommentsBlock({ comments }: CommentsBlockProps) {
  const [isShowComments, setIsShowComments] = useState(false);
  const text = `comments (${comments.length}) ${isShowComments ? ":" : ""}`;
  function commentsHandler() {
    setIsShowComments(!isShowComments);
  }
  return (
    <section className="flex flex-col gap-3 mt-6">
      <div className="flex gap-3 items-center ">
        <FaRegComments />
        <Button disabled={comments.length > 0} onClick={commentsHandler}>
          {text}
        </Button>
      </div>
      {isShowComments && (
        <ul className="flex flex-col gap-3">
          {comments.map((item) => (
            <li key={item.id}>
              <Comment
                id={item.id}
                author_first_name={item.author_first_name}
                author_last_name={item.author_last_name}
                author_imageURL={item.author_imageURL}
                comment_creating_date={item.comment_creating_date}
                comment_description={item.comment_description}
                pins={item.pins}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
