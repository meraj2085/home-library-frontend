import { Middleware } from "@reduxjs/toolkit";
export const logger: Middleware = (store) => (next) => (action) => {
  console.log(store.getState());
  next(action);
};
