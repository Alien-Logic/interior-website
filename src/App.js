import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  useLocation
} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Pricing from "./pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pricing",
    element: <Pricing />
  }
]);

function App() {

  const [prevLoc, setLocation] = useState();

  const ReloadOnRouteChange = () => {
    console.log("Hello");
    console.log(prevLoc)
    const location = useLocation();
    console.log(location)
  
    useEffect(() => {
      // const handleRouteChange = () => {
      //   window.location.reload();
      // };
  
      if (location.pathname !== prevLoc) {
        console.log(location.pathname)
        setLocation(location.pathname);
        console.log(prevLoc)
        // window.location.reload();
        // handleRouteChange();
      }
    }, []);
  
    return null;
  };

  return (
    <div className="App">
      <BrowserRouter router={router} forceRefresh={true}>
        <Navbar />
      </BrowserRouter>
      <RouterProvider router={router}>
      </RouterProvider>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
