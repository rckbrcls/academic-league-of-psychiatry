"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface FontSizeContextProps {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextProps | undefined>(
  undefined
);

export const FontSizeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [fontSize, setFontSize] = useState<number>(() => {
    // Carrega o valor do localStorage ou define o padrão
    const savedFontSize = localStorage.getItem("fontSize");
    return savedFontSize ? parseInt(savedFontSize, 10) : 16;
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem("fontSize", fontSize.toString()); // Salva no localStorage
  }, [fontSize]);

  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 28)); // Limita para no máximo 28px
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 12)); // Limita para no mínimo 12px
  const resetFontSize = () => setFontSize(16); // Reseta para o tamanho padrão de 16px

  return (
    <FontSizeContext.Provider
      value={{ fontSize, increaseFontSize, decreaseFontSize, resetFontSize }}
    >
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = (): FontSizeContextProps => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
};
