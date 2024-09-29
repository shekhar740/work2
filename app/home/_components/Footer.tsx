import { accountLinks, companyLinks, courseLinks, serviceLinks } from '@/data/form'; // Ensure this path is correct
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#140B5C] w-full -mt-10">
      <div className="max-w-[1250px] mx-auto p-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center text-white text-2xl">
            <i className="fab fa-slack"></i>
            <span className="ml-2">CodingLab</span>
          </div>
          <div className="flex space-x-2">
            {[
              { icon: 'fab fa-facebook-f', bgColor: '#4267B2' },
              { icon: 'fab fa-twitter', bgColor: '#1DA1F2' },
              { icon: 'fab fa-instagram', bgColor: '#E1306C' },
              { icon: 'fab fa-linkedin-in', bgColor: '#0077B5' },
              { icon: 'fab fa-youtube', bgColor: 'red-600' },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`h-10 w-10 flex items-center justify-center rounded-full bg-[${social.bgColor}] text-white transition-all duration-300 hover:bg-white hover:text-[${social.bgColor}]`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between mb-8">
          <FooterSection title="Company" links={companyLinks} />
          <FooterSection title="Services" links={serviceLinks} />
          <FooterSection title="Account" links={accountLinks} />
          <FooterSection title="Courses" links={courseLinks} />
          <SubscribeSection />
        </div>
      </div>
      <div className="bg-[#0F0844] p-4">
        <div className="max-w-[1250px] mx-auto flex justify-between text-white text-sm">
          <span>
            Copyright © 2021 <a href="#" className="underline">CodingLab.</a> All rights reserved
          </span>
          <span>
            <a href="#" className="underline">Privacy policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="underline">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, links }) => (
  <ul className="w-full md:w-1/5">
    <li className="text-white font-semibold mb-2">{title}</li>
    {links.map((link, index) => (
      <li key={index}>
        <a href={link.href} className="text-gray-400 hover:underline">{link.name}</a>
      </li>
    ))}
  </ul>
);

const SubscribeSection = () => (
  <ul className="w-full md:w-1/5 flex flex-col">
    <li className="text-white font-semibold mb-2">Subscribe</li>
    <li>
      <input
        type="text"
        placeholder="Enter your email"
        className="h-10 border-2 border-gray-400 bg-[#140B5C] text-white rounded px-2 mb-2"
      />
    </li>
    <li>
      <input
        type="button"
        value="Subscribe"
        className="h-10 bg-white text-[#140B5C] rounded cursor-pointer font-medium transition-all duration-300 hover:bg-gray-200"
      />
    </li>
  </ul>
);