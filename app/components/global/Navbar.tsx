/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#38BDF8] text-white px-8 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-3">
        <Image src="/1.jpg" alt="Lasata logo" width={45} height={36} />
      </div>
      <ul className="flex gap-6">
        <li>
          <a href="/" className="hover:text-gray-200">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-200">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="hover:text-gray-200">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-200">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
