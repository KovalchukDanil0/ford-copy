import { Metadata } from "next/types";
import Home from "./home";

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

export default function Page(): React.ReactElement {
  return <Home />;
}
