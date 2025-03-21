import { Link, Outlet } from "react-router";

function Setting() {
  return (
    <div className="flex items-start h-[calc(100vh-100px)]">
      <div className="border-r border-[#E8E8E8] p-8 flex flex-col gap-2.5 w-full max-w-[316px] h-full">
        <Link
          to="/dashboard/setting/general"
          className="w-full py-4 px-6 rounded-[32px] bg-[#B5F16980] text-lg text-[#315215] font-semibold leading-[164%] capitalize"
        >
          General
        </Link>
        <Link
          to="/dashboard/setting/privacy"
          className="w-full py-4 px-6 rounded-[32px] text-lg text-[#757575] font-semibold leading-[164%] capitalize"
        >
          Privacy
        </Link>
      </div>
      <div className="p-8 max-w-[963px] w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Setting;
