import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CatogCard from "./components/CatogCard/Catogcard";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Footer />
        <CatogCard/>

      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navbar />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;

}

export default App;