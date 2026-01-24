"use client";

import React from "react";
import Button from "./button";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push("/login")}>Log in</Button>
    </>
  );
}
