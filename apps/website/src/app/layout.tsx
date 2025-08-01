import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutWrapper from "./styling/LayoutWrapper";
import Header from "@/app/UI/Header";
import BaseContext from "@/context/BaseContext";
import Footer from "./UI/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joe Fleming",
  description: "Front End Developer",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseContext>
          <LayoutWrapper>
            <Header />
            {children}
            <Footer />
          </LayoutWrapper>
        </BaseContext>
      </body>
    </html>
  );
};
export default RootLayout;
