import React from "react";

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export interface MenuItemProps {
  current: boolean;
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function MenuItem({
  current,
  pathname,
  src,
  alt,
  children,
}: MenuItemProps) {
  return (
    <li>
      <Link
        href={pathname}
        className={clsx(
          "flex flex-col items-center h-9 mx-1 gap-3.5",
          current &&
            "after:w-full after:md-auto after:border-2 after:border-purple-200 after:rounded-sm",
        )}
      >
        <div className="flex gap-1">
          {src && (
            <Image
              className="shrink-0 self-center"
              width={18}
              height={18}
              src={src}
              alt={alt}
            />
          )}
          <span className="font-medium text-zinc-50">{children}</span>
        </div>
      </Link>
    </li>
  );
}
