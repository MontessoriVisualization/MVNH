import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Login from "./Layouts/login/MainLogin";
import Class12Maths from "./Layouts/classes/class12/class12MathsGrid";
import Class12biology from "./Layouts/classes/class12/class12Biology";
import Class12Physics from "./Layouts/classes/class12/class12PhysicsGrid";
import Class12chemistry from "./Layouts/classes/class12/class12Chemistry";
import Class12Computer from "./Layouts/classes/class12/class12Computer";
import Class11Maths from "./Layouts/classes/class11/class11Maths";
import Class11Physics from "./Layouts/classes/class11/class11Physic";
import Class11chemistry from "./Layouts/classes/class11/class11Chemistry";
import Class11Computer from "./Layouts/classes/class11/class11Computer";

import "./index.css";
import App from "./App";
import Header from "./Layouts/header/Header";
import Footer from "./Layouts/body/FooterGrid";
import Class11Biology from "./Layouts/classes/class11/class11Biology";
import Class11 from "./Layouts/classes/class11/ClassesMain";
import Class12 from "./Layouts/classes/class12/Class12grid";
import Profile from "./Component/profile";
import Codexe from "./Layouts/programing/webtechnology/compiler";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <App />
        </>
      ),
      errorElement: <div>Error: Page Not Found</div>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/class12maths",
      element: (
        <>
          <Header />
          <Class12Maths />
          <Footer />
        </>
      ),
    },
    {
      path: "/class12physics",
      element: (
        <>
          <Header />
          <Class12Physics />
          <Footer />
        </>
      ),
    },
    {
      path: "/class12chemistry",
      element: (
        <>
          <Header />
          <Class12chemistry />
          <Footer />
        </>
      ),
    },
    {
      path: "/class12biology",
      element: (
        <>
          <Header />
          <Class12biology />
          <Footer />
        </>
      ),
    },
    {
      path: "/class12computer",
      element: (
        <>
          <Header />
          <Class12Computer />
          <Footer />
        </>
      ),
    },
    {
      path: "/class11maths",
      element: (
        <>
          <Header />
          <Class11Maths />
          <Footer />
        </>
      ),
    },
    {
      path: "/class11physic",
      element: (
        <>
          <Header />
          <Class11Physics />
          <Footer />
        </>
      ),
    },
    {
      path: "/class11chemistry",
      element: (
        <>
          <Header />
          <Class11chemistry />
          <Footer />
        </>
      ),
    },
    {
      path: "/class11computer",
      element: (
        <>
          <Header />
          <Class11Computer />
          <Footer />
        </>
      ),
    },
    {
      path: "/class11biology",
      element: (
        <>
          <Header />
          <Class11Biology />
          <Footer />
        </>
      ),
    },
    {
      path: "/class11",
      element: (
        <>
          <Header />
          <Class11 />
          <Footer />
        </>
      ),
    },
    {
      path: "/class12",
      element: (
        <>
          <Header />
          <Class12 />
          <Footer />
        </>
      ),
    },
    {
      path: "/user/profile",
      element: (
        <>
          <Header />
          <Profile />
          <Footer />
        </>
      ),
    },
    {
      path: "/fos",
      element: (
        <>
          <Codexe />
        </>
      ),
    },
  ],
  {
    basename: "/MVNH",
  }
);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find root element");

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
