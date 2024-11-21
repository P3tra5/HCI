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
    const isActive = page.path === "/" ? pathname === page.path : pathname.startsWith(page.path);

    return (
      <li key={index}>
        <Link
          href={page.path}
          className={`px-4 py-2 rounded-md transition-colors ${
            isActive
              ? "font-extrabold text-link-text"
              : "text-link-text hover:text-link-hover-text" 
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
      <nav className="bg-navbar-bg shadow-lg py-4 px-8 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-link-text hover:text-link-hover-text">
            *Logo*  {/*dodat logo*/}
          </Link>

          <ul className="flex space-x-6">
            {pages.map((page, index) => processPage(page, index, pathname))}
          </ul>
      </div>
    </nav>
    );
  }
  