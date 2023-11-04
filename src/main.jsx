import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginSplash from './components/defaults/LoginSplash.jsx'
import DatePage from './components/speed-dating/DatePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginSplash />,
  },
  {
    path: "/date",
    element: <DatePage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
