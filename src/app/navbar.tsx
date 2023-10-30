import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { status }: { status: string } = useSession();

  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between items-center">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-3 ${
                pathname === "/" ? "text-blue-300" : "text-white"
              } cursor-pointer`}>
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-3 ${
                pathname === "/about" ? "text-blue-300" : "text-white"
              } cursor-pointer`}>
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-3 ${
                pathname === "/about/profile" ? "text-blue-300" : "text-white"
              } cursor-pointer`}>
              Profile
            </li>
          </Link>
        </ul>
      </div>

      <div>
        {status === "authenticated" ? (
          <button
            className="text-white bg-blue-700 px-5 py-2 rounded-md cursor-pointer"
            onClick={() => signOut()}>
            Logout
          </button>
        ) : (
          <button
            className="text-white bg-blue-700 px-5 py-2 rounded-md cursor-pointer"
            onClick={() => signIn()}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
