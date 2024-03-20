import React from "react";
import { Recipe } from "./recipeSlice";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, index }) => {
  const uri = recipe.uri.split("#")[1];

  return (
    <Link to={`recipe/${uri}`}>
      <div key={index}>
        <img
          src={recipe.image}
          className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt={recipe.label}
        />
        <p className="text-darkGreen text-center pt-3">{recipe.label}</p>
      </div>
    </Link>
  );
};

export default RecipeCard;
