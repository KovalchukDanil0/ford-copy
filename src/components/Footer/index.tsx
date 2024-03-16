import { Footer as FooterElm } from "flowbite-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterElm container>
      <FooterElm.Copyright
        href="https://github.com/KovalchukDanil0"
        by="KovalchukDanil0™"
        year={currentYear}
      />
      <FooterElm.LinkGroup>
        <FooterElm.Link href="/about">About</FooterElm.Link>
        <FooterElm.Link href="#">Privacy Policy</FooterElm.Link>
        <FooterElm.Link href="#">Licensing</FooterElm.Link>
        <FooterElm.Link href="#">Contact</FooterElm.Link>
      </FooterElm.LinkGroup>
    </FooterElm>
  );
}
