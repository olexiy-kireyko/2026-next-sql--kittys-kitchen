import Image from "next/image";
import clsx from "clsx";

export interface AuthorDataProps {
  user_imageURL: string;
  user: string;
  creating_date: string;
  avg_pins: number;
  isComment: boolean;
  last_edit_date?: string;
}

export default function AuthorData({
  user_imageURL,
  user,
  creating_date,
  avg_pins,
  isComment,
  last_edit_date,
}: AuthorDataProps) {
  return (
    <section className="flex flex-col">
      <div className={clsx("flex", !isComment && "justify-between")}>
        <div className="flex gap-2 align-baseline">
          <div className="relative rounded-full overflow-hidden h-5 w-5">
            <Image
              className="object-cover"
              fill
              sizes="20px"
              src={user_imageURL}
              alt={user}
            />
          </div>
          <p className="text-base">{user}</p>
        </div>
        <div className="ml-15 flex gap-1">
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <Image
              className="rotate-50"
              width={32}
              height={32}
              src="/rolling-pin.svg"
              alt="pins"
            />
          </div>
          <p className={clsx(isComment ? "text-xl" : "text-2xl")}>{avg_pins}</p>
        </div>
      </div>
      <div className="flex gap-6 text-gray-400 italic text-sm">
        <p>Created: {creating_date}</p>
        {last_edit_date && <p>Edited: {last_edit_date}</p>}
      </div>
    </section>
  );
}
