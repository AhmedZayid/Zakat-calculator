"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

const page = ({ children }: { children: ReactNode }) => {
  const [Livestock, setLivestock] = useState(true);
  const router = useRouter();
  return (
    <div className="flex  justify-between ">
      <section className="text-left pl-2 lg:w-[20%] sm:w-[20%] w-[30%] text-[2px] border-r-2 border-red-200 pr-4">
        <h1 className="text-[1.2rem] my-4 ">Documentation</h1>
        <h2 className="text-[#ea6919] pl-4 text-xl sm:text-sm my-2">
          Overview
        </h2>
        <div>
          <Link href={"/Docs/Livestock"}>
            <h2 className="text-[#ea6919] pl-4 text-xl sm:text-sm my-2">
              <button
                onClick={() => {
                  Livestock ? setLivestock(false) : setLivestock(true);
                }}
              >
                Livestock
              </button>
            </h2>
          </Link>

          {Livestock && (
            <ul className="list-none pl-6 font-light text-[#e5dfdf]  text-[1rem] my-2">
              <li>
                <Link href={"/Docs/Livestock#camel"}>Camel</Link>
              </li>
              <li>
                <Link href={"/Docs/Livestock#cattle"}>Cattle</Link>
              </li>
              <li>
                <Link href={"/Docs/Livestock#Goats-sheep"}>Goats and sheeps</Link>
              </li>
            </ul>
          )}
        </div>
      </section>
      <section className="text-center w-[100%]">{children}</section>
    </div>
  );
};

export default page;
