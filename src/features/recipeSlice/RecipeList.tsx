import { RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipe } from "./recipeSlice";

const RecipeList: React.FC = () => {
  const { recipes } = useSelector((state: RootState) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  //   const recipeList = recipes.map((recipe) => recipe.label);

  //   console.log("recipeList", recipeList);

  return (
    <div>
      <div>
        <h2>Recipe</h2>
        {recipes.map((recipe) => (
          <p>{recipe.label}</p>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
