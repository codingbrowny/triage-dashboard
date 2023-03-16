import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "../features/delete-doctor/review-slice";

// Redux Store
export const store = configureStore({
  reducer: {
    review: reviewSlice
  },
});

// Exporting types based on the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
