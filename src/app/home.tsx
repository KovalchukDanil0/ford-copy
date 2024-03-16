"use client";

import Billboard from "@/components/Billboard";
import EComCard from "@/components/EComCard";
import YouTubeVideo from "@/components/YouTubeVideo";
import { Button } from "flowbite-react";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home(): React.ReactElement {
  const responsive: ResponsiveType = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
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
      <YouTubeVideo videoID="AmyPnekwbz8" />
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <EComCard
          className="mx-5"
          text="copper-motorcar"
          src="/cars/copper-motorcar.png"
          stars={3}
          cost={455}
          alt="some alt"
          href="/cars"
        />
        <EComCard
          className="mx-5"
          text="standard-gray"
          src="/cars/standard-gray.png"
          stars={5}
          cost={344}
          alt="some alt"
          href="/cars"
        />
        <EComCard
          className="mx-5"
          text="echo-rickshaw"
          src="/cars/echo-rickshaw.png"
          stars={1}
          cost={777}
          alt="some alt"
          href="/cars"
        />
        <EComCard
          className="mx-5"
          text="green-tractor"
          src="/cars/green-tractor.png"
          stars={2}
          cost={666}
          alt="some alt"
          href="/cars"
        />
      </Carousel>
      <Button color="red" href="/blogs"></Button>
    </main>
  );
}
