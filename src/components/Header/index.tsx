"use client";

import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const navLink = [
    { active: false, alt: "Home", title: "Home", href: "/" },
    { active: false, alt: "About", title: "About", href: "/about" },
  ];
  const pathname = usePathname();
  for (const link of navLink) {
    if (pathname === link.href) {
      link.active = true;
    }
  }

  return (
    <Navbar fluid>
      <Navbar.Brand as={Link} href="/">
        <img
          src="/favicon.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navLink.map((link) => (
          <Navbar.Link {...link} key={link.alt}>
            {link.alt}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
