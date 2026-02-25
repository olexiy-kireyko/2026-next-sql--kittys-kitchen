import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import { LuVideo } from "react-icons/lu";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

export interface RecipePhotoVideoBlockProps {
  videoURL: string;
  images: string[];
}

export default function RecipePhotoVideoBlock({
  videoURL,
  images,
}: RecipePhotoVideoBlockProps) {
  return (
    <section>
      {videoURL && (
        <div className="flex gap-4">
          <LuVideo />
          <ReactPlayer
            src={videoURL}
            controls={true}
            width={320}
            height={180}
          />
        </div>
      )}
      {images && (
        <div className="flex gap-4">
          <MdOutlinePhotoSizeSelectActual />
          <ul className="flex gap-4">
            {images.map((item, i) => (
              <li key={i}>
                <div className="w-8 h-8 flex items-center justify-center overflow-hidden cursor-pointer">
                  <Image width={80} height={80} src={item} alt="dish photos" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
