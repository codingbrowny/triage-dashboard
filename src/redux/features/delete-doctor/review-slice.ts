import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ManageReviewsData } from "../../../@core/utils/data";

const { Data } = ManageReviewsData
type reviewType = typeof Data[0]

const initialState = {
    openModal: false,
    review: Data[0]
}

const reviewSlice = createSlice({
  name: "Review Details",
  initialState,
  reducers: {
    getReviewData(state, action: PayloadAction<{openModal:boolean, review:reviewType}>) {
      state.openModal = action.payload.openModal;
      state.review = action.payload.review;
    },
  },
});

export const { getReviewData } = reviewSlice.actions;
export default reviewSlice.reducer;
