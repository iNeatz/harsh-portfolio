"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({ settings }) => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {settings.data.navigation.map((item) => (
        <Link
          href={item.nav_link}
          key={item.nav_title}
          className={`${item.nav_link === pathname && "border-b-2 border-accent text-accent"} font-medium capitalize transition-all hover:text-accent`}
        >
          {item.nav_title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
