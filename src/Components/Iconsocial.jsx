import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail} from "react-icons/md";

const Iconsocial = () => {
  return (
    <div>
      {" "}
      <div className="flex  gap-5">
        <a
          href="https://www.linkedin.com/in/muhammad-saad-asghar-831202392"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full border h-8 w-8  border-gray-600 hover:bg-[#F59E0B] hover:text-black hover:border-[#F59E0B] transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/muhammadsaadasghar"
          target="_blank "
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full border h-8 w-8  border-gray-600 hover:bg-[#F59E0B] hover:text-black hover:border-[#F59E0B] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/rao_saad_rajput?igsh=MXg5c3Z4ZW5xbGxudA=="
          className="flex items-center justify-center rounded-full border h-8 w-8  border-gray-600 hover:bg-[#F59E0B] hover:text-black hover:border-[#F59E0B] transition"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:muhammadsaadasghar408@gmail.com"
          className="flex items-center justify-center rounded-full border h-8 w-8  border-gray-600 hover:bg-[#F59E0B] hover:text-black hover:border-[#F59E0B] transition"
        >
          <MdEmail />{" "}
        </a>
      </div>
    </div>
  );
};

export default Iconsocial;
