import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import Home from "../Home/Home";
import ProductDetails from "../Home/Products/ProductDetails";
import SignIn from "../Login/SignIn";
import Root from "../MainLayout/Root";
import MyCart from "../MyCart/MyCart";
import SignUp from "../Registration/SignUp";
import PrivateRoute from "./PrivateRoute";
import BrandProducts from "../Home/Brands/BrandProducts";
import UpdateProduct from "../Home/Products/UpdateProduct";
import DashBoard from "../DashBoard/DashBoard";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/brand"),
      },

      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/cart/:id}",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },
      {
        path: "/cart/:id",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },
      {
        path: `/details/:id`,
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },

      {
        path: "/toysBrand/:id",
        element: (
          <PrivateRoute>
            <BrandProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toysBrand/${params.id}`),
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
