import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex ml-5">
        <Link href="/">
          <li
            className={`mr-3 ${
              pathname === "/" ? "text-blue-300" : "text-white"
            } cursor-pointer`}
          >
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`mr-3 ${
              pathname === "/about" ? "text-blue-300" : "text-white"
            } cursor-pointer`}
          >
            About
          </li>
        </Link>
        <Link href="/about/profile">
          <li
            className={`mr-3 ${
              pathname === "/about/profile" ? "text-blue-300" : "text-white"
            } cursor-pointer`}
          >
            Profile
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
