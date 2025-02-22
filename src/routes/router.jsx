import Mainlayout from "@/layout/mainlayout";
import Home from "@/pages/main/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [{ path: "", element: <Home /> }],
  },
]);
