// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";

// import { RouterProvider } from "react-router";
// import { router } from "./routes/router";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { Toaster } from "react-hot-toast";

// const queryClient = new QueryClient();
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       {" "}
//       <RouterProvider router={router}></RouterProvider>
//       <Toaster />
//     </QueryClientProvider>
//   </StrictMode>
// );

import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function AppWrapper() {
  useEffect(() => {
    fetch("https://admin.gogobarter.com/api/header-footer")
      .then((res) => res.json())
      .then((data) => {
        const faviconUrl = data?.data?.favicon;
        if (faviconUrl) {
          setFavicon(faviconUrl);
        }
      })
      .catch((err) => {
        console.error("Failed to load favicon:", err);
      });
  }, []);

  const setFavicon = (url) => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = url;
  };

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppWrapper />
    </QueryClientProvider>
  </StrictMode>
);
