import type { Metadata } from "next";
import "../sass/style.scss";

export const metadata: Metadata = {
  title: "Mykhailo Moskalenko - Frontend Developer",
  description: "Portfolio of Mykhailo Moskalenko, a frontend developer specializing in React, TypeScript, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon/32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/180.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
