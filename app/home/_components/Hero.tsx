"use client";
import React from "react";
import iphone from "@/public/home/iphone.svg";
import Image from "next/image";
import { LeftToRightMove } from "@/components/frame-motion/right-to-left";
import { Button } from "@/components/ui/button";
import landBack from "@/public/home/landback.png";
import cricle from "@/public/home/wave-haikei.svg";
import wave from "@/public/home/wave.svg";

export const Hero = () => {
  return (
    <section id="hero" className="w-full h-auto relative z-auto py-10">
      <div className="shadow-hero"></div>
      <div className="flex flex-col lg:flex-row md:gap-10 lg:justify-around sm:gap-10">
        {/* <LeftToRightMove> */}
        <div className="relative lg:max-w-3xl mt-10 flex flex-col px-4">
          {/* <div className="left-hero"></div> */}
          <h1 className="z-0 leading-tight tracking-wide text-4xl md:text-5xl lg:text-6xl font-semibold">
            We Specializing in Retail and Wholesale{" "}
            <span className="text-blue-500 images">Solutions,</span>
          </h1>
          <span className="-z-5 text-3xl md:text-4xl lg:text-5xl font-semibold mt-2">
            Daily Activity
          </span>
          <p className="max-w-2xl opacity-40 font-semibold text-sm md:text-md mt-4">
            We specialize in comprehensive retail and wholesale solutions,
            offering advanced tools for inventory management, customer
            relationship management (CRM), and more, to streamline your daily
            operations and enhance business efficiency.
          </p>
          <div className="mt-5 flex flex-col md:flex-row gap-4 md:gap-20">
            <Button
              className="bg-blue-500 hover:transition-shadow hover:to-blue-950 font-semibold text-white text-lg md:text-xl p-4 md:p-6"
              variant="destructive"
            >
              Start for free
            </Button>
            <p className="flex flex-col items-center font-semibold text-lg md:text-xl">
              Call Us + 91 7406935847{" "}
              <span className="text-sm font-normal opacity-80">
                For any Question or concern
              </span>
            </p>
          </div>
        </div>
        {/* </LeftToRightMove> */}
        <div className="flex justify-center mt-6 lg:mt-0">
          <Image src={landBack} alt="logo" className="object-cover w-full max-w-xs md:max-w-md lg:max-w-lg" />
        </div>
      </div>
      {/* <Image src={wave} alt="sdf" className="w-full h-full absolute top-56 -z-10"  /> */}
    </section>
  );
};