import apijson from "../../api/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signinUser = createAsyncThunk(
  "auth/api/login-user",
  async ({ email, password }) => {
    const result = await apijson.post("auth/api/login-user", {
      email,
      password,
    });
    console.log("signinUser >> ", result.data);
    localStorage.setItem("jobline-user", JSON.stringify(result.data.data));
    return result.data;
  }
);

export const createUser = createAsyncThunk(
  "auth/create-user",
  async ({ username, email, password }) => {
    const result = await apijson.post("auth/api/create-user", {
      username,
      email,
      password,
    });
    console.log("createUser >> ", result.data.status);
  }
);

export const logoutUser = createAsyncThunk("user/logout", async () => {});

export const checkIsAuthenticated = createAsyncThunk(
  "user/isAuthenticated",
  async () => {}
);

const initialState = {
  isAuthenticated: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOutUser: (state) => initialState,
  },
  extraReducers: ({ addCase }) => {
    // login user
    addCase(signinUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(signinUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    });
    addCase(signinUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });

    // create user
    addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    });
    addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });

    // logout user
    addCase(logoutUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(logoutUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });
    addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
    });

    // checkIsAuthenticated
    addCase(checkIsAuthenticated.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(checkIsAuthenticated.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    });
    addCase(checkIsAuthenticated.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
export const { signOutUser } = authSlice.actions;
