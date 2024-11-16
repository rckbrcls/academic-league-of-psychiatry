"use client";

import { useFontSize } from "@/context/FontSizeContext";
import { useTheme } from "@/context/ThemeContext";
import { ChevronLeft, Moon, Sun } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import React from "react";

export default function MeetingDetails() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Título não disponível";
  const description =
    searchParams.get("description") || "Descrição não disponível";
  const imageUrl = searchParams.get("imageUrl") || "/meeting.png";
  const extendedText =
    searchParams.get("extendedText") || "Texto extenso não disponível.";

  return (
    <div>
      <MeetingDetailsHeader />
      <div className="relative w-full h-96">
        <Image
          fill
          style={{ objectFit: "cover" }}
          priority
          src={imageUrl}
          alt="cover-meetings"
        />
      </div>

      <div className="p-10">
        <p className="text-5xl font-bold">{title}</p>
        <p className="mt-4 text-lg font-semibold">{description}</p>
        <p className="mt-4 text-lg">{extendedText}</p>
      </div>
    </div>
  );
}

export const MeetingDetailsHeader = () => {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const { increaseFontSize, decreaseFontSize } = useFontSize();

  return (
    <div className="flex p-4 w-full items-center justify-between fixed h-20 inset-x-0 top-0 z-10">
      <div className="flex items-center gap-2">
        <button onClick={() => router.back()} className="btn btn-primary">
          <ChevronLeft />
          Voltar
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
