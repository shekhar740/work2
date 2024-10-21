import { getFormattedDateInIST } from "@/hooks/utils";
import notification from "@/public/dashboard/notification.svg";
import settings from "@/public/dashboard/menusettings.svg";
import Image from "next/image";

import { Advertise } from "./_component/Advertise";
import { Services } from "./_component/Services";
import { Activity } from "./_component/Actvity";

import { RightBar } from "./_component/RIghtBar";
const Dashboard = () => {
  const time = getFormattedDateInIST();
  return (
    <div className="flex gap-10">
      <section id="dashboard" className="flex-2">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="sm:text-3xl text-2xl font-bold leading-7 tracking-wide">
              Dashoboard
            </h1>
            <p className="mt-1 font-medium md:text-md text-sm">{time}</p>
          </div>
          <div className="flex items-center gap-5">
            <Image
              src={notification}
              width={30}
              height={10}
              alt="notifications"
            />
            <Image src={settings} width={30} height={10} alt="settings" />
          </div>
        </div>
        <Advertise />
        <Services />
        <Activity />
      </section>
      <RightBar />
    </div>
  );
};
export default Dashboard;
