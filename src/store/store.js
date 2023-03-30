import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user";
import { cardSlice } from "./card";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    card: cardSlice.reducer,
  },
});
