"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { mobileCOmpo } from "@/data/form";
import { title } from "process";
import Image from "next/image";

// Define the Swiper component
const ImageCarousel = () => {
  return (
    <Swiper
      // Install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0} // Set space between slides to 0
      slidesPerView={1} // Show only one slide at a time
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 2500, // Adjust the delay as needed
        disableOnInteraction: false,
      }}
    >
      {mobileCOmpo.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{ width: "100px" }}
          className="bg-white swiper outline-none rounded-md"
        >
          <div className="flex -gap-5 items-center shadow-2xl backdrop-blur-2xl bg-opacity-70 rounded-md h-48">
            <div className=" max-h-[100px] p-3">
              <Image
                src={item.image}
                alt="sdfsf"
                className="max-w-40 object-cover"
              />
            </div>
            <div className="text-right text-[10px] p-1">
              <h3 className="font-bold text-md text-end">{item.title}</h3>
              <p className="text-[10px] w-full text-end">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default ImageCarousel;
