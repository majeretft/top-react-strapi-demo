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

export const updateCard = createAsyncThunk(
  "cards/updateCard",
  async (data, thunkApi) => {
    const state = thunkApi.getState();

    const fd = new FormData();
    fd.append("files", data.cardImage);

    const responseUpload = await axios.post(
      `${constants.urlBase}/${constants.apiPath}/upload`,
      fd,
      {
        validateStatus: null,
        headers: {
          Authorization: `bearer  ${state.user.userData.jwt}`,
        },
      }
    );

    if (responseUpload.data?.error)
      throw JSON.stringify(responseUpload.data?.error);

    const response = await axios.put(
      `${constants.urlBase}/${constants.apiPath}/cards/${data.id}?populate=*`,
      {
        data: {
          cardHeader: data.cardHeader,
          cardBody: data.cardBody,
          cardImage: responseUpload.data[0].id,
        },
      },
      {
        validateStatus: null,
        headers: {
          Authorization: `bearer  ${state.user.userData.jwt}`,
        },
      }
    );

    if (response.data?.error) throw JSON.stringify(response.data?.error);

    return response.data;
  }
);

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

    [updateCard.fulfilled]: (state, action) => {
      const index = state.cards.findIndex(
        (x) => x.id === action.payload.data.id
      );

      state.loading = false;

      if (index < 0) return;

      state.cards[index] = action.payload.data;

      state.loading = false;
    },
    [updateCard.pending]: (state) => {
      state.loading = true;
    },
    [updateCard.rejected]: (state, action) => {
      // TODO

      state.loading = false;
    },
  },
});
