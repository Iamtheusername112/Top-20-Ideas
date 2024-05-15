import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import HomeScreen from "./screens/home/HomeScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNewScreen from "./screens/newIdea/AddNewScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/new",
    element: <AddNewScreen />,
  },
]);

function App() {
  const [theme, setTheme] = useState("lemonade");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="flex flex-col items-center p-4 md:p-10"
        data-theme={theme}
      >
        <div className="max-w-2xl w-full items-center ">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
