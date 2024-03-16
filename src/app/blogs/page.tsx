import { Metadata } from "next/types";
import Blogs from "./blogs";

const title = "Blogs Page";
const description = "This is Blogs Page, be careful!";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function Page(): React.ReactElement {
  return <Blogs />;
}
