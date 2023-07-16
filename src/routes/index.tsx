import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import App from "../App";
import SignUp from "../pages/SignUp";
import AllBooks from "../pages/AllBooks";
import AddNew from "../pages/AddNew";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        // index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: '/allBooks',
        element: <AllBooks/>,
      },
      {
        path: "/addNew",
        element: <AddNew />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
