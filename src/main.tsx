import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Login from "./Layouts/login/MainLogin";
import Class12Maths from "./Layouts/classes/class12/class12MathsGrid";
import Class12Physics from "./Layouts/classes/class12/class12PhysicsGrid";
import Class12chemistry from "./Layouts/classes/class12/class12Chemistry";
import Class12Computer from "./Layouts/classes/class12/class12Computer";
import "./index.css";
import App from "./App";
import Header from "./Layouts/header/Header";

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
    path: "/class12physics",
    element: (
      <>
        <Header /> <Class12Physics></Class12Physics>
      </>
    ),
  },
  {
    path: "/class12chemistry",
    element: (
      <>
        <Header /> <Class12chemistry></Class12chemistry>
      </>
    ),
  },
  {
    path: "/class12computer",
    element: (
      <>
        <Header /> <Class12Computer></Class12Computer>
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
