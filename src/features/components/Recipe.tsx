const Recipe = () => {
  return (
    <div className="overflow-hidden p-6  bg-lightCream">
      <h2 className="text-center text-4xl font-bold text-[#1A220F] pb-6">
        Recipe
      </h2>
      <div className="grid grid-cols-4 gap-6 w-full place-items-center">
        <img src="/src/assets/salad.png" alt="" className="w-full p-6 " />
        <img src="/src/assets/salad.png" alt="" className="w-full p-6" />
        <img src="/src/assets/salad.png" alt="" className="w-full p-6" />
        <img src="/src/assets/salad.png" alt="" className="w-full p-6" />
      </div>
    </div>
  );
};

export default Recipe;
