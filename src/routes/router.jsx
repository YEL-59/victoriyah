import Mainlayout from "@/layout/mainlayout";
import SignupPage from "@/pages/auth/SignUp";
import Browse from "@/pages/main/browse";
import Home from "@/pages/main/Home";
import Productdetails from "@/pages/main/productdetails.js";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "Productdetails",
        element: <Productdetails />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignupPage />
  }
]);
