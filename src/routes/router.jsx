import Mainlayout from "@/layout/mainlayout";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import Browse from "@/pages/main/browse";
import Home from "@/pages/main/Home";
import Payment from "@/pages/main/payment";
import PaymentDetails from "@/pages/main/paymentDetails";
import Productdetails from "@/pages/main/productdetails/index.jsx";
import Sell from "@/pages/main/sell";
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
      {
        path: "sell",
        element: <Sell />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentdetails",
        element: <PaymentDetails />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);
