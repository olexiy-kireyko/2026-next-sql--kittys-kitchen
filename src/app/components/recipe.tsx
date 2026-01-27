import Image from "next/image";

export interface RecipeProps {
  id: string;
  dish_src: string;
  dish_alt: string;
  dish_title: string;
  user_src: string;
  user_first_name: string;
  user_last_name: string;
  creating_date: string;
  pins: number;
  dish_description: string;
  dish_ingredients:;
}

export default function Recipe({
  id,
  dish_src,
  dish_alt,
  dish_title,
  user_src,
  user_first_name,
  user_last_name,
  creating_date,
  pins,
  dish_description,
  dish_ingredients
}: RecipeProps) {
  const user = `${user_first_name} ${user_last_name}`;

  return (
    <div className="m-1 flex flex-col gap-2 mt-2 max-w-360 rounded-sm bg-slate-900  px-2 py-2">
      <div className="flex gap-2">
        <div>
          <p className="text-zinc-200 text-2xl">
            {id}
            {dish_title}
          </p>
          <ul>
            {}
          </ul>
        </div>
        <div className="relative rounded-sm self-center overflow-hidden h-50 w-70">
          <Image
            className="object-cover"
            fill
            sizes="200px"
            src={dish_src}
            alt={dish_alt}
          />
        </div>
      </div>

      <div className="flex gap-2 self-center max-w-1/1 align-middle">
        <div className="relative rounded-full overflow-hidden h-5 w-5">
          <Image
            className="object-cover"
            fill
            sizes="20px"
            src={user_src}
            alt={user}
          />
        </div>
        <p className="text-base">{user}</p>
        <p className="text-gray-400 italic">{creating_date}</p>
        <div className="ml-15 flex gap-1">
          <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
            <Image
              className="rotate-50"
              width={24}
              height={12}
              src="/rolling-pin.svg"
              alt="pins"
            />
          </div>
          <p>{pins}</p>
        </div>
      </div>
      <div>
        <p>{dish_description}</p>
      </div>
    </div>
  );
}
