"use client";

import React from "react";
import iphone from "@/public/home/iphone.svg";
import Image from "next/image";
import { LeftToRightMove } from "@/components/frame-motion/right-to-left";
import { Button } from "@/components/ui/button";
import landBack from "@/public/home/landback.png";
import cricle from "@/public/home/wave-haikei.svg";

export const Hero = () => {
  return (
    <section id="hero" className="w-full h-1/2 relative">
      <div className="flex md:gap-10 lg:justify-around sm:gap-10">
        {/* <LeftToRightMove> */}
        <div className="relative lg:max-w-3xl  mt-16">
          {/* <div className="left-hero"></div> */}
          <h1 className="z-0 leading-tight tracking-wide text-6xl font-semibold  mt-8 ">
            We Specialiazing in Retail and Wholesale{" "}
            <span className="text-blue-500 images">Solutions,</span>
          </h1>
          <span className="-z-5 text-6xl font-semibold">Daily Activity</span>
          <p className="max-w-2xl opacity-60 font-semibold text-md">
            We specialize in comprehensive retail and wholesale solutions,
            offering advanced tools for inventory management, customer
            relationship management (CRM), and more, to streamline your daily
            operations and enhance business efficiency
          </p>
          <div className="mt-5 flex gap-20">
            <Button
              className="bg-blue-500 hover:transition-shadow hover:to-blue-950 font-semibold text-white text-xl p-6"
              variant="destructive"
            >
              Start for free
            </Button>
            <p className="flex flex-col items-center font-semibold text-xl">
              Call Us + 91 7406935847{" "}
              <span className="text-sm font-normal opacity-80">
                For any Question of concern
              </span>
            </p>
          </div>
        </div>

        {/* </LeftToRightMove> */}
        <div className="">
          <Image src={landBack} alt="logo" className="object-cover" />
        </div>
      </div>
    </section>
  );
};
