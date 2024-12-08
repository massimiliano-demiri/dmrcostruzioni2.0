"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logodmr.png"; // Assicurati di avere il logo nella directory public

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={logo} // Utilizzo del logo importato
            alt="DMR Costruzioni Logo"
            width={50} // Logo più grande
            height={50}
            className="rounded-full"
          />
        </div>
        {/* Menu Toggle */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#3B383F] transition-transform ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#3B383F] my-1 transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#3B383F] transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        {/* Links */}
        <ul
          className={`sm:flex gap-6 text-sm font-medium text-[#3B383F] transition-all ${
            menuOpen
              ? "block absolute top-full left-0 w-full bg-white shadow-md p-6"
              : "hidden"
          }`}
        >
          <li className="py-2 sm:py-0">
            <a href="#home" className="hover:text-[#96CA36] transition-colors">
              Home
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a
              href="#services"
              className="hover:text-[#96CA36] transition-colors"
            >
              Servizi
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a
              href="#projects"
              className="hover:text-[#96CA36] transition-colors"
            >
              Progetti
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a href="#about" className="hover:text-[#96CA36] transition-colors">
              Chi siamo
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a
              href="#contact"
              className="hover:text-[#96CA36] transition-colors"
            >
              Contatti
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
