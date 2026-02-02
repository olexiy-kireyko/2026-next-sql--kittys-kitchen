import Image from "next/image";
import Ingredient from "./ingredient";
import AuthorData from "./author-data";
import { useState } from "react";
import IngredientsBox from "./ingredients-box";

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
  const user = `${user_first_name} ${user_last_name}`;
  const avg_pins =
    comments.reduce((acc, item) => (acc += item.pins), 0) / comments.length;

  return (
    <div className="m-1 flex flex-col  mt-2 max-w-360 rounded-sm bg-slate-900  px-4 py-2">
      <section className="flex justify-between">
        <div className="flex flex-col gap-3">
          {is_user_favourite ? (
            <p>your favourite</p>
          ) : (
            <p>not your favourite</p>
          )}
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

      <section>
        {videoURL && <p>Video???</p>}
        {images && <p>small images???</p>}
        {comments && <p>comments???</p>}
      </section>
    </div>
  );
}
