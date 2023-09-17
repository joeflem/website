import Image from "next/image";
import { GradientWelcome } from "./UI/GradientWelcome";
import Link from "next/link";
import CardScroller from "./UI/CardScroller";

export default function Page() {
  return (
    <main>
      <GradientWelcome>
        <figure>
          <Image
            alt="Joe Fleming"
            src="https://avatars.githubusercontent.com/u/45002285?v=4"
            width="60"
            height="60"
          />
        </figure>
        👋 Hello, I&apos;m Joe.
      </GradientWelcome>
      <p>
        I&apos;m a lead frontend developer with a passion for building great
        teams, great products, and great user experiences.
      </p>
      <p>
        I&apos;ve spent the last 8 years building a variety of web applications
        ranging from small Wordpress projects to large scale React applications.
        I&apos;ve worked with a variety of technologies including React, Vue,
        Next.js, Angular, Laravel and Wordpress.
      </p>
      <p>
        I&apos;m currently working as a Tech Lead at{" "}
        <Link href="https://huler.io" target="_blank">
          Huler
        </Link>{" "}
        where our team is building and maintaining a set of React applications
        for our SaaS product.
      </p>
      <p>
        You can find me on{" "}
        <Link
          href="https://www.linkedin.com/in/joe-c-4646a7107/"
          target="_blank"
        >
          LinkedIn
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/ciavuc" target="_blank">
          GitHub
        </Link>
        .
      </p>
      <CardScroller />
    </main>
  );
}
