import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Home from "./page/Home";
import Aboutus from "./page/Aboutus";
import { RouterProvider } from "react-router";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/about",
    element:<Aboutus/>
  },
  {
    path: "/products",
    element:<ProductList/>
  }
])
function App() {

  return (
    <div className="p-5 m-2">
      <RouterProvider router={browserRouter}/>
    </div>
  );
}

export default App;
