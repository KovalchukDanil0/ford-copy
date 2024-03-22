"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Main({ files }: { files: string[] }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      {files.map((file, index) => {
        if (file === "page.tsx") {
          return <></>;
        }

        const fileNoExtension =
          file.substring(0, file.lastIndexOf(".")) || file;

        return (
          <Link key={index} href={`${pathname}/${fileNoExtension}`}>
            {fileNoExtension}
          </Link>
        );
      })}
    </div>
  );
}
