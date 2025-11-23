import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Glowing - Reveal The Beauty of Skin',
  description: 'Clean, non-toxic skincare products for everyone'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen box-border">
      <head>
        <link rel="icon" href="/header.png" />
      </head>
      <body className="w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
