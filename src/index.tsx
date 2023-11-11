import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import MainPage from './pages/MainPage';
  

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <RouterProvider router={router} />

  </>
  
);


