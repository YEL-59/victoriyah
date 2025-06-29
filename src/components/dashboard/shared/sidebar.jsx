import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import logo from "@/assets/Logo.png";
import managePost from "@/assets/icons/manage-post.svg";
import exchange from "@/assets/icons/exchange.svg";
import favourite from "@/assets/icons/favourite.svg";
import messages from "@/assets/icons/messages.svg";
import notification from "@/assets/icons/notification.svg";
import setting from "@/assets/icons/setting.svg";
import closeButton from '@/assets/icons/delete-tags.svg';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      console.log("clicked!")
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpen]);

  const sidebars = [
    {
      label: "manage post items",
      icon: managePost,
      path: "/dashboard",
    },
    {
      label: "Exchange Request",
      icon: exchange,
      path: "exchange-request/",
    },
    {
      label: "favourite",
      icon: favourite,
      path: "favourite/",
    },
    {
      label: "messages",
      icon: messages,
      path: "messages/",
    },
    {
      label: "notification",
      icon: notification,
      path: "notification/",
    },
    {
      label: "setting",
      icon: setting,
      path: "setting/",
    },
  ];

  return (
    <div
      ref={sidebarRef}
      className={`border-r border-[#E8E8E8] px-5 md:px-6 lg:px-8 py-6 flex-shrink-0 h-full fixed top-0 xl:static xl:shadow-none bg-background z-10 duration-500 ${!sidebarOpen ? "-left-full" : "left-0 shadow-lg"
        }`}
    >
      <div className="flex flex-col gap-10 sm:gap-14 md:16 lg:gap-20 items-center">
        <div className="flex items-center justify-between gap-4 w-full">
          <img src={logo} className="w-28 md:w-32 lg:w-[153px]" alt="logo" />
          <img onClick={()=>setSidebarOpen(false)} src={closeButton} alt="" className=" xl:hidden"/>
        </div>
        
        <div className="flex flex-col gap-2.5 md:gap-4">
          {sidebars.map((sidebar, index) => (
            <NavLink
              key={index}
              to={sidebar.path}
              className={({ isActive }) =>
                `flex items-center gap-3 md:gap-4 rounded-[32px] px-6 md:px-8 lg:px-10 py-3 md:py-4 ${isActive ? "bg-[#B5F169cc]" : "bg-transparent"
                }`
              }
              end
              onClick={() => setSidebarOpen(false)}
            >
              <img src={sidebar.icon} className="w-5 lg:w-6 " alt={sidebar.label} />
              <p className="text-base md:text-lg font-semibold leading-[164%] capitalize">
                {sidebar.label}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;