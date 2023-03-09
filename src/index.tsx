import React from 'react';
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
import ErrorPage from './pages/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
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
