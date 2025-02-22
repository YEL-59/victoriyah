import Footer from "@/components/main/footer";
import Navbar from "@/components/main/navbar";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Mainlayout;
