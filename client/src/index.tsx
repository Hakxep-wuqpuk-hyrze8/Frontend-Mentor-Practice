import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

import store from './app/store';
import { Provider } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root from './root';

// page
import ErrorPage from './pages/Error';
import Home from './pages/Home';

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
        path: "collections",
        element: <h1>Collections</h1>,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
