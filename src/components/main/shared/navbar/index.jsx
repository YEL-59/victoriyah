import { useState } from "react";

import logo from "../../../../assets/Logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navitems = [
    { title: "Home", url: "/" },
    { title: "About Beast Mode", url: "/beastmodestore" },
    { title: "Horses", url: "/" },
    { title: "Offerings & Partnerships", url: "/" },
    { title: "Races", url: "/" },
    { title: "Win Photos", url: "/" },
    { title: "Store", url: "/" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <nav className="bg-primary py-[13px] h-[90px] flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>

        <ul className="hidden md:flex gap-6 text-[#FFF5EB] font-normal text-[16px]">
          {navitems.map((item, index) => (
            <li key={index} className="hover:text-[#FFD700] transition">
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 text-[#FFF5EB] text-lg bg-navbg shadow-md">
          {navitems.map((item, index) => (
            <li key={index} className="hover:text-[#FFD700] transition">
              <Link
                to={item.url}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
