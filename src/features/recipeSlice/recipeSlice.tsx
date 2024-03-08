import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface Recipe {
  label: string;
  image: string;
  url: string;
  index: string;
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
const API_ID = "b46ca1cd";
const API_KEY = "9b3d1f744bc2f3be081354ba00ebf9a5";

export const fetchRecipe = createAsyncThunk<Recipe[], string>(
  "recipes/fetchRecipeList",
  async (recipeSearch) => {
    const response = await axios.get<EdamamResponse>(
      `https://api.edamam.com/search?q=${recipeSearch}&app_id=${API_ID}&app_key=${API_KEY}`
      // `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}`
    );

    console.log("response", response);
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
