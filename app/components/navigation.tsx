"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
    title: string;
    path: `/${string}`;
  };
  
  const pages: Page[] = [
    { title: "Home", path: "/" },
    {
      title: "Tools",
      path: "/tools",
    },
    {
      title: "Community",
      path: "/community",
    },
    {
      title: "Support",
      path: "/support",
    },
    {
      title: "Profile",
      path: "/profile",
    },
  ];
  
  function processPage(page: Page, index: number, pathname: string) {
    return (
      <li key={index}>
        <Link
          href={page.path}
          className={
            page.path === "/"
              ? pathname === page.path
                ? "font-extrabold"
                : ""
              : pathname.startsWith(page.path)
              ? "font-extrabold"
              : ""
          }
        >
          {page.title}
        </Link>
      </li>
    );
  }
  
  export function Navigation() {
    const pathname = usePathname();
    return (
      <ul className="flex space-x-4 mb-4">
        {pages.map((page, index) => processPage(page, index, pathname))}
      </ul>
    );
  }
  