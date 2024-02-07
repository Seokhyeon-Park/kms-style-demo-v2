import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './view/page/LoginPage';
import AppListPage from './view/page/AppListPage';
import SearchPage from './view/page/SearchPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/appList",
    element: <AppListPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
    // errorElement: <ErrorPage />,
  },
]);

root.render( <RouterProvider router={router} /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
