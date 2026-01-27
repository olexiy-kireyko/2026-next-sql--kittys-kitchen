import Image from "next/image";
import Recipe from "../../components/recipe";

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
  //get Recipe props logic
  return (
    <div className="flex justify-center mt-3">
      <Recipe
        id={params.id}
        dish_src="/temporary/recipes-images/qwer6.jpg"
        dish_alt="dish"
        dish_title={`Stub dish_title - ${params.id} page`}
        user_src="/temporary/users-images/cat.png"
        user_first_name="Stub Adam"
        user_last_name="Doe"
        creating_date="Stub1/1/2000"
        pins={5}
        dish_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit suscipit enim saepe explicabo perferendis vero, ipsum assumenda natus eos! Quibusdam nihil commodi voluptate magni sed excepturi porro nam ipsa cupiditate."
      />
    </div>
  );
}
