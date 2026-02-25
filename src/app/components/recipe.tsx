import Image from "next/image";
import RecipeMainBlock from "./recipe-main-block";
import RecipePhotoVideoBlock from "./recipe-photo-video-block";

export interface IngredientsProps {
  ingredient_id: string;
  ingredient: string;
  amount: number;
  unit_measurement: string;
}

export interface CommentProps {
  author_first_name: string;
  author_last_name: string;
  author_imageURL: string;
  comment_creating_date: string;
  comment_description: string;
  pins: number;
}

export interface RecipeProps {
  id: string;
  title: string;
  description: string;
  main_imageURL: string;
  images: string[];
  videoURL: string;
  ingredients: IngredientsProps[];
  user_first_name: string;
  user_last_name: string;
  user_imageURL: string;
  is_user_favourite: boolean;
  creating_date: string;
  last_edit_date: string;
  comments: CommentProps[];
}

export default function Recipe({
  id,
  title,
  description,
  main_imageURL,
  images,
  videoURL,
  ingredients,
  user_first_name,
  user_last_name,
  user_imageURL,
  is_user_favourite,
  creating_date,
  last_edit_date,
  comments,
}: RecipeProps) {
  return (
    <div className="m-1 flex flex-col  mt-2 max-w-360 rounded-sm bg-slate-900  px-4 py-2">
      <RecipeMainBlock
        id={id}
        title={title}
        description={description}
        main_imageURL={main_imageURL}
        ingredients={ingredients}
        user_first_name={user_first_name}
        user_last_name={user_last_name}
        user_imageURL={user_imageURL}
        is_user_favourite={is_user_favourite}
        creating_date={creating_date}
        last_edit_date={last_edit_date}
        comments={comments}
      />
      <RecipePhotoVideoBlock videoURL={videoURL} images={images} />
      {comments && <p>comments???</p>}
    </div>
  );
}
