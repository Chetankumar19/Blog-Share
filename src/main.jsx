import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SignIn from "./components/SignIn";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import MostViewBlog from "./components/InsideBody/MostViewBlog.jsx";
import EditorialList from "./components/InsideBody/EditorialList.jsx";
import ChatGPTSearch from "./components/InsideBody/ChatGptSearch.jsx";
// import { UserProvider } from "./utils/UserContext.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/top-rated",
        element: <MostViewBlog />,
      },
      {
        path: "/editorial",
        element: <EditorialList />,
      },
      {
        path: "/search",
        element: <ChatGPTSearch />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UserProvider> */}
      <RouterProvider router={appRouter} />
    {/* </UserProvider> */}
  </StrictMode>
);
