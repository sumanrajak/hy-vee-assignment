import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suman Assignment",
  description: "next app for name /gender /country prediction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}> 
      <body >{children}</body>
    </html>
  );
}
