import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "./recipeSlice";
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";

const RecipeDetails: React.FC = () => {
  const { selectedRecipe, loading } = useAppSelector((state) => state.recipes);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!selectedRecipe) {
    return <div>Recipe not found.</div>;
  }

  const { label, image, cuisineType, ingredients, healthLabels } =
    selectedRecipe;

  return (
    <>
      <Navbar />

      <div className="flex p-12 bg-lightCream">
        {/* Image container */}
        <div className="w-1/2 h-auto">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        {/* Remaining content */}
        <div className="w-1/2 px-12 space-y-6">
          <div className="py-3">
            <h1 className="text-4xl font-bold">{label}</h1>
            {cuisineType.map((cuisine) => (
              <p key={cuisine}>{cuisine}</p>
            ))}
          </div>
          <div className="w-full flex flex-col items-start space-y-1">
            <h2 className="text-lg font-semibold">Ingredients</h2>
            {ingredients.map((ingredient, index) => (
              <ul key={index} className="px-4 list-disc">
                <li>{ingredient.text}</li>
              </ul>
            ))}
          </div>
          <div className="w-full flex flex-col items-start space-y-1">
            <h2 className="text-lg font-semibold">Health Labels</h2>
            {healthLabels.map((label, index) => (
              <ul key={index} className="px-4 list-disc">
                <li>{label}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
