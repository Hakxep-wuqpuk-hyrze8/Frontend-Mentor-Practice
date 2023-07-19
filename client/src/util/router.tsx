import { createBrowserRouter } from "react-router-dom";

import Root from "@/root";
import ErrorPage from './../pages/Error/index';
import Home from './../pages/Home/index';
import Product, { productLoader } from "@/pages/product";
import LoadingPage from "@/pages/Loading";

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
        loader: productLoader,
        element: <Product />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "/loading",
        element: <LoadingPage />,
      }
    ],
  },
])

export default router;