import { createBrowserRouter } from "react-router-dom";

import Root from "@/root";
import ErrorPage from './../pages/Error/index';
import Home from './../pages/Home/index';
import Product from "@/pages/product";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/collections",
        element: <h1>Collections</h1>,
      },
      {
        path: "/product/:id",
        element: <Product />,
      }
    ],
  },
])

export default router;