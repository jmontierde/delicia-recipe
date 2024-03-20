import { RootState, useAppDispatch } from "@/store";
import React, { useDeferredValue, useEffect, useState } from "react";
import { fetchRecipe } from "../recipeSlice/recipeSlice";
import RecipeList from "../recipeSlice/RecipeList";
import { useSelector } from "react-redux";

const Search = () => {
  const { recipes, loading, error } = useSelector(
    (state: RootState) => state.recipes
  );

  const dispatch = useAppDispatch();

  // const [hideSearch, setHideSearch] = useState(true);
  const [searchRecipeInput, setSearchRecipeInput] = useState("");

  const deferredSearchQuery = useDeferredValue(searchRecipeInput);

  useEffect(() => {
    const query =
      deferredSearchQuery.trim() === "" ? "Bread" : deferredSearchQuery;
    dispatch(fetchRecipe(query));
  }, [dispatch, deferredSearchQuery]);

  return (
    <div className="flex  flex-col pt-12 bg-darkGreen">
      <input
        type="text"
        id="searchInput"
        className="w-1/3 py-2 text-lg rounded-sm border pl-6 mx-auto " // Use w-1/2 for half-screen width
        placeholder="Search Recipe..."
        onChange={(e) => setSearchRecipeInput(e.target.value)}
      />

      <RecipeList
        recipes={recipes}
        loading={loading}
        error={error}
        selectedRecipe={null}
      />
    </div>
  );
};

export default Search;
