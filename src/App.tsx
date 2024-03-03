import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Hooks from "./ReactTypeScript/Hooks";
import Learn from "./ReactTypeScript/Learn";
import Home from "./features/components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
