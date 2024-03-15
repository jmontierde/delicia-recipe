import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between py-6 px-16 items-center w-full bg-darkGreen text-customText">
        {/* <img
          src="/src/assets/delica-logo.png"
          alt="logo"
          className="w-16 text-white"
        /> */}
        <h1 className="font-lobster font-bold  text-2xl">Delicia</h1>
        <ul className="flex space-x-6 text-cream">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/about">Food</Link>
          <Link to="/about">Recipe</Link>
        </ul>
        <img
          src="/src/assets/search-icon.png"
          alt="search-icon"
          className="w-8"
        />
      </div>
    </>
  );
};

export default Navbar;
