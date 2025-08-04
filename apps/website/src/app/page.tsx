import Image from "next/image";
import { PortableText } from "next-sanity";
import { GradientWelcome } from "./UI/GradientWelcome";
import CardScroller from "./UI/Experience";
import { client } from "@/lib/sanity/client";
import { ExperienceType, HomepageType } from "@/lib/sanity/types";
import Experience from "./UI/Experience";

const POSTS_QUERY = `*[
  _type == "homepage"
]|order(publishedAt desc)[0]{_id, title, description}`;

const EXPERIENCE_QUERY = `*[_type == "experience"][0]{
  "items": items[] | order(from desc){
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
  const pageData = await client.fetch<HomepageType>(
    POSTS_QUERY,
    {},
    { cache: "no-store" }
  );
  const experience = await client.fetch<ExperienceType>(
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
      <Experience experience={experience?.items} />
    </main>
  );
}
