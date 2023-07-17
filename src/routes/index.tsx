import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import App from "../App";
import SignUp from "../pages/SignUp";
import AllBooks from "../pages/AllBooks";
import AddNew from "../pages/AddNew";
import WishList from "../pages/WishList";
import ViewDetails from "../pages/ViewDetails";
import Reading from "../pages/Reading";
import PrivateRoute from "./privateRoute";
import EditBook from "../pages/EditBook";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allBooks",
        element: <AllBooks />,
      },
      {
        path: "/addNew",
        element: (
          <PrivateRoute>
            <AddNew />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
      {
        path: "/reading",
        element: (
          <PrivateRoute>
            <Reading />
          </PrivateRoute>
        ),
      },
      {
        path: "/details",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/editBook",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
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
