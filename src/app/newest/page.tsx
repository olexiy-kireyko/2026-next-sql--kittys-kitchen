"use client";

import { useEffect, useState } from "react";

import { loadJSON } from "@/src/lib/api";
import RecipeCard from "../components/recipe-card";

export default function Newest() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadJSON("/temporary/recipes.json").then(setRecipes);
  }, []);

  return (
    <div>
      <main className="m-4 flex flex-col items-center">
        <div>Newest recipes</div>
        <div></div>
        <ul className=" m-auto grid grid-cols-4 gap-x-3 gap-y-5">
          {recipes.map(({ id, title, image1URL, created_date, pins }) => (
            <RecipeCard
              key={id}
              dish_src={image1URL}
              dish_alt={title}
              dish_title={title}
              user_src="/temporary/users-images/cat.png"
              user_first_name="Adam"
              user_last_name="Doe"
              creating_date={created_date}
              pins={pins}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
