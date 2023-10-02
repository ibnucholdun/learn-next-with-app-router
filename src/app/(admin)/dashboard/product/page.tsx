"use client";

import React, { useState } from "react";

type Props = {};

const AdminProductPage = (props: Props) => {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=Ichol15012002",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidate Failed");
      return;
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };

  return (
    <>
      <h1>{status}</h1>
      <button
        className="bg-blue-500 py-2 px-4 rounded m-5 text-white"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </>
  );
};

export default AdminProductPage;
