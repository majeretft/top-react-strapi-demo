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

export const updateCard = createAsyncThunk("cards/updateCard", async (data, thunkApi) => {
  // TODO Сначала загрузить картинку, а потом обновлять ID для фото
  
  const state = thunkApi.getState();

  const fd = new FormData();

  const dt = {
    cardHeader: data.cardHeader,
    cardBody: data.cardBody,
  };

  fd.append("data", JSON.stringify(dt));
  fd.append("files.photo", data.cardImage, data.cardImage.name);

  const response = await axios.put(
    `${constants.urlBase}/${constants.apiPath}/cards/${data.id}?populate=*`,
    fd,
    {
      validateStatus: null,
      headers: {
        Authorization: `bearer  ${state.user.userData.jwt}`,
      },
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
