import Billboard from "@/components/Billboard";
import ModelCarousel from "@/components/ModelCarousel";
import Video from "@/components/Video";
import { Metadata } from "next/types";

const title = "Home Page";
const description = "This is Home Page, be careful!";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function Home(): React.ReactElement {
  return (
    <main>
      <Billboard
        src="/cars/copper-motorcar.png"
        href="/cars/copper-motorcar"
        hl="New Copper Motorcar"
        sl="Look at this car!"
        alt="Copper motorcar in front of the fountain"
      />
      <Billboard
        src="/cars/standard-gray.png"
        href="/cars/standard-gray"
        hl="Standard gray car"
        sl="This car is above all standards"
        alt="Standard gray car in front of the church"
      />
      <Billboard
        src="/cars/echo-rickshaw.png"
        href="/cars/echo-rickshaw"
        hl="Echo rickshaw"
        sl="This car is equipped with a silent engine"
        alt="Echo rickshaw in dark blue fire"
      />
      <Billboard
        src="/cars/green-tractor.png"
        href="/cars/green-tractor"
        hl="Green tractor"
        sl="For the best terraforming experience"
        alt="Green tractor under sakura tree"
      />
      <Billboard
        src="/cars/shopping-cart.png"
        href="/cars/shopping-cart"
        hl="Shopping cart"
        sl="What is that? I don't know... But you should definitely buy it!"
        alt="Shopping cart in the abandoned house"
      />
      <ModelCarousel carPaths={["CopperMotorcar"]}></ModelCarousel>
      <Video videoID="AmyPnekwbz8" />
    </main>
  );
}
