import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutWrapper from "./styling/LayoutWrapper";
import Header from "@/app/UI/Header";
import BaseContextProvider from "@/context/BaseContext";
import Footer from "./UI/Footer";
import "./styling/globals.css";
import ThemeInjector from "./styling/ThemeInjector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joe Fleming",
  description: "Front End Developer",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseContextProvider>
          <ThemeInjector />
          <LayoutWrapper>
            <Header />
            {children}
            <Footer />
          </LayoutWrapper>
        </BaseContextProvider>
      </body>
    </html>
  );
};
export default RootLayout;
