import { useState } from "react";
import { IoHeartDislike } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";

interface ButtonFavouriteProps {
  isUserFavourite: boolean;
  onClick: () => void;
}

export default function ButtonFavourite({
  isUserFavourite,
  onClick,
}: ButtonFavouriteProps) {
  return (
    <div onClick={onClick}>
      {isUserFavourite ? <IoHeartSharp /> : <IoHeartDislike />}
    </div>
  );
}
