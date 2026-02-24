"use client";

import Image from "next/image";
import Recipe from "../../components/recipe";
import Button from "../../components/button";

import * as React from "react";

export interface PageProps {
  params: { id: string };
}

// export interface RecipeCardProps {
//   id: string;
//   dish_src: string;
//   dish_alt: string;
//   dish_title: string;
//   user_src: string;
//   user_first_name: string;
//   user_last_name: string;
//   creating_date: string;
//   pins: number;
// }

export default function Page({ params }: PageProps) {
  //will add - get Recipe props logic
  const { id } = React.use(params);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <Recipe
          id={id}
          title={`Stub dish_title - ${id} page`}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit suscipit enim saepe explicabo perferendis vero, ipsum assumenda natus eos! Quibusdam nihil commodi voluptate magni sed excepturi porro nam ipsa cupiditate."
          main_imageURL="/temporary/recipes-images/qwer6.jpg"
          images={[
            "/temporary/users-images/cat.png",
            "/temporary/users-images/cat.png",
          ]}
          videoURL="https://www.youtube.com/watch?v=7poalLftnGM"
          ingredients={[
            {
              ingredient_id: "zxc1",
              ingredient: "sugar",
              amount: 40,
              unit_measurement: "kg",
            },
            {
              ingredient_id: "zxc2",
              ingredient: "salt",
              amount: 50,
              unit_measurement: "kg",
            },
            {
              ingredient_id: "zxc3",
              ingredient: "flour",
              amount: 60,
              unit_measurement: "kg",
            },
            {
              ingredient_id: "zxc4",
              ingredient: "honey",
              amount: 100,
              unit_measurement: "kg",
            },
          ]}
          user_first_name="Stub Adam"
          user_last_name="Doe"
          user_imageURL="/temporary/users-images/cat.png"
          is_user_favourite={true}
          creating_date="Stub1/1/2000"
          last_edit_date="Stub1/1/2002"
          comments={[
            {
              author_first_name: "Stub Adam",
              author_last_name: "Doe",
              author_imageURL: "/temporary/users-images/cat.png",
              comment_creating_date: "Stub1/1/2003",
              comment_description: "Very delicious dish!!!!!!!!",
              pins: 3,
            },
            {
              author_first_name: "Stub Adam",
              author_last_name: "Doe",
              author_imageURL: "/temporary/users-images/cat.png",
              comment_creating_date: "Stub1/1/2003",
              comment_description:
                "Very delicioudddddddddddd dddddddd rrrrrrrrrrvs dish!!!!!!!!",
              pins: 4,
            },
          ]}
        />

        <div className="self-end">
          <Button onClick={() => console.log("add comment")}>
            Add new comment
          </Button>
        </div>
      </div>
    </div>
  );
}
