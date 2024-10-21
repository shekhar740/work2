import ImageCarousel from "@/hooks/Carousels";
import leftReangle from "@/public/home/eclipseleft.svg";
import rightReatagnle from "@/public/home/righteclipse.svg";
import Image from "next/image";


export const MobileFeatures = () => {
  return (
    <section id="mobile-view-section" className="w-full h-72 mt-10">
      <h1 className="text-center text-2xl font-extrabold">Features</h1>
      <p className="text-center opacity-60">We Provides numerous features for your day to day tasks</p>
      <div className="relative flex mt-10 justify-center items-center">
        <Image src={leftReangle} alt="leftrect" className="absolute left-0" width={100} height={600} />
        <div className="max-w-[350px]">
        <ImageCarousel />
        </div>
        <Image src={rightReatagnle} alt="leftrect" className="absolute right-0" width={100} height={600} />
      </div>
    </section>
  );
};