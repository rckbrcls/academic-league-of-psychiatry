"use client";

import { useTheme } from "@/context/ThemeContext";
import React from "react";

interface IProps {
  width?: number;
  height?: number;
  className?: string;
  shape?: "circle" | "star";
}

export const SVG = ({
  width = 500,
  height = 500,
  className,
  shape,
}: IProps) => {
  const { theme } = useTheme();
  const color = theme == "dark" ? "#1758AF" : "#67cafd";

  return (
    <>
      {shape == "circle" ? (
        <svg
          className={className}
          width={width}
          height={height}
          viewBox="0 0 1080 1080"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Oval"
            fill={color}
            fill-rule="evenodd"
            stroke="none"
            d="M 1064.577271 540.55719 C 1064.577271 257.479675 829.621399 28 539.788635 28 C 249.955872 28 15 257.479675 15 540.55719 C 15 823.634644 249.955872 1053.114258 539.788635 1053.114258 C 829.621399 1053.114258 1064.577271 823.634644 1064.577271 540.55719 Z"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width={width}
          height={height}
          viewBox="0 0 1080 1080"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Star"
              fill={color}
              fill-rule="evenodd"
              stroke="none"
              d="M 540 15 L 373.362885 310.643677 L 40.695328 377.766052 L 270.375488 627.606323 L 231.412735 964.733948 L 540 823.5 L 848.58728 964.733948 L 809.624512 627.606323 L 1039.304688 377.766052 L 706.637146 310.643677 Z"
            />
            <path
              id="Star-copy"
              fill={color}
              fill-rule="evenodd"
              stroke="none"
              d="M 540 1065 L 373.362885 769.356323 L 40.695328 702.233948 L 270.375458 452.393677 L 231.412735 115.266052 L 540 256.5 L 848.58728 115.266052 L 809.624512 452.393677 L 1039.304688 702.233948 L 706.637146 769.356323 Z"
            />
          </g>
        </svg>
      )}
    </>
  );
};
