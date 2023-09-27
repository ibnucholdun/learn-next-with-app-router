"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState(0);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <h1>layout : {state}</h1>
        <button onClick={() => setState(state + 1)}>Klik</button>
        {children}
      </body>
    </html>
  );
}

// untuk layout ketika perpindahan routing akan membawa nilai statenya
