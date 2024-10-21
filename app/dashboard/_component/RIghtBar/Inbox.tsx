import backgroundNot from "@/public/dashboard/message.svg";
import inbox from "@/public/dashboard/inbox.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export const Inbox = ()=>{
    return (
        <div className="hidden lg:block flex-1 " style={{ flex: "0 0 600px" }}>
        <div
          className="w-full h-48 rounded-2xl p-5"
          style={{
            backgroundImage: `url(${backgroundNot.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Ensure the image covers the entire div
            backgroundPosition: "center", // Center the background image
          }}
        >
            <div className="flex relative gap-14 items-start">
              <Image src={inbox} width={50} height={50} alt="inbox" />
              <p className="flex text-xl text-white font-semibold flex-col gap-2">
                Emily Just Created task to assign Suresh{" "}
                <span className="text-sm opacity-60 pl-1">
                  15 august 2024 08:00 am
                </span>
              </p>
              <Button variant="secondary" className="bg-[#F4DB6D] p-2 absolute -bottom-14 left-24">Review Message</Button>
            </div>
          
         
        </div>
      </div>
    )
}

{/* <Button variant="secondary" className="bg-[#F4DB6D] p-2  text-center ">Review Message</Button> */}