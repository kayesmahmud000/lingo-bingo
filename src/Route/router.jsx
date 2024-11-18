import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import LearningPage from "../Pages/LearningPage";
import Tutorial from "../Pages/Tutorial";
import AboutUsPage from "../Pages/AboutUsPage";
import AuthLayout from "../Layout/AuthLayout";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
          path:"/startLearning",
          element:<PrivateRoute><LearningPage></LearningPage></PrivateRoute>
        },
        {
          path:"/tutorials",
          element:<Tutorial></Tutorial>
        },
        {
          path:"/aboutUs",
          element:<AboutUsPage></AboutUsPage>
        },
        {
          path:"/myProfile",
          element:<MyProfile></MyProfile>
        }
      ]
    },
    {
      path:"/auth",
      element:<AuthLayout></AuthLayout>,
      children:[
        {
          path:"/auth/login",
          element:<LoginPage></LoginPage>
        },
        {
          path:"/auth/register",
          element:<RegisterPage></RegisterPage>
        }
      ]
    },
    {
      path:"*",
      Element:<h1>Error 404</h1>
    }
    
  ]);

export default router;