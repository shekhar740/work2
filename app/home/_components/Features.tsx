import slate from "@/public/home/slate.svg";
import Image from "next/image";
import image2 from "@/public/home/dot.svg";
import { BoxFeature } from "./feature-comp";
import { features } from "@/data/form";
import particleleft from "@/public/home/circlsleft.svg"
import particleRight from "@/public/home/cirlceright.svg"
import rightBlue from "@/public/home/rightblue.svg"
export const Features = () => {
  return (
    <div className=" mt-32  px-36 font-bold leading-7 tracking-wider relative">
      <h4 className="text-blue-700  text-center text-xl">Features</h4>
      <h1 className="text-5xl text-center mt-5 tracking-wider">
        Your Experience Gets Better And Better Over{" "}
        <span>
          <Image
            src={image2}
            width={200}
            className="absolute right-24 -top-12 -z-10"
            height={100}
            alt=""
          />
        </span>{" "}
        Time With Ease of AI Generation
      </h1>
       <Image
        src={particleleft}
        alt=""
        width={80}
        height={50}
        className="absolute  -left-10  rotate-2 top-0 -z-10"
      />
             <Image
        src={particleleft}
        alt=""
        width={80}
        height={50}
        className="absolute  -left-2  rotate-2 top-20 -z-10"
      />
            <Image
        src={particleRight}
        alt=""
        width={80}
        height={50}
        className="absolute  right-0  rotate-2 top-44 -z-10"
      />
               <Image
        src={rightBlue}
        alt=""
        width={30}
        height={0}
        className="absolute  right-0  rotate-2 top-96 -z-10"
      />
      <Image
        src={slate}
        alt=""
        width={200}
        height={50}
        className="absolute right-[48%] rotate-3 top-16 -z-10"
      />
      <p className="text-md text-center opacity-65 leading-5 mt-5">
        This app provides real-time insights into your business with
        comprehensive reports on sales, inventory, receivables, payments,
        purchases, and more, empowering you to make data-driven decisions for
        optimized operations and sustainable growth.
      </p>
      <div className="grid lg:grid-cols-3 lg:gap-x-20 md:gap-x-10 md:grid-cols-2 grid-cols-1">
        {features.map((feature, index) => (
          <BoxFeature key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};
