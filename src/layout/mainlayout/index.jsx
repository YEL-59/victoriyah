import Footer from "@/components/main/shared/footer";
import Navbar from "@/components/main/shared/navbar";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <div >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Mainlayout;
