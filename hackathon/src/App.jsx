import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CatogCard from "./components/CatogCard/Catogcard";
import Featured from "./components/feature/Feature";
import Card from "./components/g_card/Card";
import T_companies from "./components/T_companies/T_Companies";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Featured/>
        <T_companies />
        <CatogCard/>
        <Card/>
        <Footer />

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