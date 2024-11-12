import { Moon, Sun } from "lucide-react";
import React from "react";

export const Header = () => {
  return (
    <div className="flex w-full items-center justify-between fixed h-20 inset-x-0 top-0 z-10 bg-base-100 border-b-2 border-base-200">
      <div className="flex items-center gap-2">
        <a className="btn btn-ghost text-xl">Liga</a>
      </div>
      <div className="flex items-center gap-2">
        <a className="btn">A+</a>
        <a className="btn">A-</a>
        <a className="btn">
          <Moon />
        </a>
        <a className="btn">
          <Sun />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <a className="btn">Quem Somos?</a>
        <a className="btn">Missão</a>
        <a className="btn">Membros</a>
        <a className="btn">Reuniões</a>
      </div>
    </div>
  );
};
