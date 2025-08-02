"use client";

import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useRef, useState, useEffect } from "react";
import styles from "./CardScroller.module.css";
import Card from "./Card/Card";
import somarketing from "/public/img/somarketing.png";
import healthcare21 from "/public/img/healthcare21.png";
import harrisoncarloss from "/public/img/harrisoncarloss.png";
import huler from "/public/img/huler.png";
import colourandcode from "/public/img/colourandcode.png";

type ScrollingContainerProps = {
  $leftPosition: number;
  children: React.ReactNode;
};

import { forwardRef } from "react";

const ScrollingContainer = ({
  $leftPosition,
  children,
}: ScrollingContainerProps) => (
  <div
    className={styles.scrollingContainer}
    style={{
      padding: `20px 0 20px ${$leftPosition}px`,
      width: `calc(100% - ${$leftPosition}px)`,
    }}
    // @ts-ignore
    ref={null}
  >
    {children}
  </div>
);

interface UnstyledCardScrollerProps {
  className?: string;
}

const UnstyledCardScroller = ({ className }: UnstyledCardScrollerProps) => {
  const [leftPosition, setLeftPosition] = useState(300);

  const ref = useRef<HTMLDivElement>(null);
  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getLeftPosFromRef = () => {
      const element = ref.current;
      if (!element) return;
      setLeftPosition(element.getBoundingClientRect().left);
    };

    getLeftPosFromRef();
    window.addEventListener("resize", getLeftPosFromRef);
    return () => window.removeEventListener("resize", getLeftPosFromRef);
  }, []);

  return (
    <div
      className={className}
      ref={ref}
      style={{
        paddingBottom: scrollingContainerRef?.current
          ? scrollingContainerRef?.current?.getBoundingClientRect().height
          : 300,
      }}
    >
      <ScrollingContainer $leftPosition={leftPosition}>
        <ScrollingCarousel>
          {[
            <Card
              key="huler-head"
              title="Huler"
              subTitle="Head of Engineering"
              logo={huler}
              bodyText="Leading an engineering team and collaborating closely with product to build Huler — a modern, integrated digital workplace platform designed to bring clarity, connection, and simplicity to the way people work."
              footerText="2023-Present"
              active
              linkedRight
            />,
            <Card
              key="huler-techlead"
              title="Huler"
              subTitle="Tech Lead"
              logo={huler}
              bodyText="Leading a team of frontend engineers building and maintaining a set of React applications for our SaaS product."
              footerText="2023-2024"
              linkedRight
            />,
            <Card
              key="huler-leadfe"
              title="Huler"
              subTitle="Lead Frontend Developer"
              logo={huler}
              bodyText="Leading a team of frontend engineers building and maintaining a set of React applications for our SaaS product."
              footerText="2020-2023"
            />,
            <Card
              key="hc-webdev"
              title="Harrison Carloss"
              subTitle="Web Developer"
              logo={harrisoncarloss}
              bodyText="Building and maintaining a variety of Wordpress websites for clients as well as building a set of Laravel / Vue applications for internal use."
              footerText="2019-2020"
            />,
            <Card
              key="hc21-junior"
              title="Healthcare21"
              subTitle="Junior Frontend Developer"
              logo={healthcare21}
              bodyText="Maintaining a mixture of React, Angular and Wordpress websites for clients."
              footerText="2018-2019"
            />,
            <Card
              key="somarketing-webdev"
              title="SO Marketing"
              subTitle="Web Developer"
              logo={somarketing}
              bodyText="Building and maintaining a variety of Wordpress websites for clients. Built and maintained an 'off the shelf' E-Commerce solution."
              footerText="2016-2018"
              linkedRight
            />,
            <Card
              key="somarketing-apprentice"
              title="SO Marketing"
              subTitle="Apprentice Developer"
              logo={somarketing}
              bodyText="Building and maintaining a variety of Wordpress websites for clients."
              footerText="2015-2016"
            />,
            <Card
              key="colourandcode"
              title="Colour & Code"
              subTitle="Designer / Developer"
              logo={colourandcode}
              bodyText="Designed and built a variety of websites for clients."
              footerText="2015-2018"
            />,
            <figure className={styles.lastCard} key="last" />,
          ]}
        </ScrollingCarousel>
      </ScrollingContainer>
    </div>
  );
};

const CardScroller = (props: UnstyledCardScrollerProps) => (
  <UnstyledCardScroller {...props} className={styles.cardScroller} />
);

export default CardScroller;
