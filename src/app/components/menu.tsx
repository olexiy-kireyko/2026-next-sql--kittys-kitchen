"use client";

import React from "react";
import Image from "next/image";

import MenuItem from "@/src/app/components/menu-item";
import { usePathname, useRouter } from "next/navigation";

// export interface SidebarProps {}
export type MenuProps = Record<never, never>;

export default function Menu({}: MenuProps) {
  const pathname = usePathname();

  return (
    <ul className="flex gap-3">
      <div className="flex items-center"></div>
      <MenuItem
        current={pathname === "/"}
        pathname="/"
        src="/home.svg"
        alt="home"
      >
        Home
      </MenuItem>
      <MenuItem
        current={pathname === "/popular"}
        pathname="/popular"
        src=""
        alt=""
      >
        Popular
      </MenuItem>
      <MenuItem
        current={pathname === "/newest"}
        pathname="/newest"
        src=""
        alt=""
      >
        Newest
      </MenuItem>
      <MenuItem
        current={pathname === "/recipes/new"}
        pathname="/recipes/new"
        src=""
        alt=""
      >
        Add new recipe
      </MenuItem>
      <MenuItem
        current={pathname === "/recipes/own"}
        pathname="/recipes/own"
        src=""
        alt=""
      >
        Own recipes
      </MenuItem>
      <MenuItem
        current={pathname === "/recipes/favourite"}
        pathname="/recipes/favourite"
        src=""
        alt=""
      >
        Your favourite recipes
      </MenuItem>
      <MenuItem
        current={pathname === "/user"}
        pathname="/user"
        src="/user.svg"
        alt="user"
      >
        Profile
      </MenuItem>
    </ul>
  );
}
