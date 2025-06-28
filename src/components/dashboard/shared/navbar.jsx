import adminImage from "@/assets/icons/admin-icon.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSignout } from "@/hook/auth.hook";
import { useNavigate } from "react-router";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const { mutate: signout, isPending } = useSignout();
  const navigate = useNavigate();

  const getuser = JSON.parse(localStorage.getItem("user"));
  const userName = getuser?.name || "Ivay Jack";
  const userEmail = getuser?.email || "Ivayjack@outlook.com";

  const handleSignOut = () => {
    signout();
    // localStorage.removeItem("user");
    // optionally clear token or session too
    //navigate("/sign-in"); // change this to your login route
  };

  return (
    <div className="border-b border-[#E8E8E8] px-8 py-5 flex justify-between">
      <div className="flex items-center gap-4">
        <button
          className="xl:hidden"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          {sidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                stroke="#315215"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 5H20"
                stroke="#315215"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#315215"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19H20"
                stroke="#315215"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <div className="xl:flex flex-col gap-2 hidden">
          <p className="text-base leading-[164%]">Welcome Back</p>
          <h3 className="text-lg font-semibold leading-[132%] tracking-[-0.32px]">
            {userName}
          </h3>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-4 cursor-pointer">
            <img
              src={adminImage}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col gap-2 text-left">
              <h3 className="text-lg font-semibold leading-[132%] tracking-[-0.32px]">
                {userName}
              </h3>
              <p className="text-base leading-[164%]">{userEmail}</p>
            </div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40 mt-2">
          <DropdownMenuItem onClick={() => navigate("/")}>
            Home
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Navbar;
