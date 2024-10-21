import { otherServices } from "@/data/form";
import Image from "next/image";

export const Services = () => {
  return (
    <div>
      <h1 className="mt-20 font-bold">Other Services</h1>
      <div className="grid grid-cols-4 items-center px-10 gap-20 mt-10">
        {otherServices.map((item, index) => (
          <div key={index}>
            <Image src={item.image} width={100} height={50} alt={item.title} />
            <p className="mt-5">{item?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
