import React, { useEffect } from "react";
import gsap from "gsap";

// Import your images here
import saladImage from "/src/assets/salad.png";
import friesImage from "/src/assets/fries.png";
import beefPlatingImage from "/src/assets/beef plating.png";
import friedFoodImage from "/src/assets/fried-food.png";

const Recipe = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(
      "#plate img",
      {
        x: "-600%", // Start from the left side of the screen
      },
      {
        x: "600%", // Move to the right side of the
        yoyoEase: true,
        duration: 10, // Animation duration
        ease: "none", // Linear animation without easing
      }
    );
  }, []);

  return (
    <div className="overflow-hidden p-6 bg-lightCream">
      <h2 className="text-center text-4xl font-bold text-[#1A220F] pb-6">
        Recipe
      </h2>
      <div
        className="grid grid-cols-4 gap-6 w-full place-items-center"
        id="plate"
      >
        <img src={saladImage} alt="Salad" className="w-full p-6" />
        <img src={friesImage} alt="Fries" className="w-full object-cover" />
        <img src={beefPlatingImage} alt="Beef Plating" className="w-full p-6" />
        <img src={friedFoodImage} alt="Fried Food" className="w-full p-6" />
      </div>
    </div>
  );
};

export default Recipe;
