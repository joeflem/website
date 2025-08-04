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
import { forwardRef } from "react";
import { ExperienceItem } from "@/lib/sanity/types";

type ScrollingContainerProps = {
  $leftPosition: number;
  children: React.ReactNode;
};

const ScrollingContainer = forwardRef<HTMLDivElement, ScrollingContainerProps>(
  ({ $leftPosition, children }, ref) => (
    <div
      className={styles.scrollingContainer}
      style={{
        padding: `20px 0 20px ${$leftPosition}px`,
        width: `calc(100% - ${$leftPosition}px)`,
      }}
      ref={ref}
    >
      {children}
    </div>
  )
);

ScrollingContainer.displayName = "ScrollingContainer";

interface CardScrollerProps {
  className?: string;
  experience: ExperienceItem[];
}

const CardScroller = ({ className, experience }: CardScrollerProps) => {
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
        {experience && (
          <ScrollingCarousel>
            {experience.map((item) => (
              <Card
                key={item._key}
                title={item.company}
                subTitle={item.jobTitle}
                logo={item.logo}
                bodyText={item.description}
                footerText={`${item.from} - ${item.to}`}
              />
            ))}
          </ScrollingCarousel>
        )}
      </ScrollingContainer>
    </div>
  );
};

export default CardScroller;
