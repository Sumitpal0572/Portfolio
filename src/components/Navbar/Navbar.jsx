import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // check scroll and change navbar background

  useEffect(() => {
    const handlescroll = () => {
      isScrolled(wndow.scrollY > 50);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  // Smooth scroll function

  const handleMenuItemsClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transtition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/*   logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Sumit</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Pal</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Daesktop menu  */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor:default hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }
            `}
            >
              <button onClick={() => handleMenuItemsClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* social media icons  */}

        <div className="hidden md-flex space-x-4 ">
          <a
            href="https://github.com/Sumitpal0572/Portfolio"
            target="_black"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          ></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
