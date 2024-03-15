import RecipeList from "../recipeSlice/RecipeList";
// import FoodList from "./FoodList";
import Navbar from "./Navbar";
import Recipe from "./Recipe";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className=" h-screen flex justify-center px-16 gap-3 items-center bg-darkGreen"
        style={{ height: `calc(100vh - 80px)` }}
      >
        <div className="w-4/6 ">
          <h1 className="text-8xl  font-bold text-customText">
            Delicious Food, <br /> Healthy Food
          </h1>{" "}
          <p className=" pt-6 text-lg text-customText opacity-70  w-10/12">
            Craving delicious yet healthy food? Look no further! Our app makes
            it easy to find and cook recipes that tantalize your taste buds and
            fuel your body for optimal health.
          </p>
        </div>
        <div className="w-3/6 ">
          <img
            src="/src/assets/chafing-dish.png"
            alt="Salad"
            className=" w-10/12  mx-auto"
          />
        </div>
      </div>
      <Recipe />
      {/* <FoodList /> */}
      <RecipeList />
    </>
  );
};

export default Home;
