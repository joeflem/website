import Image from "next/image";
import { GradientWelcome } from "./UI/GradientWelcome";
import Link from "next/link";
import CardScroller from "./UI/CardScroller";

export default function Page() {
  return (
    <main>
      <GradientWelcome>👋 Hello, I&apos;m Joe.</GradientWelcome>
      <p>
        I’m a frontend engineer with close to a decade in the industry, cutting
        my teeth on WordPress sites before diving headfirst into modern
        JavaScript frameworks. For the past 6–7 years, my world has revolved
        around TypeScript, Vue, React, and Next.js—building everything from
        marketing pages to complex, scalable web apps.
      </p>

      <p>
        I’ve worn a few hats along the way: Web Developer, Frontend Engineer,
        Tech Lead, and now Head of Engineering. I’ve led small, focused teams
        and worked closely with stakeholders to turn product ideas into real,
        valuable software. I’ve shipped on platforms like Vercel, Amplify, and
        DigitalOcean, and I’ve got a loose but growing handle on the broader AWS
        suite.
      </p>

      <p>
        What drives me isn’t just the tech (though I love a clean component or a
        well-architected system). It’s solving interesting problems, making
        sense of complexity, and communicating clearly - whether it’s in code, a
        product spec, or a 1:1 with a teammate. Frameworks come and go, but that
        mindset is what makes an engineer great.
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
        <Link href="https://github.com/joeflem" target="_blank">
          GitHub
        </Link>
        .
      </p>
      <CardScroller />
    </main>
  );
}
