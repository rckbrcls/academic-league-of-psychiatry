"use client";

import { useFontSize } from "@/context/FontSizeContext";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const { increaseFontSize, decreaseFontSize } = useFontSize();

  return (
    <div className="flex p-4 w-full items-center justify-between fixed h-20 inset-x-0 top-0 z-10 bg-base-100 border-b-2 border-base-200">
      <div className="flex items-center gap-2">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Liga
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={decreaseFontSize} className="btn btn-primary">
          A-
        </button>
        <button onClick={increaseFontSize} className="btn btn-primary">
          A+
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`btn ${
            theme === "dark" ? "btn-secondary" : "btn-primary"
          }`}
        >
          <Moon />
        </button>
        <button
          onClick={() => setTheme("light")}
          className={`btn ${
            theme === "light" ? "btn-secondary" : "btn-primary"
          }`}
        >
          <Sun />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className={`btn ${pathname == "/" ? "btn-primary" : "btn-ghost"}`}
        >
          Quem Somos?
        </Link>
        <Link
          href="/mission"
          className={`btn ${
            pathname == "/mission" ? "btn-primary" : "btn-ghost"
          }`}
        >
          Missão
        </Link>
        <Link
          href="/members"
          className={`btn ${
            pathname == "/members" ? "btn-primary" : "btn-ghost"
          }`}
        >
          Membros
        </Link>
        <Link
          href="/meetings"
          className={`btn ${
            pathname == "/meetings" ? "btn-primary" : "btn-ghost"
          }`}
        >
          Reuniões
        </Link>
      </div>
    </div>
  );
};
