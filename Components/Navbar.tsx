"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="mb-3 mt-3 mr-6 flex gap-2">
      <button className="w-[10%] flex ">
        <img src="/logo.png" alt="logo" />
        <h1 className="mt-2 mr-1 ">
          <span className="text-2xl">Zakat</span> <br /> Calculator
        </h1>
      </button>
    </div>
  );
};

export default Navbar;
