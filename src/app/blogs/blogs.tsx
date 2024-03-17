"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Blogs(): React.ReactElement {
  const pathname = usePathname();
  return (
    <div className="flex flex-col">
      <Link href={pathname + "/test"}>Test</Link>
      <Link href={pathname + "/gg"}>GG</Link>
    </div>
  );
}
