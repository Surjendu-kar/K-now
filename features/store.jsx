import { configureStore } from "@reduxjs/toolkit";
import activityFilterReducer from "./activityFilter"; 

const store = configureStore({
  reducer: {
    activityFilter: activityFilterReducer,
  },
});

export default store;
