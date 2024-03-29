import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Hooks from "./ReactTypeScript/Hooks";
import Learn from "./ReactTypeScript/Learn";
import Home from "./features/components/Home";
import RecipeDetails from "./features/recipeSlice/RecipeDetails";
import { ThreeDCardDemo } from "./features/components/ThreeDCardDemo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/recipe/:id",
      element: <RecipeDetails />,
    },

    {
      path: "/card",
      element: <ThreeDCardDemo />,
    },
    {
      path: "/learn",
      element: <Learn message="Hello WWorld" age={20} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
