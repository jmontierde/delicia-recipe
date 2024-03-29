import gsap from "gsap";
// import FoodList from "./FoodList";
import Navbar from "./Navbar";
import Recipe from "./Recipe";
import Search from "./Search";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Home = () => {
  const tl = gsap.timeline();

  tl.from("#imageAnimate", {
    y: -500,
    duration: 0.5,
    ease: "power1.in",
    repeat: 1,
  });

  const words = ` Craving delicious yet healthy food? Look no further! Our app makes
it easy to find and cook recipes that tantalize your taste buds and
  fuel your body for optimal health.`;

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
            <TextGenerateEffect words={words} className="text-customText" />
          </p>
        </div>
        <div className="w-3/6 ">
          <img
            src="/src/assets/chafing-dish.png"
            alt="Salad"
            className=" w-10/12  mx-auto"
            id="imageAnimate"
          />
        </div>
      </div>
      <Recipe />
      {/* <FoodList /> */}
      {/* <RecipeList/> */}
      <Search />
    </>
  );
};

export default Home;
