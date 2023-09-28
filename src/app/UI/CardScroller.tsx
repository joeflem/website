"use client";

import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { ReactNode, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card/Card";
import somarketing from "/public/img/somarketing.png";
import healthcare21 from "/public/img/healthcare21.png";
import harrisoncarloss from "/public/img/harrisoncarloss.png";
import huler from "/public/img/huler.png";
import colourandcode from "/public/img/colourandcode.png";

interface ScrollingContainerProps {
  $leftPosition: number;
  children: ReactNode;
}

const ScrollingContainer = styled.div<ScrollingContainerProps>`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  left: 0;
  padding: 20px 0 20px ${(props) => props.$leftPosition}px;
  width: calc(100% - ${(props) => props.$leftPosition}px);
  cursor: grab;
  & > div > div > * {
    margin: 20px;
  }
  & > div > div > *:last-child {
    margin-right: 60px;
  }
`;

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
      <ScrollingContainer
        $leftPosition={leftPosition}
        ref={scrollingContainerRef}
      >
        <ScrollingCarousel>
          <Card
            title="Huler"
            subTitle="Tech Lead"
            logo={huler}
            bodyText="Leading a team of frontend engineers building and maintaining a set of React applications for our SaaS product."
            footerText="2023-Present"
            active
            linkedRight
          />
          <Card
            title="Huler"
            subTitle="Lead Frontend Developer"
            logo={huler}
            bodyText="Leading a team of frontend engineers building and maintaining a set of React applications for our SaaS product."
            footerText="2020-2023"
            linkedLeft
          />
          <Card
            title="Harrison Carloss"
            subTitle="Web Developer"
            logo={harrisoncarloss}
            bodyText="Building and maintaining a variety of Wordpress websites for clients as well as building a set of Laravel / Vue applications for internal use."
            footerText="2019-2020"
          />
          <Card
            title="Healthcare21"
            subTitle="Junior Frontend Developer"
            logo={healthcare21}
            bodyText="Maintaining a mixture of React, Angular and Wordpress websites for clients."
            footerText="2018-2019"
          />
          <Card
            title="SO Marketing"
            subTitle="Web Developer"
            logo={somarketing}
            bodyText="Building and maintaining a variety of Wordpress websites for clients. Built and maintained an 'off the shelf' E-Commerce solution."
            footerText="2016-2018"
            linkedRight
          />
          <Card
            title="SO Marketing"
            subTitle="Apprentice Developer"
            logo={somarketing}
            bodyText="Building and maintaining a variety of Wordpress websites for clients."
            footerText="2015-2016"
            linkedLeft
          />
          <Card
            title="Colour & Code"
            subTitle="Designer / Developer"
            logo={colourandcode}
            bodyText="Designed and built a variety of websites for clients."
            footerText="2015-2018"
          />
        </ScrollingCarousel>
      </ScrollingContainer>
    </div>
  );
};

const CardScroller = styled(UnstyledCardScroller)`
  margin: 0 -20px;
  opacity: 0;
  animation: fadeIn 0.5s 0.5s forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default CardScroller;
