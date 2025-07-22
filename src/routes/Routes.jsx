import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "../components/Layout";
import Product from "../pages/admin/Product";
import AddProduct from "../pages/admin/Addproduct";
import ForgotPassword from "../pages/Forgotpassword";

export const routes = createBrowserRouter([
    {
        path:"/",
        element: <Login/>
    },
     {
        path:"/login",
        element: <Login/>
    },
     {
        path:"/signup",
        element: <Signup/>
    },
    {
        path: "/forgotpassword",
        element:<ForgotPassword/>
    },
    {
        path: "/admin",
        element: <Layout/>,
        children: [
            {
                path: "list",
                element: <Product/>
            },
            {
                path: "add",
                element: <AddProduct/>
            }
        ]
    }

])