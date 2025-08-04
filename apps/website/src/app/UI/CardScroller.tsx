"use client";

import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useRef, useState, useEffect } from "react";
import styles from "./CardScroller.module.css";
import Card from "./Card/Card";
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
  leftPos?: string;
}

const CardScroller = ({
  className,
  experience,
  leftPos,
}: CardScrollerProps) => {
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

  const fromDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const toDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div
      className={className}
      ref={ref}
      style={{
        paddingBottom: scrollingContainerRef?.current
          ? scrollingContainerRef?.current?.getBoundingClientRect().height
          : 300,
        left: leftPos ? leftPos : `${leftPosition}px`,
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
                active={!item.to}
                footerText={`${fromDate(item.from)} - ${
                  item.to ? toDate(item.to) : "Present"
                }`}
              />
            ))}
          </ScrollingCarousel>
        )}
      </ScrollingContainer>
    </div>
  );
};

export default CardScroller;
