import { createBrowserRouter } from "react-router-dom";
import { App } from "../app/App";
import { Home } from "../pages/Home";
import { Result } from "../pages/Result";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "result", element: <Result /> },
    ],
  },
]);
