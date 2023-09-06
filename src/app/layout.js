import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "redux-toolkit",
  description: "general guideline for redxu-toolkit",
};

export default function RootLayout({ children }) {
  console.log(children,'children');
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
