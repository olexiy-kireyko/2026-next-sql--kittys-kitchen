import React from "react";
import Image from "next/image";
import LoginButton from "./login-button";
import Menu from "./menu";

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-5 py-1	px-10 border-b border-gray-300">
      <div className="flex justify-center items-center gap-2">
        <Image width={120} height={120} src="/logo.svg" alt="logo" />
        <Image width={100} height={100} src="/rolling-pin.svg" alt="pin" />
        <h1 className="text-3xl font-semibold text-white-900">
          Kitty&apos;s kitchen
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <Menu />
        <LoginButton />
      </div>
    </header>
  );
}
