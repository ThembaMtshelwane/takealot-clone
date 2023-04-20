import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<div><Home/></div>
    }
])