import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import Home from "../Home/Home";
import Root from "../MainLayout/Root";
import MyCart from "../MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/my-cart",
        element: <MyCart />,
      },
    ],
  },
]);

export default router;
