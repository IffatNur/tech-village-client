import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import Report from "../Pages/Dashboard/Report/Report";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from '../Pages/Login/Login';
import Payment from "../Pages/Payment/Payment";
import Products from "../Pages/Products/Products";
import Signup from '../Pages/Signup/Signup';
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: (
          <Dashboard></Dashboard>
        ),
      },
      {
        path: "/dashboard/myorders",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/dashboard/allbuyer",
        element: <AllBuyer></AllBuyer>,
      },
      {
        path: "/dashboard/allseller",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/reports",
        element: <Report></Report>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params.id}`),
      },
    ],
  },
]);