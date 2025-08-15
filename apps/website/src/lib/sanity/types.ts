import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock, SanityDocument } from "next-sanity";

export type HomepageType = {
  _key: string;
  title: boolean;
  description: PortableTextBlock[];
  experienceIntro: PortableTextBlock[];
  agentIntro: PortableTextBlock[];
};

export type AgentContextType = {
  _key: string;
  title: boolean;
  description: string;
};

export type ExperienceItemType = {
  _key: string;
  logo: SanityImageSource;
  company: string;
  jobTitle: string;
  description: PortableTextBlock[];
  from: string;
  to: string;
};

export type ExperienceType = SanityDocument &
  {
    _id: string;
    items: ExperienceItemType[];
  }[];
