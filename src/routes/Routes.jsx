import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../components/Layout";
import Product from "../pages/admin/Product";
import Addproduct from "../pages/admin/Addproduct";
import SignUp from "../pages/Signup";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "list",
        element: <Product />,
      },
      {
        path: "add",
        element: <Addproduct />,
      },
      {
        path: "edit/:id",
        element: <Addproduct />,
      },
    ],
  },
]);
