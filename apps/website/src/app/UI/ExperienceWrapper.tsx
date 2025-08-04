"use client";
import CardScroller from "./CardScroller";

export default function ExperienceWrapper({
  experience,
}: {
  experience: any[];
}) {
  if (!experience || experience.length === 0) return null;
  return <CardScroller experience={experience} />;
}
