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
import LessonNoPage from "../Pages/LessonNoPage";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPasswordRoute from "./ForgetPasswordRoute";
import UpdateInfo from "../Pages/UpdateInfo";

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
          element:<PrivateRoute><LearningPage></LearningPage></PrivateRoute>,
          loader:()=>fetch('/lesson.json')

        },
        {
          path:"/lesson/:lesson",
          element:<PrivateRoute><LessonNoPage></LessonNoPage></PrivateRoute>,
          loader:()=>fetch('/turkishWord.json')

        },
        {
          path:"/tutorials",
          element:<PrivateRoute><Tutorial></Tutorial></PrivateRoute>
        },
        {
          path:"/aboutUs",
          element:<AboutUsPage></AboutUsPage>
        },
        {
          path:"/myProfile",
          element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
        {
          path:"/updateInfo",
          element:<UpdateInfo></UpdateInfo>
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
      path:"/forgetPassword",
      element:<ForgetPasswordRoute></ForgetPasswordRoute>
    },
    {
      path:"*",
      errorElementElement:<ErrorPage></ErrorPage>
    }
    
  ]);

export default router;