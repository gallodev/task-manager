import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import '../app/css/global.css'

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Task manager",
  description: "The project is the simple tasklist to create,update and delete tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
