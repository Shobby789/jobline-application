import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import jobReducer from "./reducer/jobSlice";

const customMiddleware = (store) => (next) => (action) => {
  // Your custom middleware logic here
  next(action);
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware({ serializableCheck: false }),
      customMiddleware,
    ];
  },
});

export default store;
