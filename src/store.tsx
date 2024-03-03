import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./features/recipeSlice/recipeSlice";

const store = configureStore({
  reducer: {
    recipes: recipeSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
