import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activityList: {
    category: [],
    categorySelect: "",
  },
  activitySort: {
    sort: "",
    perPage: {
      start: 0,
      end: 0,
    },
  },
};

const activityFilterSlice = createSlice({
  // Changed name for clarity
  name: "activityFilter",
  initialState,
  reducers: {
    addCategory: (state, { payload }) => {
      const isExist = state.activityList.category.includes(payload);
      if (!isExist) {
        state.activityList.category.push(payload);
      } else {
        state.activityList.category = state.activityList.category.filter(
          (item) => item !== payload
        );
      }
    },
    addCategorySelect: (state, { payload }) => {
      state.activityList.categorySelect = payload;
    },
    clearCategory: (state) => {
      state.activityList.category = [];
    },
    addSort: (state, { payload }) => {
      state.activitySort.sort = payload;
    },
    addPerPage: (state, { payload }) => {
      state.activitySort.perPage.start = payload.start;
      state.activitySort.perPage.end = payload.end;
    },
  },
});

export const {
  addCategory,
  addCategorySelect,
  clearCategory,
  addSort,
  addPerPage,
} = activityFilterSlice.actions;

export default activityFilterSlice.reducer;
