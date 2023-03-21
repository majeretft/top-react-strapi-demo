import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import constants from "../const";
import { getUser, removeUser, setUser } from "../services/userService";

const initialState = {
  userData: null,
  loading: false,
  errorMessage: null,
};

const currentUserData = getUser();
if (currentUserData) {
  initialState.userData = currentUserData;
}

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ login, password }) => {
    const response = await axios.post(
      `${constants.urlBase}/${constants.apiPath}/auth/local/`,
      {
        identifier: login,
        password: password,
      },
      {
        validateStatus: null,
      }
    );

    if (response.data?.error?.message) {
      throw response.data?.error?.message;
    }

    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, _action) => {
      state.userData = null;
      removeUser();
    },
    clearErrorMessage: (state, _action) => {
      state.errorMessage = null;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      const data = {
        jwt: action.payload.jwt,
        user: action.payload.user,
      }

      setUser(data);

      state.userData = data;
      state.loading = false;
    },

    [userLogin.pending]: (state) => {
      state.loading = true;
    },

    [userLogin.rejected]: (state, action) => {
      removeUser();
      state.errorMessage = action.error.message;
      state.loading = false;
    },
  },
});

export const { logout, clearErrorMessage } = userSlice.actions;
