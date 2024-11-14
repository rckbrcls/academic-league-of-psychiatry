"use client";

import { useFontSize } from "@/context/FontSizeContext";
import { useTheme } from "@/context/ThemeContext";
import { ChevronLeft, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function MeetingDetails() {
  return (
    <div className="">
      <MeetingDetailsHeader />
    </div>
  );
}

export const MeetingDetailsHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const { increaseFontSize, decreaseFontSize } = useFontSize();

  return (
    <div className="flex p-4 w-full items-center justify-between fixed h-20 inset-x-0 top-0 z-10 ">
      <div className="flex items-center gap-2">
        <button onClick={() => router.back()} className="btn btn-primary">
          <ChevronLeft />
          Volltar
        </button>
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
    </div>
  );
};
