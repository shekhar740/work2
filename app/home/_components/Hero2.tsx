import React from "react";
import Image from "next/image"; // Import the Image component
import heroImage from "@/public/home/hero.png";
import AnimatedWrapper from "@/hooks/layouts/AnimateWrapper";

const HeroSection: React.FC = () => {
  return (
      <section className="bg-[linear-gradient(90deg,#d53369_0%,#daae51_100%)] dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <AnimatedWrapper
            initialX={-300}
            className="mr-auto place-self-center lg:col-span-7"
          >
            <p className="uppercase tracking-loose w-full text-[10px] lg:text-md">
              {" "}
              Mobile Business Solutions for Retail & Wholesale
            </p>
            <h1 className="my-4 text-3xl font-bold leading-tight">
              Streamlining the Mobile Industry with Smart Retail & Wholesale
              Solutions <span>daily Activity</span>
            </h1>
            <p className="leading-normal text-xl mb-8">
              Streamline your mobile retail and wholesale operations with
              advanced tools for inventory and customer management.
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Subscribe
            </button>
          </AnimatedWrapper>
     
          <AnimatedWrapper initialX={300} className=" lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            className=""
            src={heroImage}
            alt="Hero"
            layout="responsive"
          />
        </AnimatedWrapper>
        </div>
      </section>
  );
};

export default HeroSection;
