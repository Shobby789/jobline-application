import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apijson from "../../api/api";

export const getJobs = createAsyncThunk("api/get-all-jobs", async () => {
  const result = await apijson.get("/api/get-all-jobs");
  // console.log("All jobs >> ", result.data.data);
  return result.data.data;
});

export const getJobDetails = createAsyncThunk(
  "api/get-job-details",
  async (_id) => {
    const result = await apijson.get(`api/get-job-details/${_id}`);
    return result.data;
  }
);

export const applyOnJob = createAsyncThunk(
  "api//application-form",
  async (data) => {
    const result = await apijson.post("/api/application-form", data);
    return result.data;
  }
);

const initialState = {
  jobs: [],
  loading: false,
  error: null,
  jobdetails: null,
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

    // getJobDetals
    addCase(getJobDetails.pending, (state, action) => {
      state.loading = true;
    });
    addCase(getJobDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.jobdetails = action.payload;
    });
    addCase(getJobDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default jobSlice.reducer;
