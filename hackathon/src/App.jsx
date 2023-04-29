import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CatogCard from "./components/CatogCard/Catogcard";
import Feature from "./components/feature/Feature";
import Card from "./components/g_card/Card";
import T_companies from "./components/t_companies/T_Companies";
import Home from "./pages/home/Home";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        
        <Navbar />
        <Feature/>
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
          element: <Home />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;

}

export default App;