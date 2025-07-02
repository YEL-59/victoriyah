import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useSignout } from "@/hook/auth.hook";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const { mutate: signout, isPending } = useSignout();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setToken(token);
      setUser(JSON.parse(userData));
    }
  }, []);

  const navitems = [
    { title: "Home", url: "/" },
    { title: "Browse", url: "/browse" },
    { title: "My Trades", url: "/payment" },
    { title: "Messages", url: "#" },
    { title: "Upload Item", url: "/uploaditem" },
    { title: "Sign In", url: "/sign-in" },
  ];

  const handleSignOut = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    // setUser(null);
    // setToken(null);
    // window.location.href = "/sign-in";
    signout();
  };

  return (
    <nav className="bg-primary py-4 h-[90px] flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-black font-medium text-lg items-center">
          {navitems
            .filter((item) => !(user && item.title === "Sign In"))
            .map((item, index) => (
              <li key={index} className="hover:text-gray-700 transition">
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="ml-4 cursor-pointer">
                  {user?.avatar ? (
                    <AvatarImage src={user.avatar} alt={user?.name || "user"} />
                  ) : null}
                  <AvatarFallback className="flex items-center gap-1">
                    <CircleUserRound className="w-5 h-5" />
                    {/* {user?.name?.charAt(0).toUpperCase() || "U"} */}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 mt-2">
                {/* User Info */}
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-medium text-black">
                    {user?.name || "User Name"}
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    {user?.email}
                  </p>
                </div>

                {/* Dropdown Items */}
                <DropdownMenuItem>
                  <Link to="/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut} disabled={isPending}>
                  {isPending ? "Signing out..." : "Sign Out"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen && <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-navbg shadow-md transition-all duration-300 ease-in-out md:hidden z-[20] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-4 bg-[#b5f169] h-full text-lg">
          <div className="flex items-center justify-between">
            <Link to="/dashboard">
              <img src={logo} alt="Logo" className="h-12" />
            </Link>
            <button
              className="md:hidden text-black focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>
          </div>
          <ul>
            {navitems
              .filter((item) => !(user && item.title === "Sign In"))
              .map((item, index) => (
                <li
                  key={index}
                  className="hover:text-[#315215] transition py-4 px-6 text-scale-110"
                >
                  <Link to={item.url} onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            {user && (
              <>
                <li className="py-4 px-6">
                  <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                    Dashboard
                  </Link>
                </li>
                <li className="py-4 px-6">
                  <button onClick={handleSignOut} disabled={isPending}>
                    {isPending ? "Signing out..." : "Sign Out"}
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
