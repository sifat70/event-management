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
import AuthProvider from './providers/AuthProvider';
import CategoryDetails from './Service/CategoryDetails/CategoryDetails';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import About from './About/About';
import Programme from './Programme/Programme';

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
        element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
        loader: () => fetch('/cetegory.json')
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/programme",
        element: <Programme></Programme>
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
