import { createSlice } from "@reduxjs/toolkit";
import { filterProps } from "../../components/CustomTable/types"; 

const initialState: filterProps = {
  search: "",
  filter: "",
};

const slice = createSlice({
  name: "tableFilter",
  initialState,
  reducers: {
    updateSearchValue: (state, action) => {
      state.search = action.payload;
    },
    updateFilterParam: (state, action) => {
      state.filter = action.payload;
    },
    resetAllParams: (state) => {
      state.search = initialState.search;
      state.filter = initialState.filter;
    },
  },
});

export const {
  updateSearchValue,
  updateFilterParam,
  resetAllParams,
} = slice.actions;
export default slice.reducer;
