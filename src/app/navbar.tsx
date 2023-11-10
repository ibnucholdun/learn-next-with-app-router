import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status }: { data: any; status: string } = useSession();

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
          <div className="flex justify-center items-center">
            <Image
              src="/images/profile.png"
              alt="profile"
              width={50}
              height={50}
              className="w-10 h-10 rounded-full"
            />
            <p className="text-white mx-3">{session?.user.fullname}</p>
            <button
              className="text-white bg-blue-700 px-5 py-2 rounded-md cursor-pointer"
              onClick={() => signOut()}>
              Logout
            </button>
          </div>
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
