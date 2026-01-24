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
    <li>
      <Image
        className=""
        width={100}
        height={100}
        src={dish_src}
        alt={dish_alt}
      />
      <p>{dish_title}</p>
      <div>
        <Image className="" width={20} height={20} src={user_src} alt={user} />
        <p>{user}</p>
        <p>{creating_date}</p>
        <div>
          <Image
            className=""
            width={16}
            height={16}
            src="/rolling-pin.svg"
            alt="pins"
          />
          <p>{pins}</p>
        </div>
      </div>
    </li>
  );
}
