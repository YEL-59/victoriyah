import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const navitems = [
    { title: "Home", url: "/" },
    { title: "Browse", url: "/browse" },
    { title: "My Trades", url: "#" },
    { title: "Messages", url: "#" },
    { title: "Sell", url: "/sell" },
    { title: "Sign In", url: "/sign-in" },
  ];

  return (
    <nav className="bg-primary py-4 h-[90px] flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link to="/dashboard">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-black font-medium text-lg">
          {navitems.map((item, index) => (
            <li key={index} className="hover:text-gray-700 transition">
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state
        >
          {!isOpen && <Menu size={28} />}{" "}
          {/* Show Menu or X icon based on isOpen */}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-navbg shadow-md transition-all duration-300 ease-in-out md:hidden z-[20] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-4 text-#315215 bg-[#b5f169] h-full text-lg">
          <div className="flex items-center justify-between">
            <Link to="/dashboard">
              <img src={logo} alt="Logo" className="h-12" />
            </Link>
            <button
              className="md:hidden text-black focus:outline-none"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              <X size={28} />
            </button>
          </div>
          <ul>
            {navitems.map((item, index) => (
              <li
                key={index}
                className="hover:text-[#315215] transition py-4 px-6 text-scale-110"
              >
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
      </div>
    </nav>
  );
};

export default Navbar;
