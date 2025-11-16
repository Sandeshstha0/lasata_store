"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  FiHome,
  FiInfo,
  FiMail,
  FiMenu,
  FiX,
  FiChevronDown,
  FiUsers,
  FiAward,
  FiBriefcase,
} from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: FiHome },
    {
      href: "#",
      label: "About Us",
      icon: FiInfo,
      dropdown: [
        { href: "/about/about", label: "About", icon: FiUsers },
        { href: "/about/nischal", label: "Nischal Shrestha", icon: FiAward },
        { href: "/about/history", label: "History", icon: FiBriefcase },
      ],
    },
     { href: "/headship", label: "Headship", icon: IoPerson  },
    {
      href: "/newsandupdate",
      label: "News And Updates",
      icon: MdOutlineTipsAndUpdates,
    },
    
    { href: "/gallery", label: "Gallery", icon: GrGallery },
    { href: "/contact", label: "Contact", icon: FiMail },
  ];

  return (
    <>
      {/* Fixed Navbar with reduced height */}
      <nav className="fixed top-0 left-0 right-0 bg-blue-800 text-white px-4 sm:px-6 py-3 flex justify-between items-center shadow-lg z-50">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/1.1.jpg"
              alt="Lasata logo"
              width={80}
              height={32}
              className=""
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            if (item.dropdown) {
              return (
                <li key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    className="hover:text-gray-200 transition-colors duration-200 flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-[#0EA5E9]"
                  >
                    <Icon size={16} />
                    {item.label}
                    <FiChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isAboutDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isAboutDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-50">
                      {item.dropdown.map((dropdownItem) => {
                        const DropdownIcon = dropdownItem.icon;
                        return (
                          <a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => setIsAboutDropdownOpen(false)}
                          >
                            <DropdownIcon size={16} className="text-blue-900" />
                            {dropdownItem.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-gray-200 transition-colors duration-200 flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#0EA5E9]"
                >
                  <Icon size={16} />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1 rounded-lg hover:bg-[#0EA5E9] transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-[#0EA5E9]">
          <div className="flex items-center gap-2">
            <Image
              src="/1.jpg"
              alt="Lasata logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold text-base">Lasata</span>
          </div>
        </div>

        <ul className="p-3 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            if (item.dropdown) {
              return (
                <li key={item.label} className="border-b border-[#0EA5E9] pb-2">
                  <div className="flex items-center gap-3 p-3 rounded-lg text-base font-medium">
                    <Icon size={18} />
                    {item.label}
                  </div>
                  <ul className="ml-8 mt-2 space-y-2">
                    {item.dropdown.map((dropdownItem) => {
                      const DropdownIcon = dropdownItem.icon;
                      return (
                        <li key={dropdownItem.href}>
                          <a
                            href={dropdownItem.href}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#0EA5E9] transition-colors duration-200 text-sm"
                            onClick={toggleMenu}
                          >
                            <DropdownIcon size={16} />
                            {dropdownItem.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#0EA5E9] transition-colors duration-200 text-base"
                  onClick={toggleMenu}
                >
                  <Icon size={18} />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Reduced spacer to match smaller navbar height */}
      <div className="h-14 md:h-14"></div>
    </>
  );
}
