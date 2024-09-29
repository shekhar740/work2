"use client";
import rectangle from "@/public/home/rectangle.svg";
import image1 from "@/public/home/image1.png";
import image2 from "@/public/home/image2.png";
import image3 from "@/public/home/image3.png";
import Image from "next/image";
import playButton from "@/public/home/playbutton.json";
import { LottiAnimation } from "@/components/LottiAnimation";
import yellowsdf from "@/public/home/yellowshape.svg";
import Down from "@/public/home/downshape.svg";
import wave from "@/public/home/wave.svg";

export const WhyChooseUs = () => {
  return (
    <section id="hero" className="w-full h-auto relative py-10">
      <div className="flex flex-col lg:flex-row md:gap-10 items-center lg:justify-around sm:gap-10">
        <div className="relative mt-10 lg:mt-16">
          <Image
            src={rectangle}
            alt="Background decorative rectangle"
            width={900}
            height={100}
            className="absolute -z-10 -top-20 -left-24"
            priority // Load this image with higher priority
          />
          <Image
            src={yellowsdf}
            alt=""
            width={40}
            height={60}
            className="absolute right-48"
          />
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="flex flex-col gap-5">
              <Image
                src={image1}
                alt="Description of image 1"
                width={400}
                height={100}
                layout="responsive" // Use responsive layout
              />
              <Image
                src={image2}
                alt="Description of image 2"
                width={400}
                height={100}
                layout="responsive"
                className="z-20 rounded-md"
              />
              <Image
                src={Down}
                alt=""
                width={150}
                height={150}
                className="absolute right-20 bottom-0"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={image3}
                alt="Description of image 3"
                width={300}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="relative lg:max-w-3xl mt-10 lg:mt-0">
          <div className="shadow1"></div>
          <div className="flex flex-col gap-5 max-w-[90%] leading-5 tracking-wide mx-auto">
            <h3 className="text-blue-400 text-center font-bold tracking-wide">
              Why Choose Us
            </h3>
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
              We Make Our Customers Happy by Giving the Best Services.
            </p>
            <p className="text-sm md:text-md opacity-70 text-center font-medium">
              Elevate your retail/wholesale experience with us. Unlock
              streamlined daily activities, precision inventory control, and
              exceptional customer services.
            </p>
            <div className="flex mt-5 items-center justify-center">
              <LottiAnimation data={playButton} loop={true} />
              <h1 className="text-lg md:text-xl font-semibold tracking-wide leading-8 ml-2">
                SEE HOW WE WORK
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={wave}
        alt="wave background"
        className="w-full h-full absolute top-44 -z-10"
      />
    </section>
  );
};