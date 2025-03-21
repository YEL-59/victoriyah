import DashboardLayout from "@/layout/dashlayout";
import Mainlayout from "@/layout/mainlayout";
import Createnewpassword from "@/pages/auth/createnewpassword";
import PasswordSetSuccessful from "@/pages/auth/passwordSetSuccessful";

import Resetpassword from "@/pages/auth/resetpassword";
import Resetpasswordcode from "@/pages/auth/resetpasswordcode";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import Verification from "@/pages/auth/Verification";
import Verificationsuccess from "@/pages/auth/verificationsuccess";
import ExchangeRequest from "@/pages/dashboard/exchange-request";
import Favourite from "@/pages/dashboard/Favourite";
import Messages from "@/pages/dashboard/Messages";
import MyPostItems from "@/pages/dashboard/my-post-items";
import Notification from "@/pages/dashboard/Notification";
import Setting from "@/pages/dashboard/Setting";
import General from "@/pages/dashboard/Setting/General";
import Privacy from "@/pages/dashboard/Setting/Privacy";
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
      { index: true, element: <Home /> },
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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MyPostItems />,
      },
      {
        path: "exchange-request",
        element: <ExchangeRequest />,
      },
      {
        path: "favourite",
        element: <Favourite />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "setting",
        element: <Setting />,
        children: [
          {
            index: true, // This makes "general" the default route
            element: <General />,
          },
          {
            path: "general",
            element: <General />,
          },
          {
            path: "privacy",
            element: <Privacy />,
          },
        ],
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
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/verificationsuccess",
    element: <Verificationsuccess />,
  },
  {
    path: "/resetpassword",
    element: <Resetpassword />,
  },
  {
    path: "resetpasswordcode",
    element: <Resetpasswordcode />,
  },
  {
    path: "/passwordsetsuccessful",
    element: <PasswordSetSuccessful />,
  },
  {
    path: "/createnewpassword",
    element: <Createnewpassword />,
  },
]);
