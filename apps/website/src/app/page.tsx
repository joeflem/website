import { PortableText } from "next-sanity";
import { GradientWelcome } from "./Components/GradientWelcome/GradientWelcome";
import { client } from "@/lib/sanity/client";
import { ExperienceType, HomepageType } from "@/lib/sanity/types";
import Experience from "./Components/Experience/Experience";
import { Intro } from "./Components/Intro/Intro";
import PageSection from "./Components/layout/pageSection";
import Chat from "./Components/Agent/Chat";

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

export const revalidate = 60; // Revalidate every 60 seconds
export const runtime = "edge";

export default async function Page() {
  const pageData = await client.fetch<HomepageType>(POSTS_QUERY);
  const experience = await client.fetch<ExperienceType>(EXPERIENCE_QUERY);
  const experienceIntro = {
    title: "Experience",
    description:
      "I’ve had the pleasure of working with some great teams at fantastic companies. Along the way, I’ve learned a lot—especially from the things that didn’t go to plan. Those lessons have shaped how I work today.",
  };

  const agentIntro = {
    title: "Learn about Me",
    description:
      "Got any questions about my background, companies I’ve worked for, or tech terms I use? Ask away! I’m here to help.",
  };
  return (
    <main>
      <Intro>
        <h1>
          👋 <GradientWelcome>{pageData.title}</GradientWelcome>
        </h1>
        <PortableText value={pageData.description} />
      </Intro>
      <PageSection intro={experienceIntro}>
        <Experience experience={experience?.items} />
      </PageSection>
      <PageSection intro={agentIntro}>
        <Chat />
      </PageSection>
    </main>
  );
}
