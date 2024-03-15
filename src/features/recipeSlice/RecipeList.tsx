import { RootState, useAppDispatch } from "@/store";
import { useDeferredValue, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchRecipe } from "./recipeSlice";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import RecipeCard from "./RecipeCard";
import { Spinner } from "@material-tailwind/react";

const RecipeList: React.FC = () => {
  const { recipes, loading, error } = useSelector(
    (state: RootState) => state.recipes
  );

  const dispatch = useAppDispatch();

  const [searchRecipeInput, setSearchRecipeInput] = useState("");

  const deferredSearchQuery = useDeferredValue(searchRecipeInput);

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
        // <span>Loading...</span>
        <Spinner h-24 w-24 />
      ) : error ? (
        <span>Error ...</span>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3  w-full mx-auto place-items-center">
          {recipes.map((item, index) => (
            // console.log("recipe uri", recipe.uri),
            <CardContainer>
              <CardBody className="bg-[#FEFAE0] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full ">
                  <RecipeCard recipe={item} index={index} />
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
