import React from "react";
//import {useContext} from "react";
import Login from "./pages/login/login.js";
import Register from "./pages/register/register.js";
import Home from "./pages/home/home.js";
import Profile from "./pages/profile/profile.js";
import { Outlet, Navigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/navbar/navbar.js';
//import { AuthContext } from "./context/authContext";
import Rightbar from './components/rightbar/rightbar.js';

function App() {
  
  //const { currentUser } = useContext(AuthContext);
const currentUser=false;

  const Layout = () => { 
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children; 
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
