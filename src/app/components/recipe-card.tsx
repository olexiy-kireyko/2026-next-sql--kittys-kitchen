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
    <li className="m-1 flex flex-col gap-2 mt-2 max-w-80 rounded-sm bg-blue-950 px-1 py-2">
      <Image
        className="rounded-sm self-center"
        width={300}
        height={300}
        src={dish_src}
        alt={dish_alt}
      />
      <p className="text-zinc-200 text-2xl">{dish_title}</p>
      <div className="flex gap-2 max-w-1/1 align-middle">
        <Image className="" width={20} height={20} src={user_src} alt={user} />
        <p className="text-base">{user}</p>
        <p className="text-gray-400 italic">{creating_date}</p>
        <div className="ml-15 flex gap-2">
          <Image
            className="rotate-45 shrink-0"
            width={20}
            height={8}
            src="/rolling-pin.svg"
            alt="pins"
          />
          <p>{pins}</p>
        </div>
      </div>
    </li>
  );
}
