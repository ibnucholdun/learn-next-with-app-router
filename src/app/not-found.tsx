import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="mb-5 text-3xl">Page not found</p>
      <Link href="/" className="text-white bg-blue-700 p-2 rounded">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
