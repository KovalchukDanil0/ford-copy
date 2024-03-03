import { Footer as FooterElm } from "flowbite-react";

export default function Footer() {
  return (
    <FooterElm container>
      <FooterElm.Copyright href="#" by="Flowbite™" year={2022} />
      <FooterElm.LinkGroup>
        <FooterElm.Link href="/about">About</FooterElm.Link>
        <FooterElm.Link href="#">Privacy Policy</FooterElm.Link>
        <FooterElm.Link href="#">Licensing</FooterElm.Link>
        <FooterElm.Link href="#">Contact</FooterElm.Link>
      </FooterElm.LinkGroup>
    </FooterElm>
  );
}
