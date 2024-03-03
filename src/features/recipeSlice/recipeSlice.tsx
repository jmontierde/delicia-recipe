import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface Recipe {
  label: string;
  image: string;
  url: string;
  // Add other properties as needed
}

interface RecipeState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}

interface EdamamResponse {
  hits: {
    recipe: Recipe;
  }[];
}

const initialState: RecipeState = {
  recipes: [],
  loading: false,
  error: null,
};
const API_ID = "b01dd00e";
const API_KEY = "25e074df69f37e86b32e53acf03a35b0";

export const fetchRecipe = createAsyncThunk(
  "recipes/fetchRecipeList",
  async () => {
    const response = await axios.get<EdamamResponse>(
      `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`
    );
    return response.data.hits.map((hit) => hit.recipe);
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default recipeSlice.reducer;
