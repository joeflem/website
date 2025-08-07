import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";
import LayoutWrapper from "./styling/LayoutWrapper";
import Header from "@/app/components/Header/Header";
import BaseContextProvider from "@/context/BaseContext";
import Footer from "./components/Footer/Footer";
import "./styling/globals.css";
import ThemeInjector from "./styling/ThemeInjector";

import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Joe Fleming",
  description: "Front End Developer",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <BaseContextProvider>
          <Analytics />
          <SpeedInsights />
          <ThemeInjector />
          <LayoutWrapper>
            <Header />
            {children}
            <Footer />
          </LayoutWrapper>
        </BaseContextProvider>
        <Image
          src="img/jf.svg"
          alt="Joe Fleming"
          className="peekLogo"
          width={100}
          height={100}
        />
      </body>
    </html>
  );
};
export default RootLayout;
