import { sidebarMap } from "@/data/form";
import user from "@/public/dashboard/user.avif";
import Image from "next/image";
import { useState } from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import signup from "@/public/dashboard/logout.svg";
import { sign } from "crypto";
import { Button } from "@/components/ui/button";

interface SidebarItem {
  title: string;
  children: { title: string; link: string }[];
  image: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Sidebar: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<number[]>([]);
  const [activeChild, setActiveChild] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = (index: number) => {
    if (openMenus.includes(index)) {
      setOpenMenus(openMenus.filter((i) => i !== index));
    } else {
      setOpenMenus([...openMenus, index]);
    }
  };

  const handleChildClick = (childIndex: number) => {
    setActiveChild(childIndex);
  };

  return (
    <div className="bg-[#1C003E] w-full h-screen text-white">
      <h1 className="text-center pt-10 text-xl font-sans font-bold tracking-wider">
        Profile
      </h1>
      <div className="flex gap-3 p-5 px-6 mt-6">
        <Image
          src={user}
          width={50}
          height={10}
          alt="user logo"
          className="rounded-full object-cover w-12 h-12"
        />
        <div>
          <h4 className="font-semibold text-lg">Shekhar Metre</h4>
          <p className="opacity-60 text-sm text-center">+91 7406935847</p>
        </div>
      </div>
      <ul className="flex flex-col gap-3 mt-6">
        {sidebarMap?.map((item: SidebarItem, index: number) => (
          <li key={index} className="flex flex-col">
            <div
              className="flex justify-between gap-3 items-center cursor-pointer py-2 px-4 rounded hover:bg-purple-700 transition duration-200 ease-in-out"
              onClick={() => toggleMenu(index)}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  width={30}
                  height={10}
                  alt="imagesddsd"
                  className="bg-white rounded-full p-1"
                />
                <span className="font-semibold text-sm ">{item.title}</span>
              </div>

              <ChevronRightIcon />
            </div>
            <ul
              className={`ml-4 transition-all duration-300 ease-in-out ${
                openMenus.includes(index)
                  ? "max-h-40"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              {item.children.map((child, childIndex: number) => (
                <li key={childIndex} className="flex cursor-pointer">
                  <div
                    className={`py-1 px-2 rounded transition duration-200 ease-in-out ${
                      activeChild === childIndex
                        ? "bg-purple-600"
                        : "hover:bg-purple-600"
                    }`}
                    onClick={() => handleChildClick(childIndex)}
                  >
                    <span className="text-sm">{child.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="flex items-center  gap-3 p-5 px-9 mt-6">
        <Image src={signup} width={50} height={30} alt="Signup" />
        <h3 className="font-semibold">Logout </h3>
      </div>
      <div className="z-10 relative bg-[#0A7C87] w-56 m-2 mt-52 p-3 rounded-xl">
        <div className="shadow1  -z-10 rounded-full bg-white h-2"></div>
            <p className="text-[10px] z-10 text-white "  >Dont Forget</p>
            <h4 className="text-sm mt-3  font-bold">Get Your analytics to plz subscribe</h4>
            <div className="shadow2  -z-10 rounded-full bg-white h-2"></div>
            <Button variant="secondary" className="mt-6">Lets Begin</Button>
      </div>
    </div>
  );
};
