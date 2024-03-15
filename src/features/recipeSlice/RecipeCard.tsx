import React from "react";
import { Recipe } from "./recipeSlice";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, index }) => {
  const uri = recipe.uri.split("#")[1];

  return (
    <Link to={`recipe/${uri}`}>
      <div key={index} className="bg-[#fff]">
        <img
          src={recipe.image}
          className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt={recipe.label}
        />
        <p className="text-darkGreen text-center">{recipe.label}</p>
      </div>
    </Link>
  );
};

export default RecipeCard;
