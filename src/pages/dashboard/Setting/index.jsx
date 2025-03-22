import { Link, Outlet, useLocation } from "react-router";

function Setting() {
  const location = useLocation();
  return (
    <div className="flex flex-col md:flex-row items-start h-[calc(100vh-100px)]">
      {/* Sidebar */}
      <div className="border-r border-[#E8E8E8] p-6 md:p-8 flex flex-col gap-2.5 w-full md:max-w-[316px] md:h-full">
        {[
          { name: "General", path: "/dashboard/setting/general" },
          { name: "Privacy", path: "/dashboard/setting/privacy" },
        ].map(({ name, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`w-full py-3 md:py-4 px-5 md:px-6 rounded-[32px] text-lg font-semibold leading-[164%] capitalize text-center md:text-left 
              ${isActive ? "bg-[#B5F16980] text-[#315215]" : "text-[#757575]"}
            `}
            >
              {name}
            </Link>
          );
        })}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 max-w-full md:max-w-[963px] w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Setting;
