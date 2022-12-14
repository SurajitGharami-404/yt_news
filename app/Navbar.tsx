"use client";

import { categories } from "../constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "./NavLink";
function Navbar() {
  const pathName = usePathname();
  const isActive = (path: string) => {
    return pathName?.split("/").pop() === path;
  };
  return (
    <nav className="flex justify-around align-middle flex-wrap gap-2 m-3">
      <Link
        href={`/`}
        className={`navlink ${
          pathName === "/" && "underline scale-110"
        }`}
        prefetch={false}
      >
        <h2 className="text-center p-2">trending</h2>
      </Link>
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default Navbar;
