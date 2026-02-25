import Image from "next/image";
import { IngredientsProps } from "./recipe";
import { CommentProps } from "./recipe";
import AuthorData from "./author-data";
import IngredientsBox from "./ingredients-box";
import ButtonFavourite from "./button-favourite";

export interface RecipeMainBlockProps {
  id: string;
  title: string;
  description: string;
  main_imageURL: string;
  ingredients: IngredientsProps[];
  user_first_name: string;
  user_last_name: string;
  user_imageURL: string;
  is_user_favourite: boolean;
  creating_date: string;
  last_edit_date: string;
  comments: CommentProps[];
}

export default function RecipeMainBlock({
  id,
  title,
  description,
  main_imageURL,
  ingredients,
  user_first_name,
  user_last_name,
  user_imageURL,
  is_user_favourite,
  creating_date,
  last_edit_date,
  comments,
}: RecipeMainBlockProps) {
  const user = `${user_first_name} ${user_last_name}`;
  const avg_pins =
    comments.reduce((acc, item) => (acc += item.pins), 0) / comments.length;

  function isUserFavouriteHandler() {}

  return (
    <section className="flex justify-between">
      <div className="flex flex-col gap-3">
        <ButtonFavourite id={id} onClick={isUserFavouriteHandler} />
        <p className="text-zinc-200 text-3xl">
          {id}
          {title}
        </p>
        <IngredientsBox ingredients={ingredients} />
        <p>{description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <AuthorData
          user_imageURL={user_imageURL}
          user={user}
          creating_date={creating_date}
          last_edit_date={last_edit_date}
          avg_pins={avg_pins}
        />
        <div className="relative rounded-sm overflow-hidden h-100 w-140">
          <Image
            className="object-cover"
            fill
            sizes="200px"
            src={main_imageURL}
            alt={title}
          />
        </div>
      </div>
    </section>
  );
}
