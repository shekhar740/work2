import circle from "@/public/home/roundcircle.svg";
import Image from "next/image";
import feature from "@/public/home/store.png";
export const Features = () => {
  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl">Features</h1>
      <p className="text-center text-xl opacity-60 mt-2">
        We Provide numerouss lucreative features for your day to day tasks
      </p>
      <div className="flex justify-between items-center">
        <Image src={circle} width={400} height={400} alt="ciekcle" />
        <div className="bg-neutral-500 max-w-[1079px]  h-[470px] flex flex-1 gap-10 p-5 rounded-lg ">
          <div className="flex-1">
            <Image
              src={feature}
              className="w-full h-full object-cover"
              alt="store"
            />
          </div>
          <div className="flex-2">
            <h2>Secured Transactions</h2>
            <p>lorem14</p>
          </div>
        </div>
        <Image
          src={circle}
          width={400}
          height={600}
          alt="ciekcle"
          className="rotate-180"
        />
      </div>
    </div>
  );
};
