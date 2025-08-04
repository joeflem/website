"use client";
import { useRef } from "react";
import CardScroller from "./CardScroller";

export default function ExperienceWrapper({
  experience,
}: {
  experience: any[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const leftPosition = ref.current?.getBoundingClientRect().left || 0;
  return (
    <div ref={ref}>
      {!experience || experience.length === 0 ? (
        <p>No experience data available.</p>
      ) : (
        <CardScroller
          experience={experience}
          leftPos={{ left: `${leftPosition}px` }}
        />
      )}
    </div>
  );
}
