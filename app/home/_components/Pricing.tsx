'use client'
import { Prici } from "@/data/form";

export const Pricing = () => {
  console.log("pricing printed")
  return (

    <div className="mx-10 lg:mx-48">
      <h1 className="text-center font-extrabold text-4xl text-gray-800">
        Pricing
      </h1>
      <p className="text-center text-xl font-semibold mt-2 text-gray-600">
        Choose the perfect plan that fits your needs.
      </p>
      <div className="mt-10 grid  place-content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Prici.map((item, index) => (
          <div
            key={index}
            className="border-2  border-gray-300 p-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="p-4 bg-[#F8F8F8]  rounded-xl grid place-content-center">
              <h4 className="text-center text-2xl font-bold">
                {item.ttile}
              </h4>
              <p className="text-sm  font-medium mt-1 mb-4">
                {item.para}
              </p>
              <ul className="">
                {item.points.map((content, idx) => (
                  <li key={idx} className="text-sm font-bold mt-2">
                    {content ? (
                      `👉 ${content}`
                    ) : (
                      <span className="text-gray-500 opacity-0">-</span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-8 px-5 font-extrabold text-5xl text-gray-800">
                Rs. {item.price}
                <span className="text-sm font-medium"> /week</span>
              </p>
              <button className="mt-6 bg-blue-600 text-white p-4 rounded-lg text-xl transition-colors duration-300 hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
