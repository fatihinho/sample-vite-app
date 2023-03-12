import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import Settings from "./pages/Settings/settings";
import Login from "./pages/Login/login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard/>,
      },
      {
        path: "settings",
        element: <Settings/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)