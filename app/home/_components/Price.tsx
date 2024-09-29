"use client";
import { PriceData } from "./price-comp";

export const Price = () => {

  return (
    <section
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/564x/00/0f/8f/000f8f7a38b4b4293d54da315245178d.jpg)",
      }}
      className="h-full w-full bg-cover bg-center bg-fixed bg-no-repeat dark:bg-gray-800 px-2 p-5 text-white"
    >
      <div className="flex flex-col justify-around items-center relative ">
        <div className="shadow-hero"></div>
        {/* <div> */}
        <h1 className="text-4xl tracking-wider max-w-[40rem] italic font-semibold text-center ">
          We Offer Greate Affordable Priminum Prizes
        </h1>
        <p className="max-w-screen-lg text-center mt-5 opacity-70 text-xl">
          Elevate Your experience with our premimum offerings,carefully curated
          to delever luxury at a fraction of the cost. Experience top-tier
          quality without compromising on your budget
        </p>
        <PriceData />
      </div>
    </section>
  );
};
