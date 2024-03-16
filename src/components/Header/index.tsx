"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const navLink = [
    { active: false, alt: "Home", title: "Home", href: "/" },
    { active: false, alt: "About", title: "About", href: "/about" },
  ];
  const pathname = usePathname();

  return (
    <Navbar fluid>
      <Navbar.Brand as={Link} href="/">
        <Image
          width={40}
          height={512}
          src="/favicon.png"
          className="mr-3 h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Ford Copy
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navLink.map((link) => {
          if (pathname === link.href) {
            link.active = true;
          }
          return (
            <Navbar.Link {...link} key={link.alt}>
              {link.alt}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
