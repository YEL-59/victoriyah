import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../../../../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navitems = [
    { title: "Home", url: "/" },
    { title: "Browse", url: "/browse" },
    { title: "My Trades", url: "#" },
    { title: "Messages", url: "#" },
    { title: "Sell", url: "/#" },
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
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[90px] left-0 w-full bg-navbg shadow-md transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col gap-4 p-4 text-white bg-green-500 h-screen text-lg">
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
