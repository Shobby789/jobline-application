import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apijson from "../../api/api";

export const getJobs = createAsyncThunk("api/get-all-jobs", async () => {
  const result = await apijson.get("/api/get-all-jobs");
  // console.log("All jobs >> ", result.data.data);
  return result.data.data;
});

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getJobs.pending, (state) => {
      state.loading = true;
    });
    addCase(getJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    });
    addCase(getJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default jobSlice.reducer;
