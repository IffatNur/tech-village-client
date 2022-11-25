import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import Home from "../Pages/Home/Home";
import Login from '../Pages/Login/Login';
import Products from "../Pages/Products/Products";
import Signup from '../Pages/Signup/Signup';
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: <Products></Products>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:"/dashboard",
        element: <MyBooking></MyBooking>
      },
      {
        path:"/dashboard/addproduct",
        element: <AddProduct></AddProduct>
      },
    ]
  },
]);