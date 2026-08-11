import React from "react";
import Iconsocial from "./Iconsocial";

const Footer = () => {
  return (
    <footer className="bg-black/95 border-t border-gray-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-center mb-6">
          <Iconsocial />
        </div>

        <p className="text-center text-sm md:text-lg text-gray-400">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved |
          <span className="text-[#F59E0B] font-semibold">
            {" "}Muhammad Saad Asghar
          </span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;