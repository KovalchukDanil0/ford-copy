import { Button } from "flowbite-react";
import Image from "next/image";
import type { ReactElement } from "react";

interface BillboardProps {
  src?: string;
  hl?: string;
  alt?: string;
  href?: string;
  sl?: string;
  width?: number;
  height?: number;
  marginLeft?: number;
  marginTop?: number;
}

export default function Billboard({
  width = 2160,
  height = 925,
  marginLeft = 5,
  marginTop = 5,
  alt = "billboard",
  href,
  src,
  hl,
  sl,
}: Readonly<BillboardProps>): React.ReactElement {
  src = src ?? `https://placehold.co/${width}x${height}.jpg`;

  let addDiv = false;

  let headLineElm: ReactElement;
  if (hl !== undefined) {
    headLineElm = <h2 className="text-6xl font-bold uppercase">{hl}</h2>;
    addDiv = true;
  }

  let subLineElm: ReactElement;
  if (sl !== undefined) {
    subLineElm = <p className="text-2xl normal-case">{sl}</p>;
    addDiv = true;
  }

  let buttonElm: ReactElement;
  if (href !== undefined) {
    buttonElm = (
      <div className="mt-4 flex flex-wrap gap-2">
        <Button href={href}>Button</Button>
      </div>
    );
    addDiv = true;
  }

  const divElm: ReactElement = (
    <div
      style={{ marginLeft: marginLeft + "%", marginTop: marginTop + "%" }}
      className="absolute left-0 top-0 text-white"
    >
      {headLineElm!}
      {subLineElm!}
      {buttonElm!}
    </div>
  );

  return (
    <div className="relative">
      <a href={href}>
        <Image src={src} width={width} height={height} alt={alt} title={alt} />
      </a>
      {addDiv ? divElm : null}
    </div>
  );
}