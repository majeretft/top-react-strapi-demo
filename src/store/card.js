import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import constants from "../const";

const initialState = {
  cards: [],
  loading: false,
};

export const getCards = createAsyncThunk("cards/getCards", async () => {
  const response = await axios.get(
    `${constants.urlBase}/${constants.apiPath}/cards?populate=*`,
    {
      validateStatus: null,
    }
  );

  if (response.data?.error) throw JSON.stringify(response.data?.error);

  return response.data;
});

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: {
    [getCards.fulfilled]: (state, action) => {
      state.cards = action.payload.data;

      state.loading = false;
    },
    [getCards.pending]: (state) => {
      state.loading = true;
    },
    [getCards.rejected]: (state, action) => {
      // TODO

      state.loading = false;
    },
  },
});
