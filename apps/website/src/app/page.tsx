import Image from "next/image";
import {
  PortableText,
  PortableTextBlock,
  type SanityDocument,
} from "next-sanity";
import { GradientWelcome } from "./UI/GradientWelcome";
import Link from "next/link";
import CardScroller from "./UI/CardScroller";
import { client } from "@/lib/sanity/client";

const POSTS_QUERY = `*[
  _type == "homepage"
]|order(publishedAt desc)[0]{_id, title, description}`;

const options = {};

type Homepage = {
  _key: string;
  title: boolean;
  description: PortableTextBlock[];
};

export default async function Page() {
  const pageData = await client.fetch<Homepage>(POSTS_QUERY, {}, options);
  return (
    <main>
      <h1>
        👋 <GradientWelcome>{pageData.title}</GradientWelcome>
      </h1>
      <PortableText value={pageData.description} />
      <h2>Experience</h2>
      <CardScroller />
    </main>
  );
}
