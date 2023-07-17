
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
