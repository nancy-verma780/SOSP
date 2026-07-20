import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Open Source Program | SOSP",
  description:
    "Student Open Source Program - Empowering students through open source contributions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}