export const experimental_ppr = true;
import { PortableText } from "next-sanity";
import { GradientWelcome } from "./components/GradientWelcome/GradientWelcome";
import { client } from "@/lib/sanity/client";
import { ExperienceType, HomepageType } from "@/lib/sanity/types";
import Experience from "./components/Experience/Experience";
import { Intro } from "./components/Intro/Intro";
import PageSection from "./components/layout/pageSection";
import Chat from "./components/AI/Agent";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { EXPERIENCE_QUERY, POSTS_QUERY } from "@/lib/sanity/queries";

export const revalidate = 60; // Revalidate every 60 seconds
export const runtime = "edge";

async function IntroContent() {
  const pageData = await client.fetch<HomepageType>(POSTS_QUERY);
  return (
    <Intro>
      <h1>
        👋 <GradientWelcome>{pageData.title}</GradientWelcome>
      </h1>
      <PortableText value={pageData.description} />
    </Intro>
  );
}

async function ExperienceIntro(): Promise<React.ReactElement> {
  const pageData = await client.fetch<HomepageType>(POSTS_QUERY);
  console.log("Experience Intro Data:", pageData);
  return <PortableText value={pageData.experienceIntro} />;
}

async function AgentIntro(): Promise<React.ReactElement> {
  const pageData = await client.fetch<HomepageType>(POSTS_QUERY);
  return <PortableText value={pageData.agentIntro} />;
}

async function ExperienceContent() {
  const experience = await client.fetch<ExperienceType>(EXPERIENCE_QUERY);
  return <Experience experience={experience?.items} />;
}

export default async function Page() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <IntroContent />
      </Suspense>
      <PageSection intro={<ExperienceIntro />}>
        <ExperienceIntro />
        <Suspense fallback={<Loader />}>
          <ExperienceContent />
        </Suspense>
      </PageSection>
      <PageSection intro={<AgentIntro />}>
        <Chat />
      </PageSection>
    </main>
  );
}
