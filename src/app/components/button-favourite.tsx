import { useState } from "react";
import { IoHeartDislike } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";

interface ButtonFavouriteProps {
  id: string;
  onClick: () => void;
}

export default function ButtonFavourite({ id, onClick }: ButtonFavouriteProps) {
  const isFavourite = JSON.parse(localStorage.getItem("favouriteRecipes"));

  const initialValue = isFavourite?.some((item) => item === id) ?? false;

  const [isUserFavourite, setIsUserFavourite] = useState(initialValue);
  return (
    <div onClick={onClick}>
      {isUserFavourite ? <IoHeartSharp /> : <IoHeartDislike />}
    </div>
  );
}
