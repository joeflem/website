import Image from "next/image";
import { PortableText } from "next-sanity";
import { GradientWelcome } from "./UI/GradientWelcome";
import CardScroller from "./UI/CardScroller";
import { client } from "@/lib/sanity/client";
import { Experience, Homepage } from "@/lib/sanity/types";
import ExperienceWrapper from "./UI/ExperienceWrapper";

const POSTS_QUERY = `*[
  _type == "homepage"
]|order(publishedAt desc)[0]{_id, title, description}`;

const EXPERIENCE_QUERY = `*[_type == "experience"]{
  _id,
  items[] {
    _key,
    logo,
    company,
    jobTitle,
    description,
    from,
    to
  }
}`;

export default async function Page() {
  const pageData = await client.fetch<Homepage>(
    POSTS_QUERY,
    {},
    { cache: "no-store" }
  );
  const experience = await client.fetch<Experience>(
    EXPERIENCE_QUERY,
    {},
    { cache: "no-store" }
  );
  console.log("Experience Data:", experience.items);
  return (
    <main>
      <h1>
        👋 <GradientWelcome>{pageData.title}</GradientWelcome>
      </h1>
      <PortableText value={pageData.description} />
      <h2>Experience</h2>
      <ExperienceWrapper experience={experience[0]?.items} />
    </main>
  );
}
