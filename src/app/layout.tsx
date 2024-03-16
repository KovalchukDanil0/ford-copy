import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type FC, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { flowbiteTheme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

const title = "My First App";
const description = "My First Description";

export const metadata: Metadata = {
  metadataBase: new URL("https://kovalchukdanil0-myfirstapp.vercel.app"),
  openGraph: {
    title,
    description,
  },
  title,
  description,
};

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={twMerge(
          "bg-gray-50 text-black lg:mx-auto lg:w-3/4 dark:bg-black dark:text-white",
          inter.className,
        )}
      >
        <Flowbite theme={{ theme: flowbiteTheme }}>
          <Header />
          {children}
          <Footer />
        </Flowbite>
      </body>
    </html>
  );
};

export default RootLayout;
