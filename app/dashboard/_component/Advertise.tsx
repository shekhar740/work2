import mobilead from "@/public/dashboard/mobilead.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export const Advertise = ()=>{
    return (
        <div className="bg-[#2A5AD3]  text-white md:p-10 p-5 mt-10 rounded-md flex relative">
           <div className="absolute shadow3"></div>
        <div className="max-w-[70%]">
          <h2 className="font-bold text-2xl">Welcome Back, Shekhar!</h2>
          <p className="mt-6 opacity-80 font-medium tracking-wide text-sm">
            Manage your retail and wholesale operations seamlessly with our
            comprehensive tools. Track balances, oversee daily activities, and
            utilize essential utilities all in one place.
          </p>
          <Button className="bg-[#ED7779] mt-6">Start Today</Button>
        </div>
        <Image
          src={mobilead}
          width={320}
          height={100}
          alt="mobile ad"
          className="absolute right-28 -top-6 transform translate-x-1/2 "
        />
      </div>
    )
}