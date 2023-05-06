import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import GlobalStyle from './style/global';

import store from './app/store';
import { Provider } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root from './root';

// page
import ErrorPage from './pages/error-page';
import Home from './pages/home/Home';

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
