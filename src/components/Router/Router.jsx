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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

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
        loader: () => fetch("../../../public/brandData.json"),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
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
        element: <BrandProducts />,
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
    ],
  },
]);

export default router;
