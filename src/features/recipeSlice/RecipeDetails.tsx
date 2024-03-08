import React from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RecipeDetails: React.FC = () => {
  // Use optional chaining to handle potential undefined values from useParams
  const { index: recipeIndex } = useParams<{ index?: string }>();

  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  // Convert recipeIndex to a number (assuming index represents a numerical recipe ID)
  const recipeId = parseInt(recipeIndex || "0"); // Provide a default value (0) if index is undefined

  const recipe = recipes[recipeId];

  console.log("recipe details", recipe);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <p>
        URL: <a href={recipe.url}>{recipe.url}</a>
      </p>
    </div>
  );
};

export default RecipeDetails;
