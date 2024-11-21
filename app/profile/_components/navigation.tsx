"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  title: string;
  path: `/${string}`;
};

const pages: Page[] = [
  {
    title: "Borrowed Tools",
    path: "/profile/borrowedTools",
  },
  {
    title: "Lending History",
    path: "/profile/history",
  },
  {
    title: "Account Settings",
    path: "/profile/settings",
  },
];

function processPage(page: Page, index: number, pathname: string) {
  const isActive = pathname === page.path;
  
  return (
    <li key={index}>
      <Link
        href={page.path}
        aria-current={isActive ? "page" : undefined}
        className={`${
          isActive
            ? "font-extrabold text-link-text"
            : "link-text hover:text-link-hover-text"
        }`}
      >
        {page.title}
      </Link>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();
  return (
    <ul className="flex justify-center space-x-4 mt-8">
      {pages.map((page, index) => processPage(page, index, pathname))}
    </ul>
  );
}