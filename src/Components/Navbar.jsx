
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes , FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu=()=>{
    setMenuopen(false)
  }
  return (
    <nav className="fixed top-0 left-0 w-full h-18 lg:h-20 bg-black/90 border-b  border-b-gray-700  flex items-center justify-between px-6 sm:px-10 lg:px-16 z-50">
      <div className="">
      <Link to="/" className="text-xl font-bold text-[#f09610]" onClick={closeMenu} >SAAD.</Link>
      </div>
      <div className="hidden items-center md:flex gap-6">
        <Link to="/">Home</Link>
        <a href="/#about">About</a>
        <Link to="/skill">Skills</Link>
        <Link to="/project">Project</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-2xl"
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            absolute top-18 left-0 w-full
            bg-black/95
            border-b border-gray-700
            flex flex-col
            items-center
            gap-6
            py-6
            md:hidden
          "
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-[#f09610] transition"
          >
            Home
          </Link>

          <a
            href="/#about"
            onClick={closeMenu}
            className="hover:text-[#f09610] transition"
          >
            About
          </a>

          <Link
            to="/skill"
            onClick={closeMenu}
            className="hover:text-[#f09610] transition"
          >
            Skills
          </Link>

          <Link
            to="/project"
            onClick={closeMenu}
            className="hover:text-[#f09610] transition"
          >
            Project
          </Link>
          <Link
            to="/resume"
            onClick={closeMenu}
            className="hover:text-[#f09610] transition"
          >
            Resume
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="hover:text-[#f09610] transition"
          >
            Contact
          </Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
