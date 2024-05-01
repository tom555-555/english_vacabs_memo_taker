import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import SearchWordPage from "./components/pages/SearchWordPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/app",
    element: <SearchWordPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
