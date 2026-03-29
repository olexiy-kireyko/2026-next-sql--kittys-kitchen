import { CommentProps } from "./recipe";
import AuthorData from "./author-data";

export default function Comment({
  author_first_name,
  author_last_name,
  author_imageURL,
  comment_creating_date,
  comment_description,
  pins,
}: CommentProps) {
  //   const {
  //     author_first_name,
  //     author_last_name,
  //     author_imageURL,
  //     comment_creating_date,
  //     comment_description,
  //     pins,
  //   } = info;
  const user = `${author_first_name} ${author_last_name}`;
  return (
    <div className="rounded-4xl backdrop-grayscale-75 p-4">
      <AuthorData
        user_imageURL={author_imageURL}
        user={user}
        creating_date={comment_creating_date}
        avg_pins={pins}
        isComment={true}
      />
      <p>{comment_description}</p>
    </div>
  );
}
