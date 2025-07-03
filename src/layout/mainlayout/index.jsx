// import Footer from "@/components/main/shared/footer";
// import Navbar from "@/components/main/shared/navbar";
// import { Outlet } from "react-router";

// const Mainlayout = () => {
//   return (
//     <>
//       <Navbar />
//       <div >
//         <Outlet />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Mainlayout;
import Footer from "@/components/main/shared/footer";
import Navbar from "@/components/main/shared/navbar";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Mainlayout;
