"use client";
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HoverEffect } from "./ui/card";
import { projects } from "@/data";
import MagicButton from "./ui/magicButton";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="mt-10 flex flex-col">
      <h1 className="font-extrabold  text-[2rem] text-center lg:text-4xl">
        Welcome to <span className="text-[#FFB22C]">Zakat Calculator</span>
      </h1>
      <h2 className="font-semibold mt-5 lg:text-lg text-sm text-white text-center">
        Calculate Your Zakat <span className="text-[#e2b362]">with Ease</span>
      </h2>
      <TextGenerateEffect
        words="Welcome to our Zakat Calculator, designed to help you fulfill one of the most important pillars of Islam with confidence. Whether you're calculating Zakat on your savings, gold, or other assets, our tool provides a quick and accurate calculation."
        filter={true}
        duration={0.01}
        from={2}
        to={5}
      />
      <div className="flex flex-col justify-center items-center">
        <h2>
          Why Use Our Zakat Calculator <span className="text-[#FFB22C]">?</span>
        </h2>
        <div className="flex sm:flex-col justify-between gap-2">
          <HoverEffect items={projects} />
        </div>
      </div>
      <div className=" flex justify-center">
        <MagicButton
          title="Get started"
          position="right"
          handleClick={() => router.push("/Calculator")}
        />
      </div>
      <p className=" text-sm text-[#ece5e5]  mt-7 mx-4  lg:text-center">
        Not sure about how <span className="text-[#FFB22C]">Zakat works?</span>{" "}
        Visit our<span className="text-[#FFB22C]"> FAQ</span> section to learn
        more about the obligations, calculations, and rulings related to Zakat.
      </p>
    </div>
  );
};

export default HomePage;
