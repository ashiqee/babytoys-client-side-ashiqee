import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../MainLayout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
