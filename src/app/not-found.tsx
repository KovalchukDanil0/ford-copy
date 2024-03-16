import Image from "next/image";
import { Metadata } from "next/types";

const title = "404";
const description = "Congrats! You found a secret page!";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

const alt = "404";

export default function NotFound(): React.ReactElement {
  return (
    <main className="p-6 lg:p-24">
      <Image
        className="ml-auto mr-auto block lg:w-1/2"
        src="/cars/missing-car.png"
        alt={alt}
        title={alt}
        width={950}
        height={680}
      />
      <h2 className="mt-6 text-center text-red-500 lg:mt-3 lg:text-6xl">
        404 - Page not found
      </h2>
    </main>
  );
}
