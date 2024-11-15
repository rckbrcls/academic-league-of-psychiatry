"use client";

import { useFontSize } from "@/context/FontSizeContext";
import { useTheme } from "@/context/ThemeContext";
import { ChevronLeft, Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

export default function MeetingDetails() {
  return (
    <div>
      <MeetingDetailsHeader />
      <div className="relative w-full h-96">
        <Image
          fill
          style={{ objectFit: "cover" }}
          priority
          src={"/meeting.png"}
          alt="cover-meetings"
        />
      </div>

      <div className="p-10">
        <p className="text-5xl font-bold">Reunião sobre algo</p>
        <p className=" mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          arcu neque. In felis nunc, aliquam et neque quis, tempus eleifend
          lorem. Nunc porta finibus dolor, ut ullamcorper ex feugiat in.
          Suspendisse id vehicula dui. Vivamus maximus ex neque. Phasellus
          scelerisque tempus massa, luctus rutrum tortor aliquet quis. In in
          tortor arcu. Nunc ut neque eu mauris tempor molestie sit amet vitae
          urna. Pellentesque vel quam gravida augue hendrerit consequat at ac
          lectus. Sed pulvinar risus vitae dapibus interdum. Integer eget
          rhoncus libero. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Pellentesque sit amet augue
          feugiat, suscipit est nec, mattis sem. Nunc felis massa, vestibulum
          vitae nunc bibendum
        </p>
        <p className=" mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          arcu neque. In felis nunc, aliquam et neque quis, tempus eleifend
          lorem. Nunc porta finibus dolor, ut ullamcorper ex feugiat in.
          Suspendisse id vehicula dui. Vivamus maximus ex neque. Phasellus
          scelerisque tempus massa, luctus rutrum tortor aliquet quis. In in
          tortor arcu. Nunc ut neque eu mauris tempor molestie sit amet vitae
          urna. Pellentesque vel quam gravida augue hendrerit consequat at ac
          lectus. Sed pulvinar risus vitae dapibus interdum. Integer eget
          rhoncus libero. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Pellentesque sit amet augue
          feugiat, suscipit est nec, mattis sem. Nunc felis massa, vestibulum
          vitae nunc bibendum
        </p>
        <p className=" mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          arcu neque. In felis nunc, aliquam et neque quis, tempus eleifend
          lorem. Nunc porta finibus dolor, ut ullamcorper ex feugiat in.
          Suspendisse id vehicula dui. Vivamus maximus ex neque. Phasellus
          scelerisque tempus massa, luctus rutrum tortor aliquet quis. In in
          tortor arcu. Nunc ut neque eu mauris tempor molestie sit amet vitae
          urna. Pellentesque vel quam gravida augue hendrerit consequat at ac
          lectus. Sed pulvinar risus vitae dapibus interdum. Integer eget
          rhoncus libero. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Pellentesque sit amet augue
          feugiat, suscipit est nec, mattis sem. Nunc felis massa, vestibulum
          vitae nunc bibendum
        </p>
      </div>
    </div>
  );
}

export const MeetingDetailsHeader = () => {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const { increaseFontSize, decreaseFontSize } = useFontSize();

  return (
    <div className="flex p-4 w-full items-center justify-between fixed h-20 inset-x-0 top-0 z-10 ">
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
