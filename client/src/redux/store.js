import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";

const customMiddleware = (store) => (next) => (action) => {
  // Your custom middleware logic here
  next(action);
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware({ serializableCheck: false }),
      customMiddleware,
    ];
  },
});

export default store;
