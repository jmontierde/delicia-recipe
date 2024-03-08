import { RootState, useAppDispatch } from "@/store";
import { Suspense, useDeferredValue, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchRecipe } from "./recipeSlice";
import { Link } from "react-router-dom";

const RecipeList: React.FC = () => {
  const { recipes, loading, error } = useSelector(
    (state: RootState) => state.recipes
  );

  const dispatch = useAppDispatch();

  const [searchRecipeInput, setSearchRecipeInput] = useState("");

  const deferredSearchQuery = useDeferredValue(searchRecipeInput);

  console.log("recipes", recipes);

  useEffect(() => {
    const query =
      deferredSearchQuery.trim() === "" ? "Chicken" : deferredSearchQuery;
    dispatch(fetchRecipe(query));
  }, [dispatch, deferredSearchQuery]);

  return (
    <div className="bg-darkGreen">
      <input
        type="text"
        name="searchRecipe"
        id="searchRecipe"
        onChange={(e) => setSearchRecipeInput(e.target.value)}
      />
      {loading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>Error ...</span>
      ) : (
        <div className="grid grid-cols-3 gap-6 w-full mx-auto place-items-center ">
          {recipes.map((recipe, index) => (
            <Link to={`/recipe/${index}`}>
              <Suspense fallback={<div>Loading...</div>}>
                <div
                  key={index}
                  className=" bg-[#FEFAE0] w-full min-h-full p-6 space-y-3 rounded-sm"
                >
                  <img
                    src={recipe.image}
                    alt=""
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-darkGreen text-center">{recipe.label}</p>
                </div>
              </Suspense>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
