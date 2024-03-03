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

export default function CopperMotorcar(): React.ReactElement {
  return <main></main>;
}
