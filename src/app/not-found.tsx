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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/cars/missing-car.png"
        alt={alt}
        title={alt}
        width={950}
        height={680}
      />
      <h2 className="mt-3 text-6xl text-red-500">404 - Page not found</h2>
    </main>
  );
}
