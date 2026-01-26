

import Image from "next/image";

export interface RecipeCardProps {
  dish_src: string;
  dish_alt: string;
  dish_title: string;
  user_src: string;
  user_first_name: string;
  user_last_name: string;
  creating_date: string;
  pins: number;
}

export default function RecipeCard({
  dish_src,
  dish_alt,
  dish_title,
  user_src,
  user_first_name,
  user_last_name,
  creating_date,
  pins,
}: RecipeCardProps) {
  const user = `${user_first_name} ${user_last_name}`;
  

  return (
    <li className="m-1 flex flex-col gap-2 mt-2 max-w-80 rounded-sm bg-slate-900 hover:bg-slate-800 px-2 py-2 cursor-pointer">
      <div className="relative rounded-sm self-center overflow-hidden h-50 w-70">
        <Image
          className="object-cover transition-transform duration-300 easy-out hover:scale-130"
          fill
          sizes="200px"
          src={dish_src}
          alt={dish_alt}
        />
      </div>
      <p className="text-zinc-200 text-2xl">{dish_title}</p>
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
    </li>
  );
}
