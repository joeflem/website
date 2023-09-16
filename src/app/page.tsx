import Image from "next/image";
import { GradientWelcome } from "./UI/GradientWelcome";

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
        👋 Hello. I'm Joe.
      </GradientWelcome>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        fermentum tellus magna, id consequat magna rutrum sit amet. Maecenas
        suscipit a elit quis dapibus. Duis tincidunt iaculis nisl interdum
        condimentum. Proin mollis massa eu congue aliquam. Vestibulum accumsan
        orci vel mi fringilla, at pretium lacus mattis. Integer eget commodo ex.
        Quisque pellentesque, massa quis tempus ullamcorper, lorem augue blandit
        leo, eget volutpat nulla ante vitae nulla. Suspendisse efficitur lectus
        ut finibus maximus. Nunc id consequat risus. Nam varius lectus a nisi
        aliquam cursus. Maecenas cursus porta nisl id viverra.
      </p>
      <p>
        Sed augue mi, pretium in leo et, tincidunt mollis justo. Aenean
        pellentesque a erat finibus maximus. Suspendisse dignissim, orci id
        sollicitudin fermentum, libero massa efficitur mi, ac pellentesque arcu
        lacus in urna. Proin tempus purus sit amet dolor posuere viverra.
        Vivamus commodo posuere feugiat.
      </p>
    </main>
  );
}
