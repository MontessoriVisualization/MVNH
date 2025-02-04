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
import Class11Biology from "./Layouts/classes/class11/class11Biology";

const router = createBrowserRouter([
  {
    path: "/MVNH",
    element: <App />,
    errorElement: <div>Error: Page Not Found</div>,
  },
  {
    path: "/MVNH/login",
    element: <Login />,
  },
  {
    path: "/MVNH/class12maths",
    element: (
      <>
        <Header /> <Class12Maths></Class12Maths>
      </>
    ),
  },
  {
    path: "/MVNH/class12physics",
    element: (
      <>
        <Header /> <Class12Physics></Class12Physics>
      </>
    ),
  },
  {
    path: "/MVNH/class12chemistry",
    element: (
      <>
        <Header /> <Class12chemistry></Class12chemistry>
      </>
    ),
  },
  {
    path: "/MVNH/class12biology",
    element: (
      <>
        <Header /> <Class12biology></Class12biology>
      </>
    ),
  },
  {
    path: "/MVNH/class12computer",
    element: (
      <>
        <Header /> <Class12Computer></Class12Computer>
      </>
    ),
  },
  {
    path: "/MVNH/class11maths",
    element: (
      <>
        <Header /> <Class11Maths></Class11Maths>
      </>
    ),
  },
  {
    path: "/MVNH/class11physic",
    element: (
      <>
        <Header /> <Class11Physics></Class11Physics>
      </>
    ),
  },
  {
    path: "/MVNH/class11chemistry",
    element: (
      <>
        <Header /> <Class11chemistry></Class11chemistry>
      </>
    ),
  },
  {
    path: "/MVNH/class11computer",
    element: (
      <>
        <Header /> <Class11Computer></Class11Computer>
      </>
    ),
  },
  {
    path: "/MVNH/class11biology",
    element: (
      <>
        <Header /> <Class11Biology></Class11Biology>
      </>
    ),
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find root element");

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
