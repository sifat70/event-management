import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import ErrorPage from './ErrorPage/ErrorPage';
import Service from './Service/Service';
import AuthProvider from './providers/AuthProvider';
import CategoryDetails from './Service/CategoryDetails/CategoryDetails';
import PrivateRoute from './PrivateRoutes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/cetegory.json')
      },
      {
        path: "/category/:id",
        element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>
      },
      {
        path: "/service",
        element: <Service></Service>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
