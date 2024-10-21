import { ourServices } from "@/data/form";
import Image from "next/image";

export const Services = () => {
  return (
    <div className="grid p-2 place-content-center mt-14">
      <h1 className=" text-center font-extrabold text-4xl ">Our Services</h1>
      <p className="text-center text-2xl font-semibold tracking-wide mt-2">
        Start Exploring our services
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10" >
        {ourServices.map((item,index)=>(
            <div key={index}>
                <Image src={item.image} alt={item.title} className="w-[350px] md:h-[450px] h-[250px] rounded-2xl object-cover hover:scale-105 cursor-pointer duration-1000 ease-in-out" />
                <p className="text-center mt-2 font-bold">{item.title}</p>
            </div>
        ))}
      </div>
    </div>
  );
};
