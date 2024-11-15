import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { FontSizeProvider } from "@/context/FontSizeContext";

export const metadata: Metadata = {
  title: "Liga Acadêmica de Psiquiatria",
  description: "Liga Acadêmica de Psiquiatria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <FontSizeProvider>{children}</FontSizeProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
