import { Button } from "flowbite-react";
import Image from "next/image";
import type { ReactElement } from "react";

interface Props {
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
  src,
  hl,
  alt,
  href,
  sl,
}: Readonly<Props>): React.ReactElement {
  let addDiv = false;

  let headLineElm: ReactElement;
  if (hl !== undefined) {
    headLineElm = (
      <h2 className="text-3xl font-bold uppercase lg:text-6xl">{hl}</h2>
    );
    addDiv = true;
  }

  let subLineElm: ReactElement;
  if (sl !== undefined) {
    subLineElm = <p className="normal-case lg:text-2xl">{sl}</p>;
    addDiv = true;
  }

  let buttonElm: ReactElement;
  if (href !== undefined) {
    buttonElm = (
      <div className="mt-4 hidden flex-wrap gap-2 lg:flex">
        <Button href={href}>Button</Button>
      </div>
    );
    addDiv = true;
  }

  const divElm: ReactElement = (
    <div
      className="absolute left-0 top-0 text-white"
      style={{ marginLeft: `${marginLeft}%`, marginTop: `${marginTop}%` }}
    >
      {headLineElm!}
      {subLineElm!}
      {buttonElm!}
    </div>
  );

  return (
    <div className="relative">
      <a href={href}>
        <Image
          className="object-cover"
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          src={src!}
          width={width}
          height={height}
          alt={alt!}
          title={alt}
        />
      </a>
      {addDiv ? divElm : null}
    </div>
  );
}
