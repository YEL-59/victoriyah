import { Button } from "@/components/ui/button";

import singupImg from "../../assets/signin.png";

import { Link } from "react-router";

const PasswordSetSuccessful = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="flex-1">
        <div className="w-full  mx-auto flex-1  p-8  rounded-lg">
          <div className="text-start mb-6">
            <h1 className="text-4xl font-bold">Password set successfully</h1>
            <p className="text-sm text-gray-600 !max-w-lg">
              You can now use your new password to log in to your account
            </p>
          </div>
          <div>
            <Link to="/">
              {" "}
              <Button className="w-xl bg-foreground text-white rounded-full">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center flex-1 bg-primary h-screen p-10">
        <div className="max-w-[760px] w-full mx-auto">
          <h1 className="auth-title mb-6">
            Join the Trading Community – Start Swapping Today!
          </h1>
          <p className="auth-desc">
            Connect with a community of traders and swap items effortlessly.
            Post what you have, find what you need, and make fair trades—no
            money involved. Start trading today!
          </p>
          <div className="mt-16 rounded-[32px] overflow-hidden">
            <img
              src={singupImg}
              alt="Diapers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSetSuccessful;
