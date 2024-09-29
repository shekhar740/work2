import { Button } from "@/components/ui/button";
import download from "@/public/home/download.svg";
import Image from "next/image";
import landBack from "@/public/home/landback.png";
import particle from "@/public/home/parti2.svg"

export const Cusomter = () => {
  return (
    <section
      id="customer"
      className="w-full h-1/2 relative flex z-auto  items-center px-36 mt-14"
    >
      <div className="lg:max-w-3xl relative">
        <Image src={download} alt="xdfsf" width={50} height={50} />
            <Image src={particle} alt="sdf" width={200} height={100} className="absolute right-[30%] -top-28" />
        <h2 className="text-5xl tracking-wide font-bold leading-12 mt-5">
          1,25,000 Customers Using the Application!
        </h2>
        <p className="mt-5 opacity-60 text-xl">
          Joins Over 1,25,000 retailers who rely on our management System to
          streamlined Operations,Optimize sales, and enhance customer
          experiences. Discover how our platform revolutionizes retail
          management
        </p>
        <Button className="bg-[#FF6B81] mt-5 text-white p-5 px-10 font-bold">
          Get Started
        </Button>
      </div>
      <div>
      <Image src={landBack} alt="logo" className="object-cover" />
      </div>
    </section>
  );
};
