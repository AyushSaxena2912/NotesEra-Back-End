/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Courses from "./Pages/Courses/Courses.js";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/dashboard";
import AddData from "./components/AddData/AddData";
import EditData from "./components/Edit/EditData";
import VideoSection from "./Pages/videoSectionSearch/videosection.jsx";
import PlaycourseVideos from "./Pages/playVideoSection/playcoursevideos.jsx";
import "./Pages/playVideoSection/components/UnitDesc/unitdesc.css";
import Privacypolicy from "./Pages/privacypolicy/Privacypolicy.jsx";
import Termsandconditions from "./Pages/TermsAndConditions/Terms.jsx";
import VideoLogin from "./Pages/VideoDashboard/videoLogin/VideoLogin.jsx";
import VideoDashboard from "./Pages/VideoDashboard/dashboard/VideoDashboard.jsx";
import Premium from "./Pages/Premium/Premium.jsx";
import { checkNotesAuthLoader, checkVideoAuthLoader } from "./utils/auth.js";
import HackerBhai from "./Pages/BlankPage/HackerBhai.js";
import PremiumModulesPage from "./Pages/PremiumModules/PremiumModulesPage.jsx";
import ModulePage from "./Pages/PremiumModules/ModulePage/ModulePage.jsx";
// import axios from 'axios';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PremiumModulesPage />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/signup9875",
      element: <SignUp />,
    },
    {
      path: "/noteslogin",
      element: <Login />,
    },
    {
      path: "/hacker-Samajne-wale-ke-liye-msg",
      element: <HackerBhai />,
    },
    {
      path: "/noteslogin/dashboard",
      element: <Dashboard />,
      loader: checkNotesAuthLoader,
    },
    {
      path: "/noteslogin/dashboard/add-data",
      element: <AddData />,
      loader: checkNotesAuthLoader,
    },
    {
      path: "/noteslogin/dashboard/edit-data/:id",
      element: <EditData />,
      loader: checkNotesAuthLoader,
    },
    {
      path: "/videologin",
      element: <VideoLogin />,
    },
    {
      path: "/video/dashboard",
      element: <VideoDashboard />,
      loader: checkVideoAuthLoader,
    },
    {
      path: "/videosection",
      element: <VideoSection />,
    },
    {
      path: "/playcoursevideo/:id/:name",
      element: <PlaycourseVideos />,
    },
    {
      path: "/privacypolicy",
      element: <Privacypolicy />,
    },
    {
      path: "/terms",
      element: <Termsandconditions />,
    },
    {
      path: "/premium",
      element: <Premium />,
    },
    // {
    // path: "/premium-modules",
    // element: <PremiumModulesPage />,
    // },
    {
      path: "/premium-modules/:repoId/:moduleSlug",
      element: <ModulePage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
