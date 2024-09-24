"use client";
import rectangle from "@/public/home/rectangle.svg";
import image1 from "@/public/home/image1.png";
import image2 from "@/public/home/image2.png";
import image3 from "@/public/home/image3.png";

import Image from "next/image";
export const WhyChooseUs = () => {
  return (
    <section id="hero" className="w-full h-1/2 relative">
      <div className="flex md:gap-10 lg:justify-around sm:gap-10">
        {/* <LeftToRightMove> */}
        <div className="relative  mt-16">
          <Image
            src={rectangle}
            alt=""
            width={900}
            height={100}
            className="absolute -z-10 -top-20 -left-24"
          />
          <div className="flex gap-5 items-center">
            <div className="flex flex-col gap-5">
              <Image src={image1} alt=" " width={400} height={100} />
              <Image src={image2} alt=" " width={400} height={100} />
            </div>
            <div>
              <Image src={image3} alt="" width={300} height={500} />
            </div>
          </div>
        </div>

        {/* </LeftToRightMove> */}
        <div className="relative lg:max-w-3xl ">
          <div className="flex flex-col gap-5 max-w-[80%] leading-5 tracking-wide">
            <h3 className="text-blue-400 text-center  font-bold tracking-wide">
              Why Choose Us
            </h3>
            <p className="text-5xl ">
              We Make Our Customers Happy by giving Best Services.
            </p>
            <p className="text-md font-light opacity-70 w-[80%]">
              Elevate your retail/wholesale experience with us. Unlock
              stramlined daily activities,precision inventory control , and
              exceptional cutsomer services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
