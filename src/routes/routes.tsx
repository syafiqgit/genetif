import AboutUs from "@/pages/about-us";
import Blogs from "@/pages/blogs";
import Home from "@/pages/home";
import Services from "@/pages/services";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Routes() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/services", element: <Services /> },
    { path: "blogs", element: <Blogs /> },
  ]);
  return <RouterProvider router={router} />;
}
